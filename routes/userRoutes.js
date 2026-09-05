const express = require("express")
const userRoute = express.Router()

const { createStudent, getStudentId, getStudentById, deleteStudent, updateStudent }
 = require("../controller/userController")

userRoute.post("/studentdata", createStudent)
userRoute.get("/studentId", getStudentId)
userRoute.get("/student-by/:id", getStudentById)
userRoute.patch("/update-name/:userId", updateStudent)
userRoute.delete("/delete-acct/:userId", deleteStudent)

module.exports = userRoute