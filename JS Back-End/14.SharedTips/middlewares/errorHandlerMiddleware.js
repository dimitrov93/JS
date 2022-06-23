const { getErrorMsg } = require('../utils/errorHelpers');


exports.errorHandler = (err, req, res, next) => {
    const status = err.status || 404;
    console.log("Status " + status);
    res.status(status).render('404', {error: getErrorMsg(err)})
}