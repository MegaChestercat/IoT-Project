// server/api/users/[id].put.js

import CursoModel from "~~/server/models/curso"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const body = await readBody(event);

    try {
        const updatedCurso = await CursoModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCurso) {
            throw createError({ statusCode: 404, message: "Course not found" });
        }
        return { message: "Course updated successfully", curso: updatedCurso };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
