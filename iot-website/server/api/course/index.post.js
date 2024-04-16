import CourseModel from "~~/server/models/course"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const newCourse = new CourseModel(body);
        const result = await newCourse.save();
        return { message: "Course created successfully", course: result };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});