// users/index.get.js
import CourseModel from "~~/server/models/course"

export default defineEventHandler(async (event) => {
    try {
        const courses = await CourseModel.find();
        return courses;
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});