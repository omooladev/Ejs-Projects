const express = require("express");
const { getGroceries } = require("../controllers/Groceries");

const router = express.Router();

router.route("").get(getGroceries);

module.exports = router;
