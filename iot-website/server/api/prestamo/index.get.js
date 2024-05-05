import PrestamoModel from "~~/server/models/prestamo"
import { format } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    const borrow = await PrestamoModel.find();
    const flattenedAccesses = [];

    borrow.forEach(borrow => {
      const originalDate = borrow.time
      const desiredFormat = "yyyy-MM-dd HH:mm:ss";
      const formattedDate = format(originalDate, desiredFormat);
      // Create a new object with the model structure
      const newBorrow = {
        id_usuario: borrow.id_usuario, // Assuming "access" has an "id_usuario" property
        id_material: borrow.id_material,
        time: formattedDate, // Assuming "access" has a "time" property
      };

      flattenedAccesses.push(newBorrow);
    })
    return flattenedAccesses;
  } catch (err) {
    // Consider logging the error as well
    console.error(err);
    return { message: err.message };
  }
});
