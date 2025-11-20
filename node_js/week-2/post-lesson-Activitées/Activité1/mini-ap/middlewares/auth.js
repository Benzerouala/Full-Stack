export default (req, res, next) => {
    // auth simple
    if (req.headers.authorization !== "1234") {
        return res.status(401).json({ message: "❌ Not Authorized" });
    }
    next();
};
