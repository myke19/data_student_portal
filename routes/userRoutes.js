import express from "express";

import userRoute from express.Router()

import { createStudent, getStudentId, getStudentById, deleteStudent, updateStudent }
 from "../controller/userController";

userRoute.post("/studentdata", createStudent)
userRoute.get("/studentId", getStudentId)
userRoute.get("/student-by/:id", getStudentById)
userRoute.patch("/update-name/:userId", updateStudent)
userRoute.delete("/delete-acct/:userId", deleteStudent)

export default userRoute