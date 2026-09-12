import { put, list } from "@vercel/blob";

// 질문과 답변을 별도 파일로 저장(append-only). Vercel Blob의 같은 경로 덮어쓰기는
// CDN 캐시 때문에 즉시 반영이 안 되는 경우가 있어, 절대 덮어쓰지 않고 새 파일만 추가한다.
// qna/<id>-q.json  질문
// qna/<id>-a.json  답변 (있으면)
export default async function handler(req, res) {
  if (req.method === "GET") {
    const { blobs } = await list({ prefix: "qna/" });
    const byId = {};
    await Promise.all(
      blobs.map(async (b) => {
        const m = b.pathname.match(/^qna\/(.+)-(q|a)\.json$/);
        if (!m) return;
        const [, id, kind] = m;
        try {
          const data = await (await fetch(b.url)).json();
          byId[id] = byId[id] || { id };
          if (kind === "q") Object.assign(byId[id], data);
          else byId[id].answer = data.answer, (byId[id].answeredAt = data.answeredAt);
        } catch (e) {
          /* skip broken record */
        }
      })
    );
    const posts = Object.values(byId)
      .filter((p) => p.question)
      .sort((a, b) => b.ts.localeCompare(a.ts));
    res.status(200).json({ count: posts.length, posts });
    return;
  }

  if (req.method === "POST") {
    const { type, question, name, id, answer, key } = req.body || {};

    if (type === "ask") {
      if (!question || !question.trim()) {
        res.status(400).json({ error: "질문을 입력해주세요." });
        return;
      }
      const newId = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
      const record = {
        id: newId,
        question: question.trim().slice(0, 500),
        name: (name || "").trim().slice(0, 50) || "익명",
        ts: new Date().toISOString()
      };
      await put(`qna/${newId}-q.json`, JSON.stringify(record), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false
      });
      res.status(200).json({ ok: true, post: record });
      return;
    }

    if (type === "answer") {
      if (!key || key !== process.env.ADMIN_KEY) {
        res.status(403).json({ error: "권한이 없어요." });
        return;
      }
      if (!id || !answer || !answer.trim()) {
        res.status(400).json({ error: "id와 답변 내용이 필요해요." });
        return;
      }
      const record = { answer: answer.trim().slice(0, 1000), answeredAt: new Date().toISOString() };
      await put(`qna/${id}-a.json`, JSON.stringify(record), {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: false
      });
      res.status(200).json({ ok: true, ...record });
      return;
    }

    res.status(400).json({ error: "알 수 없는 요청이에요." });
    return;
  }

  res.status(405).json({ error: "허용되지 않은 메서드입니다." });
}
