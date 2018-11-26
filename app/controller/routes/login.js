const { User } = require("../../models");
var LocalStorage = require("node-localstorage").LocalStorage;
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/token", (req, res) => {
  if (typeof localStorage === "undefined" || localStorage === null) {
    localStorage = new LocalStorage("./scratch");
  }

  localStorage.setItem("Token", "Token");
  res.redirect("/");
});

// router.get("/create", (req, res) => {
//   Client.create({
//     name: "Claudio",
//     email: "claudio@rocketseat.com.br",
//     address: "Rua 1",
//     cellphone: "123456"
//   }).then(client => console.log(JSON.stringify(client)));
//   res.send("Client Created Successfully!");
// });

module.exports = router;
