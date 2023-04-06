const getGroceries = (req, res) => {
  res.render("index.ejs", { pageTitle: "Groceries" });
};

module.exports = { getGroceries };
