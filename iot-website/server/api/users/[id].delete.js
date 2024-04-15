// server/api/users/[id].delete.js

import UserModel from "~~/server/models/user"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;

    try {
        const user = await UserModel.findByIdAndDelete(id);
        if (!user) {
            throw createError({ statusCode: 404, message: "User not found" });
        }
        return { message: "User deleted successfully" };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
