import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';


const preloadedState = {
    auth: {
        user: null,
        accessToken: localStorage.getItem('accessToken') || null,
        refreshToken: localStorage.getItem('refreshToken') || null,
        loading: false,
        error: null,
    },
};

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    preloadedState
});
export default store;