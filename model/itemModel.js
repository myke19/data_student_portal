import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
    quality: {type: String, required: true},
    size: {type: String, required: true},
    image: {type: String, required: true}
},{timeStamps: true}
);


const itemModel = mongoose.model("item", itemSchema);
export default itemModel;