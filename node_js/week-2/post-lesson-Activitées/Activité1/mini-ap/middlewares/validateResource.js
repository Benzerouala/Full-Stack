// middlewares/validateResource.js

export default (req, res, next) => {
    // hna ndir validation b simple
    if (!req.body.name) {
        return res.status(400).json({ message: "❌ name wajib" });
    }
    next();
};
