const express = require("express");
const {Student , Validation } = require('../models/studentsModel');
const router = express.Router();


router.get("/", async (req, res) => {
    await Student
        .find()
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant find the Student", error: err })
        );
});

router.get("/:username", async (req, res) => {
    await Student
        .find({ username: req.params.username })
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant find the Student", error: err.message })
        );
});

router.post("/", (req, res) => {
    const newStudent = new Student({...req.body});
    const { error } = Validation.validate(req.body);
    if (error) return res.status(400).send(error.message);
    newStudent.save()
        .then((r) => res.send(r))
        .catch((err) => {
            if (err.code === 11000) {
                // Duplicate username
                return res.status(422).send({ message: 'Username already exists!' });
            }
            // Some other error
            return res.status(400).send({ message: "Oops cant save", error: err.message });
        });
});

router.put("/:username", async (req, res) => {
    const { error } = Validation.validate(req.body);
    if (error) return res.status(400).send(error.message);
    await Student
        .findOneAndUpdate({ username: req.params.username }, req.body, { new: true })
        .then((response) =>
            res.send({
                message: "Student updated the new data is ",
                response: response,
            })
        )
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant update the Student", error: err.message })
        );
});

router.delete("/:username", async (req, res) => {
    await Student
        .findOneAndDelete({ username: req.params.username })
        .then((response) => res.send(response))
        .catch((err) =>
            res
                .status(400)
                .send({ message: "Oops cant delete the Student", error: err.message })
        );
});


module.exports = router;
