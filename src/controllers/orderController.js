const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/user");

exports.createOrder = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    const order = new Order({
      user: user,
      product: product,
      quantity: quantity,
    });

    await order.save();
    res.status(201).json({
      status: "success",
      message: "create order success",
      data: order,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product");

    res.status(200).json({
      status: "success",
      message: "get all order data success",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const orders = await Order.find({ user: userId })
      .populate("product")
      .populate("user");

    const products = orders.flatMap((order) => order.product);
    const user = orders.length > 0 ? orders[0].user.toObject() : null;

    const formattedUsers = user.map((user) => ({
      _id: user._id,
      name: user.name,
      price: user.email,
    }));

    const formattedProducts = products.map((product) => ({
      _id: product._id,
      name: product.name,
      price: product.price,
    }));

    res.status(200).json({
      status: "success",
      message: "get order data by user",
      data: { user: formattedUsers, products: formattedProducts },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
