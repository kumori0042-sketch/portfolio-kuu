import { put, list } from "@vercel/blob";

// 방문마다 작은 파일 하나씩 추가(append-only)하고 개수를 센다.
// 같은 경로 덮어쓰기는 CDN 캐시 때문에 즉시 반영 안 되는 걸 이미 겪어서 이 방식을 쓴다.
export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    await put(`visits/${id}.json`, JSON.stringify({ ts: new Date().toISOString() }), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false
    });
  }
  const { blobs } = await list({ prefix: "visits/" });
  res.status(200).json({ count: blobs.length });
}
