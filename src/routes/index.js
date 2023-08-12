const express = require("express");
const { register } = require("../controllers/userController");
const { createProduct } = require("../controllers/productController");
const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/register", register);

router.post("/product", createProduct);

router.post("/order", createOrder);

router.get("/order", getAllOrders);

router.get("/order/:userId", getOrderById);

module.exports = router;
