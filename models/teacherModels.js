const mongoose = require("mongoose")

//create a scheme
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            default:""
        }
    ]
})

// create a model and export it 
const Teacher = mongoose.model('teacher', teacherSchema)

module.exports = Teacher
