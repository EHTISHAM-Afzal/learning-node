const joi = require("joi");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, minlength : 3, maxlength: 20, trim: true },
  username: {
    type: String,
    unique: true,
    required: true,
    minlength: 4,
    maxlength: 15,
    lowercase: true,
  },
  isEnrolled: { type: Boolean, default: false, enum: [true, false] },
});

const Student = mongoose.model("Student", studentSchema);

const Validation = joi.object({
  name: joi.string().min(3),
  username: joi.string().alphanum().min(3).max(30).required(),
  isEnrolled: joi.boolean(),
});

module.exports = {
    Student,
    Validation,
}
