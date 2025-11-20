const router = require("express").Router();
const auth = require("../middlewares/auth");
const ordersController = require("../controllers/orders.controller");

router.post("/", auth, ordersController.createOrder);
router.get("/", auth, ordersController.getOrders);

module.exports = router;
