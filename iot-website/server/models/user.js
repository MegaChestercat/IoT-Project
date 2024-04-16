import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nombre: String,
    id: String,
    rol: String,
    carrera: String,
})

const model = mongoose.model("users", userSchema);

export default model;