const orderService = require("../services/orders.service");

exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ récup depuis token
    const order = await orderService.createOrder({
      ...req.body,
      user: userId,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const data = await orderService.getOrders();
  res.json(data);
};
