import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoutes.js";
import itemRoute from "./routes/itemRoutes.js";
const compass_string = process.env.COMPASS_STRING
const atlas_string = process.env.ATLAS_STRING


mongoose.connect(atlas_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express();
const port = 8080;


app.use(express.json())

app.get("/" , (req, res) => {
    res.send("Server is active")
    });

app.use("/api/student", userRoute)
app.use("/items", itemRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
