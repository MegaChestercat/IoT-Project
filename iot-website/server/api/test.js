// server/api/test.js

import UserModel from '~/server/models/user.js'; // Asegúrate de que la ruta al modelo es correcta

export default defineEventHandler(async (event) => {
  try {
    // Realiza una operación simple, como buscar todos los usuarios.
    // Asegúrate de que la colección y el esquema en UserModel están configurados correctamente.
    const users = await UserModel.find(); 
    return users; // Retorna la lista de usuarios encontrados.
  } catch (error) {
    // En caso de error, regresa un mensaje de error.
    return createError({
      statusCode: 500,
      statusMessage: 'Error al conectar a MongoDB',
      data: error.message, // Provee el mensaje de error para depuración.
    });
  }
});
