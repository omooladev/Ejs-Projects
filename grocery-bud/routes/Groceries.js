const express = require("express");
const { getGroceries,createGrocery } = require("../controllers/Groceries");

const router = express.Router();

router.route("").get(getGroceries).post(createGrocery);

module.exports = router;
