const { Product } = require("../../models");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.get("/create", auth, async (req, res) => {
  res.render("products");
});

router.post("/create", auth, (req, res) => {
  Product.create({
    name: req.body.name,
    desc: req.body.desc,
    quantity: req.body.quantity
  }).then(product => console.log(JSON.stringify(product)));
  res.redirect("/products");
});

module.exports = router;
