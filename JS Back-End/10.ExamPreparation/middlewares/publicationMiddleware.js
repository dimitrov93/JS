const publicationService = require('../services/publicationService');


exports.preloadPublication = async (req,res,next) => {
    const publication = await publicationService.getOne(req.params.publicationId).lean();

    req.publication = publication
    next();
}


exports.isPublicationAuthor = (req,res,next) => {
    if (req.publication.author != req.user._id) {
        return next({messasge: 'You are not authorizaed', status: 401})
    }

    next();
}