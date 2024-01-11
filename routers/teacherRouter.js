const express = require("express")
const router = express.Router()
const { createTeacher, assignStudent, viewAllTeacher, viewTeacherById } = require("../controllers/teacherController")


router.post("/createteacher", createTeacher)  //api to create new teacher
router.patch("/studentomentor/:id", assignStudent)  //api to assign multiple students to mentor
router.get("/viewallteacher", viewAllTeacher)  //api to assign multiple students to mentor
router.get("/viewteacher/:id", viewTeacherById)  //api to assign multiple students to mentor


module.exports = router