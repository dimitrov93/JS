const cats = [];

exports.catMiddleware = (req, res, next) => {
    req.cats = cats;

    next();
};
