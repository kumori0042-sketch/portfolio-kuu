export default function handler(req, res) {
  res.setHeader("Set-Cookie", "session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
  res.writeHead(302, { Location: "/qna.html" });
  res.end();
}
