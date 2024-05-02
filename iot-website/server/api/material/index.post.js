import ObjectId from "mongoose"
import MaterialModel from "~~/server/models/material"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const newMaterial = new MaterialModel(body);
        const result = await newMaterial.save();
        return { message: "Material registered successfully", material: result };
    } catch (err) {
        console.log(err)
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});