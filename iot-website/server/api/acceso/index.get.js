import AccessModel from "~~/server/models/acceso"
import { startOfYear, endOfYear } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    // Extract year from query parameter or use the current year
    const year = new Date().getFullYear();
    
    // Define the start and end of the year
    const startDate = startOfYear(new Date(year, 0, 1)); // January 1st of the given year
    const endDate = endOfYear(new Date(year, 0, 1)); // December 31st of the given year

    const accessTypes = ["Acceso Recta", "Acceso Periférico"]; // Define the types of access to count

    // Prepare a promise for each access type count
    const countPromises = accessTypes.map(accessType => 
      AccessModel.aggregate([
        {
          $match: {
            acceso: accessType, // Match documents with 'acceso' for each type
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
      ])
    );

    // Execute all the count queries in parallel
    const counts = await Promise.all(countPromises);

    // Map the results to a more friendly format if necessary
    // Assuming you want a separate list for each access type
    const formattedCounts = counts.map((count, index) => ({
      accessType: accessTypes[index],
      monthlyCounts: count
    }));

    return formattedCounts;
  } catch (err) {
    // Consider logging the error as well
    console.error(err);
    return { message: err.message };
  }
});
