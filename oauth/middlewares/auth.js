const Authentication = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/not-found");
  }
  next()
};

module.exports = Authentication;
