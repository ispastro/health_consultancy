import axios from "axios";

const API_URL = "http://localhost:8000/api/appointments"; // Will be replaced in prod

export const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const postAppointment = async (appointmentData) => {
  const response = await axios.post(API_URL, appointmentData);
  return response.data;
};
