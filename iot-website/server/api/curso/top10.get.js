import CourseModel from "~~/server/models/curso"
import { subMonths, startOfToday } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    // Define the start date as 6 months ago from today and end date as today
    const sixMonthsAgo = subMonths(startOfToday(), 6);
    const today = startOfToday();

    // Aggregation pipeline to count users per course and sort by count in descending order
    const topCourses = await CourseModel.aggregate([
      {
        $match: {
          fecha: {
            $gte: sixMonthsAgo,
            $lt: today
          }
        }
      },
      {
        $group: {
          _id: "$nombreCurso", // Group by course ID
          numberOfUsers: { $sum: 1 } // Count number of users
        }
      },
      {
        $sort: { numberOfUsers: -1 } // Sort by numberOfUsers in descending order
      },
      {
        $limit: 10 // Limit to top 10
      }
    ]);

    console.log('Top 10 courses:', topCourses);

    return topCourses;
  } catch (err) {
    console.error('Error during aggregation:', err);
    return { message: err.message };
  }
});
