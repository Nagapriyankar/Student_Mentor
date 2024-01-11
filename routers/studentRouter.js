const express = require("express")
const router = express.Router()
const { createStudent, viewAllStudent, assignMentor,getPrevMentor } = require("../controllers/studentController")


router.post("/createstudent", createStudent)
router.get("/viewallstudent", viewAllStudent)
router.patch("/assignmentor/:id", assignMentor)
router.get("/prevmentor/:id", getPrevMentor)


module.exports = router
