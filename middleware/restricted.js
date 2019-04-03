module.exports = (req, res, next) => {
  //change this
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(400).json({ message: "Missing access credentials." });
  }
};
