const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const app = express();
app.use(express.json());

// ✅ Security
app.use(helmet());

// ✅ CORS
app.use(
  cors({
    origin: process.env.FRONT_URL || "*",
  })
);

// ✅ Rate limit
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 10,
    message: "Too many attempts, try later!",
  })
);

app.use("/api/dashboard", require("./routes/dashboard.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/orders", require("./routes/orders.routes"));

module.exports = app;
