import mongoose from 'mongoose';

const asistenciaSchema = new mongoose.Schema({
  id_usuario: mongoose.Schema.Types.ObjectId, //Pendiente a validar el tipo de dato
  id_curso: String,
  seccion: String,
  estado: String,
  time: Date});

const model = mongoose.model('asistencia_cursos', asistenciaSchema);

export default model;
