const Student = require("../models/studentModels")

const createStudent = async (req, res) => { 
    const { name, email, mentor } = req.body
    
    const student = await Student.findOne({ email })
    
    if (student) { 
        res.status(400).json({
            message: "Student email already available"
        })
    }

    else {
        const createdStudent = await Student.create({
        name, email, mentor
    })

    if (createdStudent) {
        res.status(200).json({
            message: createdStudent
        })
    }
    else { 
        res.status(400).json({
            message: "Error creating student"
        })
    }}


}

const viewAllStudent = async (req, res) => { 
    
    const students = await Student.find()
    res.send(students)
}

const assignMentor = async (req, res) => {
    const id = req.params.id
    const {mentor} = req.body

    const student = await Student.findOne({ _id: id })
    if (!student) {
        res.status(400).json({message: "Student not available"})
    }

    if (student.mentor == "") {
        student.mentor = mentor 
    }
    else {
        student.prevMentor = student.mentor
        student.mentor = mentor
    }

    await student.save()
    res.status(200).json({message : student})
}

const getPrevMentor = async (req, res) => {
    id = req.params.id

    const student = await Student.findOne({ _id: id })
    
    if (student.prevMentor != "") {
        res.status(200).json({ message: `${student.prevMentor} is the previous assigned mentor`})
    }
    else {
        res.status(200).json({ message: "No previous mentor assigned" })
    }
}


module.exports = {
    createStudent, viewAllStudent, assignMentor, getPrevMentor
}