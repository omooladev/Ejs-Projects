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
  const newItem = { id: Math.random(), itemName };

  dummyData.push(newItem);
  
  // res.render("index.ejs", { pageTitle: "Groceries", groceryItems: dummyData });
};

module.exports = { getGroceries, createGrocery };
