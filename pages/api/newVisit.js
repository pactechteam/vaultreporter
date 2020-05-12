const db = require("../../lib/postgresSetup");

export default async (req, res) => {
  const walkingListId = req.body.walkingListId;
  const pointId = req.body.pointId;
  console.log(`walkinglistid: ${walkingListId}`);
  console.log(`pointId: ${pointId}`);
  try {
    //get nextVisit number
    let text = `Select nextvisit from walkinglists WHERE id=$1`;
    let values = [walkingListId];

    const nextVisitResponse = await db.query(text, values);
    // console.log(nextVisitResponse);
    const nextVisit = Math.round(nextVisitResponse.rows[0].nextvisit);
    const incrementedNextVisit = nextVisit + 1;

    text = `INSERT INTO visits(walkinglistid,pointid,number) VALUES($1,$2,$3) RETURNING *`;
    values = [walkingListId, pointId, nextVisit];

    const visitResponse = await db.query(text, values);

    text = `UPDATE walkinglists SET nextvisit=$1 WHERE ID = $2`;
    values = [incrementedNextVisit, walkingListId];

    const walkinglistResponse = await db.query(text, values);
    console.log("new visit logged");
    res.send(visitResponse.rows[0]);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
