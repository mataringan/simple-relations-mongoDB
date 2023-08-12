// models/Order.js
const mongoose = require("mongoose");

// const Order = mongoose.model("Order", {
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//   quantity: Number,
// });

const orderSchema = new mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  quantity: Number,
});

module.exports = mongoose.model("Order", orderSchema);
