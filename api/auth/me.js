import { verifySessionCookie, parseCookies } from "../_session.js";

export default function handler(req, res) {
  const cookies = parseCookies(req);
  const user = verifySessionCookie(cookies.session);
  if (!user) {
    res.status(200).json({ user: null, isOwner: false });
    return;
  }
  const isOwner = user.login === process.env.OWNER_GITHUB_LOGIN;
  res.status(200).json({ user: { login: user.login, name: user.name, avatar: user.avatar }, isOwner });
}
