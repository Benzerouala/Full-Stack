export default (req, res, next) => {
    const hour = new Date().getHours();

    // men 22h l 6h mamnwch
    if (hour >= 22 || hour < 6) {
        return res.status(403).json({ message: "❌ Mamnouch f had lwa9t" });
    }
    next();
};
