import mongoose from 'mongoose';

const accesoSchema = new mongoose.Schema({
    id_usuario: mongoose.Schema.Types.ObjectId,
    acceso: String,
    time: Date
    });

const model = mongoose.model('accesos', accesoSchema);

export default model;
