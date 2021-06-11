import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  try {
    const address = `https://${req.body.username}:${req.body.password}@${process.env.gitea}/api/v1/user`;
    const response = await fetchJson(address);
    req.session.set("user", response);
    await req.session.save();
    res.json({ user: response, message: "complete" });
  } catch (error) {
    res.send("did not login");
  }
});
