import Banner from '../../component/banner/Banner';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as OrderService from '../../service/OrderService';
import { formatCurrencyVND, formatDateTime } from '../../http/api';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { Delete } from '../../component/icons';

function OrderDetails() {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await OrderService.getOrderById(id);
            console.log(response.data);

            setOrderDetails(response.data);
        } catch (error) {
            console.error('Error fetching order details:', error);
            setError('Lỗi khi tải chi tiết đơn hàng');
        } finally {
            setLoading(false);
        }
    };

    const handleSoftDelete = (orderId) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <>
                    <div className="confirm-overlay" />
                    <div className="custom-confirm-dialog flex flex-col gap-4 ">
                        <h1 className="font-bold text-red-700 text-[18px] tracking-wider">
                            Xác nhận xóa
                        </h1>
                        <p>Bạn có chắc muốn hủy đơn hàng này?</p>
                        <div className="flex justify-between">
                            <button
                                className="confirm-button font-bold"
                                onClick={async () => {
                                    try {
                                        await OrderService.cancelOrder(orderId);
                                        toast.success(
                                            'Xóa đơn hàng thành công!',
                                        );
                                        fetchOrderDetails();
                                    } catch (error) {
                                        toast.error('Xóa đơn hàng thất bại!!!');
                                        console.log(
                                            'Có lỗi khi xóa đơn hàng này ! ',
                                            error,
                                        );
                                    }
                                    onClose();
                                }}
                            >
                                Có
                            </button>
                            <button
                                onClick={onClose}
                                className="mr-2 font-bold"
                            >
                                Không
                            </button>
                        </div>
                    </div>
                </>
            ),
        });
    };

    if (loading) {
        return <div className="text-center py-10">Đang tải...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <>
            <Banner title="Chi tiết đơn hàng" content="Chi tiết đơn hàng" />
            <div className="mx-[20%] mt-4 mb-10 border border-gray-300 rounded-lg">
                <div className="m-[2%]">
                    <div>
                        <div className="flex justify-between border rounded-lg border-gray-300 p-2 mb-4">
                            <div className="flex gap-2 items-center">
                                <p className="font-bold text-[16px]">
                                    Mã đơn đặt hàng :
                                </p>
                                <p className="text-[#942319] font-medium">
                                    {orderDetails._id}
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="font-bold text-[16px]">
                                    Ngày đặt hàng :
                                </p>
                                <p className="text-[#942319] font-medium">
                                    {formatDateTime(orderDetails.createdAt)}
                                </p>
                            </div>
                        </div>
                        {orderDetails.orderItems.map((item) => (
                            <div
                                className="flex gap-2 border border-b-gray-400 p-2"
                                key={item.id}
                            >
                                <div className="flex flex-[0_0_25%]">
                                    {item.product.imageUrls &&
                                    item.product.imageUrls.length > 0 ? (
                                        <img
                                            src={item.product.imageUrls[0].url}
                                            alt={item || item.name}
                                            className="object-cover rounded w-[200px] h-[200px] cursor-pointer"
                                        />
                                    ) : (
                                        <span>Chưa có ảnh</span>
                                    )}
                                </div>
                                <div className="flex flex-[0_0_75%]">
                                    <div className="w-full">
                                        <h1 className="font-bold text-[22px] w-[70%] cursor-pointer hover:text-[#942319]">
                                            {item.name}
                                        </h1>
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-col pt-6 gap-4">
                                                <div className="flex gap-2 items-center">
                                                    <p className="font-medium">
                                                        Số Lượng :
                                                    </p>
                                                    <p>{item.amount}</p>
                                                </div>
                                                <div>
                                                    <p
                                                        className={`font-medium ${
                                                            orderDetails.deliveryStatus ===
                                                            'Chờ xác nhận đơn hàng'
                                                                ? 'text-yellow-500'
                                                                : orderDetails.deliveryStatus ===
                                                                  'Đơn hàng đang chuẩn bị'
                                                                ? 'text-blue-500'
                                                                : orderDetails.deliveryStatus ===
                                                                  'Đơn hàng đã được giao'
                                                                ? 'text-green-500'
                                                                : orderDetails.deliveryStatus ===
                                                                  'Đơn hàng giao thành công'
                                                                ? 'text-green-800'
                                                                : 'text-gray-600 '
                                                        }`}
                                                    >
                                                        {
                                                            orderDetails.deliveryStatus
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-red-600 font-medium text-[16px]">
                                                    {formatCurrencyVND(
                                                        item.price,
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className="flex justify-between pt-4">
                            <p className="font-medium">Tổng tiền hàng</p>
                            <p className="font-medium text-[16px] ">
                                {formatCurrencyVND(orderDetails.totalPrice)}
                            </p>
                        </div>
                        <div className="flex justify-between pt-4">
                            <p className="font-medium">Phí vận chuyển</p>
                            <p className="font-medium text-[16px] ">
                                {orderDetails.shippingPrice}
                            </p>
                        </div>
                        <div className="flex justify-between pt-4 border border-b-gray-300 ">
                            <p className="font-medium">Voucher</p>
                            <p className="font-medium text-[16px] ">0</p>
                        </div>
                        <div className="flex justify-between pt-4 ">
                            <p className="font-medium">Thành tiền</p>
                            <p className="font-bold text-red-600 text-[17px] ">
                                {formatCurrencyVND(orderDetails.totalPrice)}
                            </p>
                        </div>
                        <div className="flex justify-between pt-4 ">
                            <p className="font-medium">
                                Phương thức thanh toán
                            </p>
                            <p className="font-medium  text-[16px] ">
                                {orderDetails.paymentMethod}
                            </p>
                        </div>
                    </div>
                    <div className="pt-10 flex justify-between items-center">
                        <div>
                            <h1 className="font-bold text-[18px]">
                                Địa chỉ nhận hàng
                            </h1>
                            <div className="flex flex-col gap-2 pt-2">
                                <p>{orderDetails.shippingAdress.fullName}</p>
                                <p>0{orderDetails.shippingAdress.phone}</p>
                                <p>{orderDetails.shippingAdress.address}</p>
                            </div>
                        </div>
                        <div
                            className="flex justify-between gap-2 cursor-pointer border border-[#942319]  h-[50%] py-2 px-4 rounded-lg text-[#942319] font-medium text-[14px] hover:bg-[#822c24] hover:text-white "
                            onClick={() => {
                                if (
                                    orderDetails.deliveryStatus ===
                                    'Chờ xác nhận đơn hàng'
                                ) {
                                    handleSoftDelete(orderDetails._id);
                                } else {
                                    toast.error(
                                        `Chỉ có thể hủy đơn hàng vì ${orderDetails.deliveryStatus}!`,
                                    );
                                }
                            }}
                        >
                            <p>
                                {orderDetails.deliveryStatus ===
                                'Đơn hàng giao thành công'
                                    ? 'Mua lại'
                                    : 'Hủy đơn hàng'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetails;
