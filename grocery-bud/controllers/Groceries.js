const dummyData = [
  {
    id: 1,
    itemName: "Egg is the best food i love to eat",
  },
  {
    id: 2,
    itemName: "fish222222222222222222222222222222222222222222222222",
  },
  {
    id: 3,
    itemName: "donut",
  },
];
const getGroceries = (req, res) => {
  res.render("index.ejs", { pageTitle: "Groceries", groceryItems: dummyData });
};

module.exports = { getGroceries };
