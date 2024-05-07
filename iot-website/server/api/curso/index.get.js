// users/index.get.js
import CursoModel from "~~/server/models/curso"
import { format } from 'date-fns';

export default defineEventHandler(async (event) => {
    try {
        const cursos = await CursoModel.find();

        const flattenedAccesses = [];
        
        cursos.forEach((curso) => {
            const originalDate = curso.hora_inicio
            const desiredFormat = "HH:mm:ss";
            const formattedDate = format(originalDate, desiredFormat);
            // Create a new object with the model structure
            const newCurso = {
                claveCurso: curso.claveCurso, // Assuming "access" has an "id_usuario" property
                nombreCurso: curso.nombreCurso,
                seccion: curso.seccion,
                profesor: curso.profesor,
                hora_inicio: formattedDate, // Assuming "access" has a "time" property
            };

            flattenedAccesses.push(newCurso);
        })
        return flattenedAccesses;
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});