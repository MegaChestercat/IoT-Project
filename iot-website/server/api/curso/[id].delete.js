// server/api/users/[id].delete.js

import CursoModel from "~~/server/models/curso"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    try {
        const curso = await CursoModel.findByIdAndDelete(id);
        if (!course) {
            throw createError({ statusCode: 404, message: "Course not found" });
        }
        return { message: "Course deleted successfully" };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
