import mongoose from 'mongoose';

const reservacionSchema = new mongoose.Schema({
  id_usuario: String, //Pendiente a validar el tipo de dato
  salon: String,
  initial_time: String,
  end_time: String});

const model = mongoose.model('reservacion_salones', reservacionSchema);

export default model;