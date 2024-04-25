import MaterialModel from "~~/server/models/material"

export default defineEventHandler(async (event) => {
    try {
        const materials = await MaterialModel.find();
        return materials;
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});