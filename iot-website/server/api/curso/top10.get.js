import Curso from "~/server/models/curso"; // Importing the model as Curso
import { subMonths, startOfToday } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    // Define the start date as 6 months ago from today and end date as today
    const sixMonthsAgo = subMonths(startOfToday(), 6);
    const today = startOfToday();

    // Aggregation pipeline to count occurrences per course and sort by count in descending order
    const topCourses = await Curso.aggregate([
      {
        $match: {
          // Assuming there's a date field that should be used for the time range filter
          fecha: { // You may need to adjust this field name based on actual date field in your schema
            $gte: sixMonthsAgo,
            $lt: today
          }
        }
      },
      {
        $group: {
          _id: {
            claveCurso: "$claveCurso", // Group by course key
            nombreCurso: "$nombreCurso" // Include course name in the grouping
          },
          numberOfUsers: { $sum: 1 } // Count number of users or registrations
        }
      },
      {
        $sort: { numberOfUsers: -1 } // Sort by numberOfUsers in descending order
      },
      {
        $limit: 10 // Limit to top 10 courses
      }
    ]);

    console.log('Top 10 courses:', topCourses);

    return topCourses;
  } catch (err) {
    console.error('Error during aggregation:', err);
    return { message: err.message };
  }
});
