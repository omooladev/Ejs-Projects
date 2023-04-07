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
  console.log(req.body);
  const groceryItem = req.body.grocery;
  const newItem = groceryItem && { itemName: groceryItem };
  if (!groceryItem) {
    return res.render("error.ejs");
  }
  dummyData.push(newItem);

  res.redirect("/");
};

module.exports = { getGroceries, createGrocery };
