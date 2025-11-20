export default (err, req, res, next) => {
    // Errors format
    res.status(err.statusCode || 500).json({
        status: "error",
        message: err.message || "Internal error",
        timestamp: new Date()
    });
};
