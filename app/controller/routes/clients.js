const { Client } = require("../../models");
const auth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

router.get("/create", auth, async (req, res) => {
  res.render("clients");
});

router.post("/create", auth, (req, res) => {
  Client.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    cellphone: req.body.cellphone
  }).then(client => console.log(JSON.stringify(client)));
  res.redirect("/clients");
});

router.delete("/:id", auth, (req, res) => {
  Client.destroy({ where: { id: req.param.id } });
  res.redirect("/clients");
});

module.exports = router;
