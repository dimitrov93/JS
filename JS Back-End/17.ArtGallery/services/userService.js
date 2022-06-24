const User = require('../models/User');

exports.withId = (userId) => User.findById(userId);
exports.AddPublication = async (userId, publicationId) => {
        // const user = User.findById(userId);
    // user.publications.push(publication);
    // return await user.save();

    return User.updateOne({_id: userId}, {$push: {myPublications: publicationId}})
}