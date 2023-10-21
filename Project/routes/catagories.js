const express = require("express");
const { Validation, Catagory } = require("../models/catagoryModel");
const catagoriesRouter = express.Router();


catagoriesRouter.get("/", async (req, res) => {
  await Catagory
    .find()
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant find the Catagory", error: err.message })
    );
});

catagoriesRouter.get("/:name", async (req, res) => {
  await Catagory
    .find({ name: req.params.name })
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant find the Catagory", error: err.message })
    );
});

catagoriesRouter.post("/", (req, res) => {
  const catagory = new Catagory({
    name: req.body.name,
  });
  const { error } = Validation.validate(req.body);
  if (error) return res.status(400).send(error.message);
  catagory.save()
    .then((r) => res.send(r))
    .catch((err) =>
      res.send({ message: "Oops cant save", error: err.message })
    );
});

catagoriesRouter.put("/:name", async (req, res) => {
  const { error } = Validation.validate(req.body);
  if (error) return res.status(400).send(error.message);
  await Catagory
    .findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
    .then((response) =>
      res.send({
        message: "Catagory updated the new data is ",
        response: response,
      })
    )
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant update the Catagory", error: err.message })
    );
});

catagoriesRouter.delete("/:name", async (req, res) => {
  await Catagory
    .findOneAndDelete({ name: req.params.name })
    .then((response) => res.send(response))
    .catch((err) =>
      res
        .status(400)
        .send({ message: "Oops cant delete the Catagory", error: err.message })
    );
});



module.exports = catagoriesRouter;
