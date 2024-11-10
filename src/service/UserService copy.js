import axios from 'axios';
import Cookies from 'js-cookie'
// import { refreshUserToken } from '../redux/user/userAction';
import {store} from '../redux/store'
import { setUser } from '../redux/user/userAction';
const BASE_URL = 'http://localhost:3001/api/';


const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials:true
});
const refreshTokenPeriodically = async () => {
    try {
        const response = await axios.post(`${BASE_URL}user/refresh-token`, {}, {
            withCredentials: true
        });
        if (response.data.status === "OK") {
            const { access_token } = response.data;
            console.log(access_token);
            
            Cookies.set('access_token', access_token, { expires: 1 }); // 30 seconds
            // store.dispatch(refreshUserToken(access_token))
        }
        
    } catch (error) {
        console.error('Error refreshing token:', error);
        UserService.logout();
    }
};


// Thêm interceptor để tự động thêm token vào header
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor để xử lý response và tự động refresh token
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Nếu lỗi 401 và chưa thử refresh token
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await refreshTokenPeriodically();
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                console.log('refreshError :' , refreshError);
                
                UserService.logout();
                return Promise.reject('Unable to refresh session');
            }
        }

        return Promise.reject(error.response?.data?.message || 'An error occurred');
    }
);

const UserService = {
    register: async (userData) => {
        try {
            const response = await axiosInstance.post('/user/sign-up', userData);
            return {
                success: response.data.status === "OK",
                message: response.data.message,
                data: response.data
            };
        } catch (error) {
            console.error('Register error:', error);
            return {
                success: false,
                message: error.toString()
            };
        }
    },

    login: async (userLogin) => {
        try {
            const response = await axiosInstance.post('/user/sign-in', userLogin);
            if (response.data.status === "OK") {
                const { access_token, user } = response.data;
                Cookies.set('access_token', access_token, { expires: 1 });
                Cookies.set('refresh_token', access_token, { expires: 7 });
                store.dispatch(setUser(user, access_token));
                setInterval(refreshTokenPeriodically, 25000);
                return {
                    success: true,
                    message: response.data.message,
                    data: response.data
                };
            } else {
                return {
                    success: false,
                    message: response.data.message
                };
            }
        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                message: error.toString()
            };
        }
    },

    getUserInfo: async (id , access_token) => {
            const response = await axiosInstance.get(`/user/get-details/${id}` , {
                headers:{
                    token :`${access_token}`,
                }
            });
           return response.data;
        
    },
    refreshToken: async () => {
            const response = await axiosInstance.post(`/user/refresh-token/`,{},{
                withCredentials:true // khi có cookies tự động lấy cookies truyền xuống BE
            })
           return response.data;
        
    },

    updateUserInfo: async (userData) => {
        try {
            const response = await axiosInstance.put('/user/update', userData);
            return {
                success: response.data.status === "OK",
                message: response.data.message,
                data: response.data
            };
        } catch (error) {
            console.error('Update user info error:', error);
            return {
                success: false,
                message: error.toString()
            };
        }
    },

    logout: () => {
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');

        clearInterval(refreshTokenPeriodically);
    },

    isAuthenticated: () => {
        return !!Cookies.get('access_token');
    }
};

export default UserService;