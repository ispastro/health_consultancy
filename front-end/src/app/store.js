import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../features/appointmentBooking/appointmentSlice';
import doctorProfileReducer from '../features/profile/doctorProfileSlice'; // Fixed spelling
import bookingReducer from "../features/appointmentBooking/bookingSlice";
import patientSetProfileReducer from "../features/profile/patientSetProfileSlice"; // Added patientSetProfile reducer
import registerReducer from '../features/auth/registerSlice';
import loginReducer from '../features/auth/loginSlice';
import doctorDashboardReducer from '../features/doctors/doctorDashboardSlice';
import doctorChatReducer from '../features/doctorChat/doctorChatSlice';
import patientChatReducer from  '../features/patientChat/patientChatSlice';

export const store = configureStore({
  reducer: {
    appointment: appointmentReducer,
    DoctorProfile: doctorProfileReducer,// Added profile reducer
    booking:bookingReducer,
    patientSetProfile: patientSetProfileReducer, // Added patientSetProfile reducer
    register:registerReducer,
    login:loginReducer,
    doctorDashboard:doctorDashboardReducer,
    chat:doctorChatReducer,
    patientChat:patientChatReducer



  }
});