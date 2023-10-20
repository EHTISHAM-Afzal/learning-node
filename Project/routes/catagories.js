const express = require("express");
const joi = require("joi");
const mongoose = require("mongoose");

const catagoriesRouter = express.Router();

const catagorySchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3 },
});

const catagory = mongoose.model("catagory", catagorySchema);

catagoriesRouter.get("/api/catagories", async (req, res) => {
  await catagory
    .find()
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant find the catagory", error: err })
    );
});

catagoriesRouter.get("/api/catagories/:name", async (req, res) => {
  await catagory
    .find({ name: req.params.name })
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant find the catagory", error: err.message })
    );
});

catagoriesRouter.post("/api/catagories", (req, res) => {
  const Catagory = new catagory({
    name: req.body.name,
  });
  const { error } = validationSchema.validate(req.body);
  if (error) return res.status(400).send(error.message);
  Catagory.save()
    .then((r) => res.send(r))
    .catch((err) =>
      res.send({ message: "Oops cant save", error: err.message })
    );
});

catagoriesRouter.put("/api/catagories/:name", async (req, res) => {
  const { error } = validationSchema.validate(req.body);
  if (error) return res.status(400).send(error.message);
  await catagory
    .findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
    .then((response) =>
      res.send({
        message: "catagory updated the new data is ",
        response: response,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant update the catagory", error: err.message })
    );
});

catagoriesRouter.delete("/api/catagories/:name", async (req, res) => {
  await catagory
    .findOneAndDelete({ name: req.params.name })
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant delete the catagory", error: err.message })
    );
});

const validationSchema = joi.object({
  name: joi.string().min(3).required(),
});

module.exports = catagoriesRouter;
