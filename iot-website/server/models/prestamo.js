import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  id_usuario: String, //Pendiente a validar el tipo de dato
  id_material: String,
  time: Date});

const model = mongoose.model('prestamo_materiales', pagoSchema);

export default model;