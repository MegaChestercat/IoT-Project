import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
    fecha: Date,
    id: String,
    alumno: String,
    claveCurso: String,
    nombreCurso: String,
    grupo: Int8Array,
    profesor: String,
})

const model = mongoose.model("curso", cursoSchema);

export default model;