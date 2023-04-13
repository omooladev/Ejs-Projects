const { BadRequestError } = require("../errors/bad-request");

const dummyData = [
  {
    id: 1,
    itemName: "Egg",
  },
  {
    id: 2,
    itemName: "fish",
  },
  {
    id: 3,
    itemName: "donut",
  },
];
const getGroceries = (req, res) => {
  res.render("index.ejs", { pageTitle: "Groceries", groceryItems: dummyData });
};

const createGrocery = (req, res) => {
  const { itemName } = req.body;

  if (!itemName) {
    throw new BadRequestError("Please provide an item");
  }
  // const groceryItem = req.body.grocery;
  // const newItem = groceryItem && { itemName: groceryItem };
  // if (!groceryItem) {
  //   return res.render("error.ejs");
  // }
  // dummyData.push(newItem);s

  // res.status(200).json({});
};

module.exports = { getGroceries, createGrocery };
