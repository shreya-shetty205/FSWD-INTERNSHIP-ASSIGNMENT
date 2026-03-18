const logger = (req, res, next) => {
    const now = new Date();

    console.log(now.toLocaleString());

    next();
};

module.exports = logger;