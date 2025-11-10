require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
const connectDB = require("./config/database");
app.use("/", require("./routes/dashboard.routes"));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/products", require("./routes/products.routes"));

connectDB().then(() => {
  app.listen(process.env.PORT, () =>
    console.log(`✅ Server running on ${process.env.PORT}`)
  );
});
