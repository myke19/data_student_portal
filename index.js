const express = require('express');
const mongoose = require('mongoose');
const userRoute = require("./routes/userRoutes.js");

const compass_string = "mongodb://localhost:27017/student_portal_db"
const atlas_string = "mongodb://apeyiomotobi04_db_user:benita06@ac-byl4cdr-shard-00-00.kmrpclp.mongodb.net:27017,ac-byl4cdr-shard-00-01.kmrpclp.mongodb.net:27017,ac-byl4cdr-shard-00-02.kmrpclp.mongodb.net:27017/?ssl=true&replicaSet=atlas-nnppk8-shard-0&authSource=admin&appName=Cluster0"

mongoose.connect(atlas_string)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err));

const app = express();
const port = 8080;


app.use(express.json)

app.get("/" , (req, res) => {
    res.send("Server is active")
    });

app.use("/api/student", userRoute)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
