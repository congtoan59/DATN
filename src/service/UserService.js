import api from '../http/api'
export const resigterUser = async (data) => {
    const res = await api.post('/user/sign-up', data)

    return res
}

export const loginUser = async (data) => {
    const res = await api.post('/user/sign-in', data)

    return res
}

export const refreshAccessToken = async (data) => {
    const res = await api.post('user/refresh-token', data)
    return res
}

export const getDetailsUser = async (userId) => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }
    try {
        const response = await api.get(`/user/get-details/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
};
export const verifyUser = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }
    try {
        const response = await api.get(`/user/verify/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
};