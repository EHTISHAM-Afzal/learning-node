const joi = require("joi");
const mongoose = require("mongoose");


const CatagorySchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
});

const Catagory = mongoose.model("Catagory", CatagorySchema);

const Validation = joi.object({
  name: joi.string().min(3).required(),
});

module.exports = {
    Catagory , 
    CatagorySchema ,
    Validation
}