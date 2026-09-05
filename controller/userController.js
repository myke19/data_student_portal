import userModel from ("../model/userModel")



 const createStudent = async (req , res) => {
    try{
        const { name, regNo, email} = req.body
        const student = await userModel.create({
            name, regNo, email
        })
        res.status(201).json({
            message: "Student Portal Created Successfully",
            data : student
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
};

 const getStudentId = async (req , res) => {
    try{
        const studentId = await userModel.find()
        return res.status(200).json({
            message: "Student ID fetched successfully",
            data : studentId
        });
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    };
}

 const getStudentById = async (req , res) => {
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

const updateStudent = async (req , res) => {
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


const deleteStudent = async (req , res) => {
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

module.exports = { createStudent , getStudentId , getStudentById , updateStudent, deleteStudent }