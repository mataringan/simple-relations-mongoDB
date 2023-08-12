const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    const product = new Product({
      name: name,
      price: price,
    });

    await product.save();

    res.status(201).json({
      status: "success",
      message: "create product success",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
