const db = require("../../lib/postgresSetup");
const axios = require("axios");
import withSession from "../../lib/session";
export default withSession(async (req, res) => {
  const user = req.session.get("user");
  const params = req.body;
  if (user) {
    const address =
      process.env.NODE_ENV === "production"
        ? "https://pythonpacapi.herokuapp.com/update"
        : "http://localhost:5000/update";

    const response = await axios.post(address, {
      ...params,
      key: process.env.pythonapi,
    });
    res.send(response.data);
  } else {
    res.send("access denied");
  }
});
