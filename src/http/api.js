import axios from "axios";
import store from '../redux/store'
export const URL_API = import.meta.env.VITE_BASE_API_URL
import { updateAccessToken , logout } from "../redux/auth/authSlice";

class ApiService {
    constructor(){
        this.api = axios.create({
            baseURL : URL_API
        })
        this.api.interceptors.request.use((config) => {
            const { accessToken } = store.getState().auth;
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });
        this.api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response && error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const { refreshToken } = store.getState().auth;
                    if (refreshToken) {
                        try {
                            const response = await this.api.post('/user/refresh-token', { token: refreshToken });
                            store.dispatch(updateAccessToken(response.data.access_token));
                            originalRequest.headers['Authorization'] = `Bearer ${response.data.access_token}`;
                            return this.api(originalRequest);
                        } catch (refreshError) {
                            store.dispatch(logout());
                            console.error(refreshError);
                        }
                    }
                }
                return Promise.reject(error);
            }
        );
    }
    async get(url , config = {}){
        try {
            const response = await this.api.get(url, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }
    async post(url ,data , config = {}){
        try {
            const response = await this.api.post(url, data , config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async put(url, data, config = {}) {
        try {
            const response = await this.api.put(url, data, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async delete(url, config = {}) {
        try {
            const response = await this.api.delete(url, config);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }


    handleError(error) {
        console.error("API call error:", error);
        throw error; 
    }

   
}

export const formatCurrencyVND = (value) => {
    if (typeof value !== 'number') {
        return 'Không hợp lệ';
    }
    return value.toLocaleString('vi-VN') + ' VNĐ';
};

export const formatDateTime = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Không hợp lệ';
    }
    return date.toLocaleString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};



export default new ApiService()