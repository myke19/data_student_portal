import express from "express";
import {itemList, getAllItemList} from "../controller/itemController.js";
import upload from "../config/multer.js";

const route = express.Router();

route.post("/upload/:userId", upload.single('image'), itemList);
route.get("/all-list", getAllItemList);

export default route;