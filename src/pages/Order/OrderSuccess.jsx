import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as OrderService from '../../service/OrderService';
import Logo from '../../../public/image/LogoAll/LogoAdmin.png';
import { Check } from '../../component/icons';

const OrderSuccess = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(orderId);

    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                const response = await OrderService.getOrderById(orderId);
                console.log('response', response);

                setOrderDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h2 className="text-2xl font-bold text-red-500 mb-6">
                    Đã có lỗi xảy ra
                </h2>
                <p className="text-gray-600 mb-6">
                    Không thể tải chi tiết đơn hàng. Vui lòng thử lại sau.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                    Quay về trang chủ
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
                <div className="flex justify-center mb-2">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-1/2 object-contain"
                    />
                </div>

                {/* Thông báo đặt hàng thành công */}
                <div className="text-center mb-4">
                    <div className="flex justify-center mb-4">
                        <Check className="text-green-500 w-16 h-16" />
                    </div>
                    <h1 className="text-2xl font-bold text-green-600 mb-2">
                        Đặt hàng thành công!
                    </h1>
                    <p className="text-gray-600">
                        Cảm ơn bạn đã mua hàng tại Six Stars
                    </p>
                </div>

                {/* Thông tin đơn hàng */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-4">
                        Chi tiết đơn hàng
                    </h2>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Mã đơn hàng:</span>
                            <span className="font-medium">{orderId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">
                                Phương thức thanh toán:
                            </span>
                            <span className="font-medium">
                                {orderDetails.paymentMethod}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Tổng tiền:</span>
                            <span className="font-medium text-blue-600">
                                {orderDetails.totalPrice.toLocaleString()} VNĐ
                            </span>
                        </div>
                    </div>
                </div>

                {/* Thông tin giao hàng */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-4">
                        Thông tin giao hàng
                    </h2>
                    <div className="space-y-2">
                        <div className="flex gap-4">
                            <span className="text-gray-600">Họ tên:</span>
                            <span className="font-medium">
                                {orderDetails.shippingAdress.fullName}
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">
                                Số điện thoại:
                            </span>
                            <span className="font-medium">
                                {orderDetails.shippingAdress.phone}
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-gray-600">Địa chỉ:</span>
                            <span className="font-medium">
                                {orderDetails.shippingAdress.address}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Sản phẩm trong đơn hàng */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-semibold mb-4">
                        Sản phẩm đã mua
                    </h2>
                    {orderDetails.orderItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center border-b last:border-b-0 py-2"
                        >
                            <div>
                                <span className="font-medium">{item.name}</span>
                                <div className="text-sm text-gray-600">
                                    Số lượng: {item.amount}
                                </div>
                            </div>
                            <span className="font-medium text-blue-600">
                                {(item.price * item.amount).toLocaleString()}{' '}
                                VNĐ
                            </span>
                        </div>
                    ))}
                </div>

                {/* Nút điều hướng */}
                <div className="flex justify-between">
                    <Link
                        to="/"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Về trang chủ
                    </Link>
                    <Link
                        to={`/orderDetails/${orderDetails._id}`}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Xem đơn hàng
                    </Link>
                </div>
            </div>

            {/* Chính sách và thông tin */}
            <div className="mt-8 text-center text-gray-600">
                <p>
                    Bạn có thể kiểm tra trạng thái đơn hàng tại{' '}
                    <Link to="/order-history" className="text-blue-500">
                        Đơn hàng của tôi
                    </Link>
                </p>
                <p className="mt-2">
                    Nếu cần hỗ trợ, vui lòng liên hệ:
                    <span className="font-medium text-blue-600">
                        {' '}
                        Six Stars
                    </span>
                </p>
            </div>
        </div>
    );
};

export default OrderSuccess;
