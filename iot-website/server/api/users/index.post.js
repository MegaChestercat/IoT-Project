import UserModel from "~~/server/models/user"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

<<<<<<< HEAD
    try{
        new model(body).save()
        return { message: 'Author created' };
    }
    catch(err){
=======
    try {
        const newUser = new UserModel(body);
        const result = await newUser.save();
        return { message: "User created successfully", user: result };
    } catch (err) {
>>>>>>> 97f6febe075a9bdcce240b35b6abde28fdae833b
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});