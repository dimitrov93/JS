exports.errorHandler = (err, req, res, next) => {
    res.status(404).render('404', { error: err.message})
}