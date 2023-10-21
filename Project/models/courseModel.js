const joi = require("joi");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 20, },
    author: { type: String, required: true, minlength: 4, maxlength: 15, },
    ispublished: { type: Boolean, default: true, enum: [true, false] },
    catagory: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Catagory",
        required: true
    },
    updatedAt : {type : Date , default : Date.now},
    createdAt : {type : Date , default : Date.now}
});

const Course = mongoose.model("Course", courseSchema);

const Validation = joi.object({
    name: joi.string().min(3),
    author: joi.string().alphanum().min(3).max(30).required(),
    isEnrolled: joi.boolean(),
    catagory : joi.string().required() // or joi.objectId().required() if you have @hapi/joi-objectid
});

module.exports = {
    Course,
    Validation,
}