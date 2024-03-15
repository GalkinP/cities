const router = require("express").Router();
const { Row } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const rows = await Row.findAll();
    res.json({ message: "success", rows });
  } catch (error) {
    console.log(error);
    res.json({ message: "can't get rows", error });
  }
});
module.exports = router;
