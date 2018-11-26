const winston = require("winston");
const express = require("express");
const bodyParser = require("body-parser");
const users = require("./app/controller/routes/users");
const clients = require("./app/controller/routes/clients");
const products = require("./app/controller/routes/products");
const login = require("./app/controller/routes/login");

const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", users);
app.use("/clients", clients);
app.use("/products", products);
app.use("/login", login);

// require('./controller/db')();
// require('./startup/routes')(app);

// app.use(express.static('./public'));

app.get("/", (req, res) => {
  res.render("home");
});

console.log(`app: ${app.get("env")}`);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);
