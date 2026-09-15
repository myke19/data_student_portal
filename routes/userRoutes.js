import express from "express";

const userRoute = express.Router();

import { createStudent, studentLogin, getAllStudent, getStudentById, deleteStudent, updateStudent }
 from "../controller/userController.js";

userRoute.post("/studentdata", createStudent)
userRoute.get("/all-student", getAllStudent)
userRoute.get("/student-by/:id", getStudentById)
userRoute.patch("/update-name/:userId", updateStudent)
userRoute.delete("/delete-acct/:userId", deleteStudent)
userRoute.get("/login", studentLogin)

export default userRoute;