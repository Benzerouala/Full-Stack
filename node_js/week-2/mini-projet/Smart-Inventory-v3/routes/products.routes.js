const router = require("express").Router();
const auth = require("../middlewares/auth");
const authorize = require("../middlewares/authorize");

// Exemple : seulement admin peut créer un produit
router.post("/", auth, authorize("admin"), (req, res) => {
  res.status(201).json({ message: "Product created" });
});

// route accessible à tous
router.get("/", (req, res) => {
  res.json({ products: [] });
});

module.exports = router;
