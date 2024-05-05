import mongoose from 'mongoose';

const pagoSchema = new mongoose.Schema({
  id_usuario: String, //Pendiente a validar el tipo de dato
  time: Date});

const model = mongoose.model('estacionamiento_pagos', pagoSchema);

export default model;