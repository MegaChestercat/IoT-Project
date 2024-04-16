import UserModel from "~~/server/models/user"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const newUser = new UserModel(body);
        const result = await newUser.save();
        return { message: "User created successfully", user: result };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});