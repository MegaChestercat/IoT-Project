import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
    claveCurso: String,
    nombreCurso: String,
    seccion: String,
    profesor: String,
})

const model = mongoose.model("cursos", cursoSchema);

export default model;