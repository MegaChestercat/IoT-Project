import MaterialModel from "~~/server/models/material"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    try {
        const material = await MaterialModel.findByIdAndDelete(id);
        if (!material) {
            throw createError({ statusCode: 404, message: "Material not found" });
        }
        return { message: "Material deleted successfully" };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});