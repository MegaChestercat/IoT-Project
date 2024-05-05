import AttendanceModel from "~~/server/models/asistencia"
import { format} from 'date-fns';

export default defineEventHandler(async (req) => {
  try {
    // Extract year from query parameter or use the current year
    const attendances = await AttendanceModel.find();
    const flattenedAccesses = [];

    attendances.forEach((attendance) => {
      const originalDate = attendance.time
      const desiredFormat = "yyyy-MM-dd HH:mm:ss";
      const formattedDate = format(originalDate, desiredFormat);
      // Create a new object with the model structure
      const newAttendance = {
        id_usuario: attendance.id_usuario, // Assuming "access" has an "id_usuario" property
        id_curso: attendance.id_curso,
        seccion: attendance.seccion,
        estado: attendance.estado,
        time: formattedDate, // Assuming "access" has a "time" property
      };

      flattenedAccesses.push(newAttendance);
    })

    return flattenedAccesses;
  } catch (err) {
    return { message: err.message };
  }
});