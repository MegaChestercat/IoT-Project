import AccessModel from "~~/server/models/acceso"
import { format } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    const accesses = await AccessModel.find();
    const flattenedAccesses = [];

    accesses.forEach(ac => {
      const originalDate = ac.time
      const desiredFormat = "yyyy-MM-dd HH:mm:ss";
      const formattedDate = format(originalDate, desiredFormat);
      // Create a new object with the model structure
      const newAccess = {
        id_usuario: ac.id_usuario, // Assuming "access" has an "id_usuario" property
        acceso: ac.acceso,
        time: formattedDate, // Assuming "access" has a "time" property
      };

      flattenedAccesses.push(newAccess);
    })
      
    return flattenedAccesses;
  } catch (err) {
    // Consider logging the error as well
    console.error(err);
    return { message: err.message };
  }
});
