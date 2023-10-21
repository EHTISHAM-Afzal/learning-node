const joi = require("joi");
const mongoose = require("mongoose");
const { CatagorySchema } = require("./catagoryModel");

const courseSchema = new mongoose.Schema({
    name: { type: String, min: 3, max: 20, },
    author: { type: String, required: true, min: 4, max: 15, },
    ispublished: { type: Boolean, default: true, enum: [true, false] },
    catagory: {
        type: CatagorySchema,
        required: true
    }
});

const Course = mongoose.model("Course", courseSchema);

const Validation = joi.object({
    name: joi.string().min(3),
    author: joi.string().alphanum().min(3).max(30).required(),
    isEnrolled: joi.boolean(),
    catagory : joi.string().required()
});

module.exports = {
    Course,
    Validation,
}