const express = require("express");
const { Course, Validation } = require("../models/courseModel");
const { Catagory } = require("../models/catagoryModel");
const router = express.Router();

router.get("/", async (req, res) => {
    await Course.find()
        .then((response) => res.send(response))
        .catch((err) =>
            res.status(400).send({ message: "Oops cant find the Course", error: err })
        );
});

router.get("/:name", async (req, res) => {
    await Course.find({ name: req.params.name })
        .then((response) => response.length == 0 ? res.status(400).send("Cannot find course") : res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant find the Course", error: err.message })
        );
});

router.post("/", async (req, res) => {
    // get catagory from catagories that exlcludes __v and and if not avilible then return error
    const reqCatagory = await Catagory.findOne({
        name: req.body.catagory,
    }).select("-__v");
    if (!reqCatagory)
        return res
            .status(400)
            .send("Invalid Catagory make sure the catagory is availble");
    const newCourse = new Course({
        catagory: reqCatagory,
        name: req.body.name,
        author: req.body.author,
    });
    const { error } = Validation.validate(req.body);
    if (error) return res.status(400).send(error.message);
    newCourse
        .save()
        .then((r) => res.send(r))
        .catch((err) => {
            return res
                .status(400)
                .send({ message: "Oops cant save", error: err.message });
        });
});

router.put("/:name", async (req, res) => {
    await Course.findOneAndUpdate({ name: req.params.name }, req.body, { new: true })
        .then((response) =>
            response.length === 0 ? res.status(400).send("Cannot fing the course") :
            res.send({
                message: "Course updated the new data is ",
                response: response,
            })
        )
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant update the Course", error: err.message })
        );
});

router.delete("/:name", async (req, res) => {
    await Course.findOneAndDelete({ name: req.params.name })
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant delete the Course", error: err.message })
        );
});

module.exports = router;
