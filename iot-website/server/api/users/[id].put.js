// server/api/users/[id].put.js

import UserModel from "~~/server/models/user"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const body = await readBody(event);

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedUser) {
            throw createError({ statusCode: 404, message: "User not found" });
        }
        return { message: "User updated successfully", user: updatedUser };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
