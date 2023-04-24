const NotFound = (req, res) => {
  res.render("NotFound.ejs", { pageTitle: "Page Not Found" });
};

module.exports = NotFound;
