import MaterialModel from "~~/server/models/material";

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const body = await readBody(event);

    try {
        // Call findByIdAndUpdate directly on the model without using 'new'
        const updatedMaterial = await MaterialModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedMaterial) {
            throw createError({ statusCode: 404, message: "Material not found" });
        }
        return { message: "Material updated successfully", material: updatedMaterial };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
