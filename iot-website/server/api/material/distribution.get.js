import MaterialModel from "~~/server/models/material"; // Adjust the path as necessary

export default defineEventHandler(async (event) => {
  try {
    const labCounts = await MaterialModel.aggregate([
      {
        $group: {
          _id: "$laboratorio", // Group by the "laboratorio" field
          count: { $sum: 1 } // Count the number of documents in each group
        }
      }
    ]);

    console.log('Lab counts:', labCounts);

    return labCounts;
  } catch (err) {
    console.error('Error during aggregation:', err);
    return { message: err.message };
  }
});
