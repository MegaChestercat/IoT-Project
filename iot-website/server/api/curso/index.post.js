import CursoModel from "~~/server/models/curso"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const newCurso = new CursoModel(body);
        const result = await newCurso.save();
        return { message: "Course created successfully", curso: result };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});