const LocalStorage = require("node-localstorage").LocalStorage;

module.exports = function(req, res, next) {
  if (typeof localStorage === "undefined" || localStorage === null) {
    localStorage = new LocalStorage("./scratch");
  }

  const token = localStorage.getItem("Token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  next();
};
