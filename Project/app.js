const express = require("express");
const morgan = require("morgan");
const catagories = require("./routes/catagories")
const students = require("./routes/students")
const courses = require("./routes/courses")
const mongoose = require('mongoose');


mongoose
  .connect("mongodb://127.0.0.1/eLearningProject")
  .then(() => console.log("mongodb Connencted"))
  .catch((err) => console.error("can not connect to mongo db", err));

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/catagories", catagories);
app.use("/api/students", students);
app.use("/api/courses", courses);


app.listen("3002", () => {
  console.log("app is runnig on local host 3002");
});
