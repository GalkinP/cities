const router = require("express").Router();
const { City } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const cities = await City.findAll();
    res.json({ message: "success", cities });
  } catch (error) {
    console.log(error);
    res.json({ message: "can't get cities", error });
  }
});
module.exports = router;
