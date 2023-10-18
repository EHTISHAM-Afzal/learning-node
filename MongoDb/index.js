const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
    .then(() => console.log("mongodb Connencted"))
    .catch(err => console.error("can not connect to mongo db", err))


// Schema 

const CourseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tages : [String],
    publishedDate : {type : Date , default : Date.now()},
    isPublished : Boolean
})


// Model 

const Course = mongoose.model("Cousrse" , CourseSchema)

const createCourse = async () => {
    const course = new Course({
        name : "Java",
        author : "ihtisham",
        tages : ["java"],
        isPublished : true
    })
    const result = await course.save()
    console.log(result)
}

createCourse()