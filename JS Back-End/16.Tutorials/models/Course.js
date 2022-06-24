const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    title: {type: String,required: [true, 'Username is required'],unique: true,maxLength: 50},
    description: {type: String,required: true,},
    image: {type: String,required: true,},
    duration: {type: String,required: true,},
    usersEnrolled: [{type: mongoose.Types.ObjectId,ref: 'User'}],
    author: {type: mongoose.Types.ObjectId,ref: 'User'}
    },
    {
     timestamps: true
    }
);


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;