const Teacher = require("../models/teacherModels")
const Student = require("../models/studentModels")
const { restart } = require("nodemon")

const createTeacher = async (req, res) => {
    const { name, email } = req.body
    
    const teacher = await Teacher.findOne({ email })
    
    if (teacher) {
        res.status(400).json({
            message: "Teacher email already available"
        })
    }
    else {
        const createdTeacher = await Teacher.create({
            name, email
        })

            if (createdTeacher) {
                res.status(200).json({
                    message: createdTeacher
                })
            }
            else{
                res.status(400).json({
                message: "Teacher not created"
            })}
        

    }
}

const assignStudent = async (req, res) => {
   //get metor id fromurl
    const mentor = await Teacher.findOne({ _id: req.params.id })

    //checkif mentor avaiable
    if (!mentor) {
        res.status(400).json({message: "This mentor ID is not available"})
    }

    //get student id from body
    const studentID = req.body.id

    //check ifstudent available 
    const student = await Student.findOne({ _id: studentID })

    if (!student) {
        res.status(400).json({ message: "This student ID is not available" })
    }

    //check if student alrready has mentor
    if (student.mentor) {
        res.status(400).json({ message: "This student already has mentor" })
    }

    mentor.students.push(student._id)
    student.mentor = mentor._id

    await mentor.save()
    await student.save()

    if (mentor && student) { 
        res.status(200).json({
            Mentor: mentor,
            Student: student
        })
    }

    

}

const viewAllTeacher = async (req, res) => {
    const teachers = await Teacher.find().populate("students")
    res.send(teachers)
}

const viewTeacherById = async (req, res) => {
    const id = req.params.id
    const teacher = await Teacher.find({ _id: id }).populate("students")
    res.send(teacher)
}


module.exports = {
    createTeacher, assignStudent, viewAllTeacher, viewTeacherById
}