const { User } = require("../../models");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get("/create", auth, async (req, res) => {
  res.render("users");
});

// router.post("/create", (req, res) => {
//   User.create({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password
//   }).then(user => console.log(JSON.stringify(user)));
//   res.redirect("/users");
// });

module.exports = router;
