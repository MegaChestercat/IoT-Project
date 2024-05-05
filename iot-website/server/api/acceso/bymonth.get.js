import AccessModel from "~~/server/models/acceso";
import { startOfYear, endOfYear } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    const year = new Date().getFullYear();
    
    // Convert start and end dates to ISO strings
    const startDate = startOfYear(new Date(year, 0, 1));
    const endDate = endOfYear(new Date(year, 0, 1));

    const accessTypes = ["Acceso Recta", "Acceso Periférico"];

    const countPromises = accessTypes.map(accessType => 
      AccessModel.aggregate([
        {
          $addFields: {
            convertedDate: {
              $dateFromString: {
                dateString: "$time",
                format: "%Y-%m-%d %H:%M:%S" // Ensure this format matches your input date strings exactly
              }
            }
          }
        },
        {
          $match: {
            acceso: accessType,
            convertedDate: {
              $gte: startDate, // Use Date objects directly
              $lte: endDate
            }
          }
        },
        {
          $group: {
            _id: { $month: "$convertedDate" }, // Group by month from the converted date
            count: { $sum: 1 }
          }
        },
        {
          $sort: { _id: 1 }
        }
      ])
    );

    const counts = await Promise.all(countPromises);

    const formattedCounts = counts.map((count, index) => ({
      accessType: accessTypes[index],
      monthlyCounts: count.map(month => ({
        month: month._id, // This is the numeric month, consider converting to month name if needed
        count: month.count
      }))
    }));

    return formattedCounts;
  } catch (err) {
    console.error('Error during aggregation:', err);
    return { message: err.message };
  }
});
