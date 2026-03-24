const logger = (req, res, next) => {
    const now = new Date();

    const date = now.toLocaleDateString();   // e.g. 24/03/2026
    const time = now.toLocaleTimeString();   // e.g. 04:45:30 PM

    console.log(`[${date} ${time}] ${req.method} ${req.url}`);

    next();
};

module.exports = logger;