const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.stack || err.message || err); // Log the error stack for debugging

    const statusCode = res.statusCode ? res.statusCode : 500; // Use existing status code or default to 500

    res.status(statusCode).json({
        message: err.message || 'An unexpected error occurred',
        // Optionally include stack trace in development
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

module.exports = { errorHandler };