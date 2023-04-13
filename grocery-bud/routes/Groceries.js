const express = require("express");
const { getGroceries, createGrocery } = require("../controllers/Groceries");

const router = express.Router();

router.route("/groceries").get(getGroceries).post(createGrocery);
router.route("/").get((req, res) => {
  res.redirect("/groceries");
});
module.exports = router;
