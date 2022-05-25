const people = [];


exports.peopleMiddleware = (req,res,next) => {
    req.people = people;
    next();
}
