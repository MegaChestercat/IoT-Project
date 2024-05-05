import User from "~/server/models/user"; // Importing the model as User

// Aggregation to find top 10 careers with the most students
export default defineEventHandler(async (event) => {
    try {
        // Diagnostic Log: Check how many users are in the 'users' collection
        const totalUsers = await User.countDocuments(); // Corrected from count() to countDocuments()
        console.log('Total users in database:', totalUsers);

        const topCareers = await User.aggregate([
            {
                $match: {
                    rol: "Estudiante" // Ensure this matches the exact case and spelling in your data
                }
            },
            {
                $group: {
                    _id: "$carrera",
                    studentCount: { $sum: 1 } // Count the number of students per career
                }
            },
            {
                $sort: { studentCount: -1 } // Sort by count in descending order
            },
            {
                $limit: 10 // Limit to top 10
            }
        ]);

        console.log('Top 10 careers:', topCareers);

        return topCareers;
    } catch (err) {
        console.error('Error during aggregation:', err);
        return { message: err.message };
    }
});
