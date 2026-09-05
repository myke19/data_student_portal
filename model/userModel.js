
import mongoose from ('mongoose');



const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    regNo: { type: Boolean, required: true, unique: true},
    email: { type: String, required: true, unique: true},
});

const userModel = mongoose.model('user' , userSchema);

module.exports = userModel