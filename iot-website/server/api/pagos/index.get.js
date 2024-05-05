import PagosModel from "~~/server/models/pagos"
import { format } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    const pagos = await PagosModel.find();
    const flattenedAccesses = [];

    pagos.forEach(pagosItem => {
      const originalDate = pagosItem.time
      const desiredFormat = "yyyy-MM-dd HH:mm:ss";
      const formattedDate = format(originalDate, desiredFormat);
      // Create a new object with the model structure
      const newPago = {
        id_usuario: pagosItem.id_usuario, // Assuming "access" has an "id_usuario" property
        time: formattedDate, // Assuming "access" has a "time" property
      };

      flattenedAccesses.push(newPago);
    })
      
    return flattenedAccesses;
  } catch (err) {
    // Consider logging the error as well
    console.error(err);
    return { message: err.message };
  }
});