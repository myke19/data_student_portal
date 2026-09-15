import userModel from "../model/userModel.js";
import bcrypt from "bcrypt";



 export const createStudent = async (req , res) => {
    try{
        const { name, regNo, email, password} = req.body
        const genSalt = await bcrypt.genSalt(6)
        const hashedPassword = await bcrypt.hash(password, genSalt)
        const student = await userModel.create({
            name, regNo, email, password: hashedPassword
        })
        if(!regNo) {
            return res.status(400).json({
                message: "Please provide a registration number."
            });
        }
        res.status(201).json({
            message: "Student Portal Created Successfully",
            data : student
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

export const studentLogin = async (req , res) => {
    try {
        const {email, password} = req.body
        const user = await userModel.findOne({email})
        if (!user) {
            return res.stauts(404).json({
                message: "Make sure you signed up"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(404).json({
                message: "Password is incorrect"
            })
        }
        return res.status(200).json({
            message: "Student login successfully",
            data: user
        })
    }catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

 export const getAllStudent = async (req , res) => {
    try{
        const allStudent = await userModel.find()
        return res.status(200).json({
            message: "Student fetched successfully",
            data : allStudent
        });
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    };
}

 export const getStudentById = async (req , res) => {
    try {
        const { id } = req.params

        const studentById = await userModel.findById(id)
        
        if(!studentById) {
            return res.status(404).json({
                message : "student not found"
            })
        }
        return res.status(200).json({
            message: "newStudent successful",
            data : studentById
        })
    }catch(error){
        return res.status(500).json({
            message : error.message
        })
    }
}

export const updateStudent = async (req , res) => {
    try {
        const { userId } = req.params
        const { name } = req.body
        const update = await userModel.findByIdAndUpdate(userId, {
            name
        }, {new: true})

        return res.status(200).json({
            message: "Student name updated successfully",
            data : update
        })
    }catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}


export const deleteStudent = async (req , res) => {
    try {
        const { userId } = req.params
        const deleteAcct = await userModel.findByIdAndDelete(userId)
        return res.status(200).json({
            message: "Student account deleted successfully",
            data: deleteAcct
        })
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
