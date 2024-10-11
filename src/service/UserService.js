import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

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
                const refreshToken = localStorage.getItem('refresh_token');
                if (!refreshToken) {
                    // Nếu không có refresh token, đăng xuất người dùng
                    UserService.logout();
                    return Promise.reject('Phiên đăng nhập đã hết hạn');
                }

                // Gọi API refresh token
                const response = await axios.post(`${BASE_URL}/user/refresh-token`, {
                    refresh_token: refreshToken
                });

                if (response.data.status === "OK") {
                    const { access_token } = response.data;
                    localStorage.setItem('access_token', access_token);
                    
                    // Cập nhật token trong header của request gốc
                    originalRequest.headers.Authorization = `Bearer ${access_token}`;
                    
                    // Thực hiện lại request gốc
                    return axiosInstance(originalRequest);
                }
            } catch (error) {
                console.log(error);
                
                UserService.logout();
                return Promise.reject('Không thể làm mới phiên đăng nhập');
            }
        }

        const errorMessage = error.response?.data?.message || 'Đã có lỗi xảy ra';
        return Promise.reject(errorMessage);
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
            console.log(response);
            
            
            if (response.data.status === "OK") {
                const { access_token, refresh_token } = response.data;
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
                
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

    getUserInfo: async () => {
        try {
            const response = await axiosInstance.get('/user/info');
            return {
                success: response.data.status === "OK",
                data: response.data
            };
        } catch (error) {
            console.error('Get user info error:', error);
            return {
                success: false,
                message: error.toString()
            };
        }
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
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Có thể thêm các logic khác khi logout
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('access_token');
    }
};

export default UserService;