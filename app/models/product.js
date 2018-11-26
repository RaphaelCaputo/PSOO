module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    quantity: DataTypes.STRING
  });

  return Product;
};
