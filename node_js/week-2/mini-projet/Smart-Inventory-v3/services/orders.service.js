const Order = require("../models/order.model");

exports.createOrder = async ({ products, total, user }) => {
  const order = await Order.create({ products, total, user });
  return order;
};

exports.getOrders = async () => {
  return Order.find().populate("user").populate("products");
};
