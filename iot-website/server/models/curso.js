import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
    claveCurso: String,
    nombreCurso: String,
    seccion: String,
    profesor: String,
    hora_inicio: Date
})

const model = mongoose.model("cursos", cursoSchema);

export default model;