const router = require("express").Router();
const { List, Row } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const lists = await List.findAll();
    res.json({ message: "success", lists });
  } catch (error) {
    console.log(error);
    res.json({ message: "can't get lists", error });
  }
});

router.post("/", async (req, res) => {
 try { const { shortName, fullName, color, cityIds } = req.body;
 const list = await List.create({
   shortName,
   fullName,
   color,
 })
 cityIds.forEach(async (cityId) => {
   await Row.create({
     listId: list.id,
     cityId,
   })
 })
 const rows = await Row.findAll({ where: { listId: list.id } })
 res.json({ message: "success", list , rows})
  
 } catch (error) {
   console.log(error)
   res.json({ message: "can't create list", error })
 }
})

router.delete("/:listId/remove", async (req, res) => {
try {
  const { listId } = req.params;
  console.log(listId);
  const deleted = await List.destroy({ where: { id: listId } });
  console.log(deleted);
 if (deleted) {
  res.json({ message: "success" });
 } else {
  res.json({ message: "can't delete list" });
  
 }
} catch (error) {
  res.json({ message: "can't delete list", error });
}
  }
)


module.exports = router;

