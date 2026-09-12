import { createSessionCookie, parseCookies } from "../_session.js";

export default async function handler(req, res) {
  const { code, state } = req.query;
  const cookies = parseCookies(req);

  if (!code || !state || state !== cookies.oauth_state) {
    res.status(400).send("로그인 요청이 올바르지 않아요. 다시 시도해주세요.");
    return;
  }

  const redirectUri = `https://${req.headers.host}/api/auth/callback`;

  try {
    const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        redirect_uri: redirectUri
      })
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      res.status(400).send("GitHub 인증에 실패했어요: " + (tokenData.error_description || tokenData.error || "unknown"));
      return;
    }

    const userRes = await fetch("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${tokenData.access_token}`, "User-Agent": "portfolio-kuu" }
    });
    const user = await userRes.json();

    const session = createSessionCookie({
      login: user.login,
      name: user.name || user.login,
      avatar: user.avatar_url,
      iat: Date.now()
    });

    res.setHeader("Set-Cookie", [
      `session=${session}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`,
      `oauth_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`
    ]);
    res.writeHead(302, { Location: "/qna.html" });
    res.end();
  } catch (e) {
    res.status(500).send("로그인 처리 중 오류가 발생했어요.");
  }
}
