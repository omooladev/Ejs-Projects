const { BadRequestError } = require("../errors/bad-request");
const { StatusCodes } = require("http-status-codes");
const getGroceries = (req, res) => {
  res.render("index.ejs", { pageTitle: "Groceries", groceryItems: null });
};

const createGrocery = (req, res) => {
  const { itemName, groceryItems } = req.body;
  if (groceryItems) {
    return res.render("index.ejs", { pageTitle: "Groceries", groceryItems: groceryItems });
  }
  if (!itemName) {
    throw new BadRequestError("Please provide an item");
  }
  const newItem = { id: Math.random(), itemName };

  res.status(StatusCodes.CREATED).json({ groceryItem: newItem });
};

module.exports = { getGroceries, createGrocery };
