imimport { getDogs, updateDog, destroyDog } from "../../../utils/actions";

export default async function handler(req, res) {
  try {
    // GET THE URL PARAM
    const id = req.query.id;

    // SHOW ROUTE
    if (req.method === "GET") res.json(getDogs()[id]);

    // UPDATE ROUTE
    if (req.method === "PUT") res.json(updateDog(req.body, id));

    // DESTROY ROUTE
    if (req.method === "DELETE") res.json(destroyDog(id));

    // ANYTHING ELSE
    if (!["GET", "PUT", "DELETE"].includes(req.method))
      res.status(404).send("no response for that method");
  } catch (error) {
    res.status(400).json({ error });
  }
}
