import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    fecha: Date,
    id: String,
    alumno: String,
    claveCurso: String,
    nombreCurso: String,
    //grupo: Int8Array,
    profesor: String,
})

const model = mongoose.model("course", courseSchema);

export default model;