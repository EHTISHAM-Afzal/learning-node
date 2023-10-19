const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase')
    .then(() => console.log("mongodb Connencted"))
    .catch(err => console.error("can not connect to mongo db", err))


// Schema 

const CourseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    rating: { type: Number, min: 1, max: 5 },
    createdAt: { type: Date, default: Date.now() },
    isPublished: Boolean
})


// Model 

const Course = mongoose.model("Course", CourseSchema)

const saveCourse = () => {
    const course = new Course({
        name: "Java",
        author: "ehtisham",
        tags: ["programing"],
        isPublished: true,
        rating: 2.5
    })

    course.save().then(r => console.log(r)).catch(err => console.error("Oops Can't Save Please Try again", err))
} // CREATE


// Comparison Operators

// $eq (equal to)
// $ne (not equal to)
// $gt (greater than)
// $gte (greater than equal to)
// $lt (less than)
// $lte (less than equal to)
// $in (value is in array)
// $nin (value is not in array)


// Logical Operators

// or
// and
// not


// Querying 

// Find All

const getCourses = async () => {
    const courses = await Course
        .find({ author: "ihtisham", isPublished: true })
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(courses)
} // READ

// Find One

const getCourseOne = async () => {
    const course = await Course
        .findOne({ author: "sham" })
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(course)
}

const getCourseById = async () => {
    const course = await Course
        .findById("65311d64f9436088fa4ef944")
    console.log(course)
}

const getCourse = async () => {
    const course = await Course
        .find({ rating: { $in: [2.5 , 5] } })
        .select({ name: 1, createdAt: 1 }).sort({ name: -1 })
        .or([{author : "ihtisham"}, {rating : 4}])
    console.log(course)
}


// const updateCourse = async (id) => {
//     const course = await Course.findById(id)
//     course.name = "C++"
//     course.isPublished = false
//     const updatedCourse = await course.save()
//     console.log(updatedCourse)
// } // UPDATE

const updateCourse = async (id) => {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: "shamm",
            isPublished: true
        }
    }, { new: true })
    console.log(course)

}

const deleteCourse = async (id) => {
    const course = await Course.findByIdAndDelete(id)
    console.log(course)
} // DELETE


// CRUD operations 

// saveCourse()
// getCourse()
// updateCourse("65311d64f9436088fa4ef944")
// deleteCourse("65312259dbe2b848891aefe2")

