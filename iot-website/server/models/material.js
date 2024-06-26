import mongoose from "mongoose"

const materialSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    cantidad: String,
    marca: String,
    tipo: String,
    laboratorio: String,
})

const model = mongoose.model("materials", materialSchema);

export default model;