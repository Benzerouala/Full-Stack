import { Router } from "express";
import auth from "../middlewares/auth.js";
import timeLimiter from "../middlewares/timeLimiter.js";

const router = Router();

router.get("/", auth, timeLimiter, (req, res) => {
    res.json({ msg: "✅ Welcome private zone" });
});

export default router;
