// users/index.get.js
import CursoModel from "~~/server/models/curso"

export default defineEventHandler(async (event) => {
    try {
        const cursos = await CursoModel.find();
        return cursos;
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});