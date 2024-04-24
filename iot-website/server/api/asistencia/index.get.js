import AttendanceModel from "~~/server/models/asistencia"
import { startOfYear, endOfYear } from 'date-fns';

export default defineEventHandler(async (req) => {
    try {
      // Extract year from query parameter or use the current year
      const year =  new Date().getFullYear();
      
      // Define the start and end of the year
      const startDate = startOfYear(new Date(year, 0, 1)); // January 1st of the given year
      const endDate = endOfYear(new Date(year, 0, 1)); // December 31st of the given year
  
      const attendance = await AttendanceModel.aggregate([
        {
          $match: {
            estado: "Asistencia", // Matching documents with 'estado' equal to 'Asistencia'
            time: {
              $gte: startDate, // Greater than or equal to the start of the year
              $lte: endDate   // Less than or equal to the end of the year
            }
          }
        },
        {
          $group: {
            _id: { $month: "$time" }, // Group by the month of 'time'
            count: { $sum: 1 } // Count the number of documents in each group
          }
        },
        {
          $sort: { _id: 1 } // Sort by month number (1 to 12)
        }
      ]);
  
      // Transform the result to a more friendly format if necessary
      return attendance;
    } catch (err) {
      return { message: err.message };
    }
  });