import userModel from "../model/userModel.js";
import cloudinary from "../config/cloudinary.js";
import itemModel from "../model/itemModel.js";

export const itemList = async ( req , res ) => {
    try {
        const getUserId = await userModel.findById(req.params.userId)
        const {name, description, price, category, stock, quality, size, image } = req.body
        if (!getUserId) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        if (!req.file) {
            return res.status(400).json({
                message: "Image required...Pls input image"
            })
        }
        const view = await cloudinary.uploader.upload(req.file.path)
        const imageUrl = view.secure_url

        const item = await itemModel.create({
            name, description, price, category, stock, quality, size, image: imageUrl
        })
        await getUserId.items.push(item._id)
        await getUserId.save()
        return res.status(201).json({
            message: "Item list upload successfully", item
        })
    }catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAllItemList = async ( req , res ) => {
    try {
        const getAll = await itemModel.find()
        return res.status(200).json({
            message: "All item list fetched successfully",
            data: getAll
        })
    }catch(error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
