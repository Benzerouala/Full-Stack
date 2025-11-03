// routes/info.routes.js

import { Router } from "express";
const router = Router();

// /api/info
router.get("/info", (req, res) => {
    // kanrj3 info dyal project
    res.json({
        project: "Mini API",
        version: "1.0.0",
        date: new Date()
    });
});

export default router;
