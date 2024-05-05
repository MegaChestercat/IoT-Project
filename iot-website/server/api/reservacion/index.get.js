import ReservationModel from "~~/server/models/reservacion"
import { startOfYear, endOfYear } from 'date-fns';

export default defineEventHandler(async (event) => {
  try {
    const reservations = await ReservationModel.find();
      
    return reservations;
  } catch (err) {
    // Consider logging the error as well
    console.error(err);
    return { message: err.message };
  }
});