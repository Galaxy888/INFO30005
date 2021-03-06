/* This is the basic MongoDB schema for a teacher user. */

var mongoose = require('mongoose');
var teacherSchema = mongoose.Schema(
    {
        "teacher_name":String,
        "email":{type: String, unique: true},
        "password":String,
        "country":String,
        "timezone":String,
        "bio":String,
        "img_url": String,
        "subjects": [],
        "Monday": [],
        "Tuesday": [],
        "Wednesday": [],
        "Thursday": [],
        "Friday": [],
        "Saturday": [],
        "Sunday": []
    }
);

mongoose.model('Teacher', teacherSchema);