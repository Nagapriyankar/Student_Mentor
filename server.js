const detenv = require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const studentRouter = require("./routers/studentRouter")
const teacherRouter = require("./routers/teacherRouter")

//initialize app 
const app = express()

//middleware
app.use(express.json()) //helps to handle json data in application 
app.use(cors())

//routes Middleware
app.use("/api/students", studentRouter)
app.use("/api/teachers", teacherRouter)

//test root route
app.get("/", (req, res) => {
    res.send('Home Page')
})

//initialize port
const PORT = process.env.PORT || 5000


//connect to db and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(`Error Message: ${error}`)
    })



