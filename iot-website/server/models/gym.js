import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  id_usuario: String, //Pendiente a validar el tipo de dato
  time: Date});

const model = mongoose.model('gym_accesos', pagoSchema);

export default model;