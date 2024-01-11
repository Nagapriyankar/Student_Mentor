const mongoose = require("mongoose")

//create a schema
const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mentor: {
        type: String,
        default: ""
    }, 
    prevMentor: {
        type: String,
        default: ""
    },
})

//create model and export
const Student = mongoose.model("Student", studentSchema)

module.exports = Student 