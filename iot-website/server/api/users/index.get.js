// users/index.get.js
import UserModel from "~~/server/models/user"

export default defineEventHandler(async (event) => {
    try {
        const users = await UserModel.find();
        return users;
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});