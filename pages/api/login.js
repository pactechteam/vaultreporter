import fetchJson from "../../lib/fetchJson";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const { username, password } = await req.body;
  const address = `https://${req.body.username}:${req.body.password}@git.bonner.hopto.org/api/v1/user`;
  try {
    // we check that the user exists on GitHub and store some data in session
    console.log("inside login try block");

    const response = await fetchJson(address);
    console.log("response", response);
    req.session.set("user", response);
    await req.session.save();
    console.log("below req.session.save()");
    res.json({ user: response, message: "complete" });
  } catch (error) {
    const { response: fetchResponse } = error;
    console.log("inside login catch block, about to send error");
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
