import api from '../http/api';

export const addToCart = async (cartData) => {
    const token = localStorage.getItem('accessToken'); // Lấy token từ localStorage
    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }

    // Thêm token vào headers
    return await api.post('/cart/add', cartData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getCart = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }
    return await api.get('/cart/', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });



};

export const clearCart = async () => {
    try {
        const response = await api.delete('/cart/clear', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);

    }
};


export const removeCartItem = async (cartItemId) => {
    const res = await api.delete(`/cart/remove/${cartItemId}`)
    return res
}
