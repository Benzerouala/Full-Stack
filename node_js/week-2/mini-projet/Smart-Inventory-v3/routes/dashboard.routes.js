const router = require("express").Router();
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");

router.get("/", auth, authorize("admin", "manager"), (req, res) => {
  res.json({ message: "Welcome to dashboard!" });
});

module.exports = router;
