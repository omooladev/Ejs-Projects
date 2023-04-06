const dummyData = [
  {
    id: 1,
    itemName: "egg",
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

module.exports = { getGroceries };
