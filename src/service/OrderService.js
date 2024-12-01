import api from "../http/api";

export const createOrder = async (orderData) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }

    return await api.post('/order/createe', orderData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getOrderById = async (id) => {
    const res = await api.get(`/order/getOrder/${id}`)
    return res
}


export const historyOrder = async () => {
    const token = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('user');
    const idUser = storedUser ? JSON.parse(storedUser).id : null;
    if (!idUser) {
        throw new Error('Không tìm thấy thông tin người dùng!');
    }

    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }

    const res = await api.get(`/order/user/${idUser}`, {
        headers: {
            token: token,
            id: idUser
        }
    });
    return res

}

export const cancelOrder = async (orderId) => {
    const token = localStorage.getItem('accessToken');

    if (!token) {
        throw new Error('Bạn cần đăng nhập!');
    }

    return await await api.delete(`/order/cancel/${orderId}`, {
        headers: {
            token: token,
        }
    });
}



export const calculateOrderTotals = (items) => {
    const itemsPrice = items.reduce((total, item) => total + item.price * item.amount, 0);
    const shippingPrice = itemsPrice > 1000000 ? 0 : 30000;
    const totalPrice = itemsPrice + shippingPrice;

    return {
        itemsPrice,
        shippingPrice,
        totalPrice
    };
};