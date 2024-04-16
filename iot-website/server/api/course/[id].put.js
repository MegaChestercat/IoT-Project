// server/api/users/[id].put.js

import CourseModel from "~~/server/models/course"

export default defineEventHandler(async (event) => {
    const { id } = event.context.params;
    const body = await readBody(event);

    try {
        const updatedCourse = await CourseModel.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCourse) {
            throw createError({ statusCode: 404, message: "Course not found" });
        }
        return { message: "Course updated successfully", course: updatedCourse };
    } catch (err) {
        throw createError({
            statusCode: 500,
            message: err.message
        });
    }
});
