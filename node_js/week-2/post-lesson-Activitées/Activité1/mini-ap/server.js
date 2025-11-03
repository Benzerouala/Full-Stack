// server.js
// ---------------------------
// had file howa l'entry dyal app Express
// ---------------------------

import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// routes
import infoRoute from "./routes/info.js";
import resourceRoute from "./routes/resource.js";
import privateRoute from "./routes/private.js";

// error handler
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

// middleware باش نقرا JSON
app.use(express.json());

// morgan logger
app.use(morgan("dev"));

// router principal
app.use("/api", infoRoute);
app.use("/api/resources", resourceRoute);
app.use("/api/private", privateRoute);

// middleware dyal errors
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server Running on port ${PORT}`);
});
