import { useEffect, useState } from 'react';
import * as OrderService from '../../../../service/OrderService';
import { formatCurrencyVND, formatDateTime } from '../../../../http/api';
import { Eye, Delete } from '../../../../component/icons';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

function HistoryOrder({ title }) {
    const [orderDetails, setOrderDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrderDetails();
    }, []);

    const fetchOrderDetails = async () => {
        try {
            const response = await OrderService.historyOrder();
            console.log(response);

            const statusOrder = [
                'Chờ xác nhận đơn hàng',
                'Đơn hàng đang chuẩn bị',
                'Đơn hàng đã được giao',
                'Đơn hàng giao thành công',
            ];

            // Sắp xếp các đơn hàng theo trạng thái
            const sortedOrders = response.data.sort((a, b) => {
                return (
                    statusOrder.indexOf(a.deliveryStatus) -
                    statusOrder.indexOf(b.deliveryStatus)
                );
            });

            // Lọc bỏ đơn hàng có trạng thái "Đơn hàng giao thành công"
            const filteredOrders = sortedOrders.filter(
                (order) => order.deliveryStatus !== 'Đơn hàng giao thành công',
            );

            setOrderDetails(filteredOrders);
            setLoading(false);
        } catch (error) {
            console.error('Lỗi khi lấy chi tiết đơn hàng:', error);
            setError(error);
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
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Lỗi: {error}</h1>
            </div>
        );
    }

    return (
        <div>
            <div>
                <h1 className="uppercase font-medium tracking-widest text-[19px]">
                    {title}
                </h1>
                <div className="pt-4">
                    {orderDetails.length === 0 ? (
                        <div className="text-start tracking-wide text-black font-medium py-4">
                            Không có đơn hàng nào!
                        </div>
                    ) : (
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-[#420500] text-white text-left">
                                    <th className=" px-4 py-2">Đơn hàng</th>
                                    <th className=" text-center px-4 py-2">
                                        Ngày
                                    </th>
                                    <th className=" text-center px-4 py-2">
                                        Giá trị đơn hàng
                                    </th>
                                    <th className="text-center px-4 py-2">
                                        Trạng thái đơn hàng
                                    </th>
                                    <th className="text-center px-4 py-2">
                                        Trạng thái
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderDetails.map((item) => (
                                    <tr
                                        key={item._id}
                                        className="bg-white hover:bg-gray-100 cursor-pointer"
                                    >
                                        <td className="border border-gray-300 pl-6 py-4">
                                            {item.orderItems.map(
                                                (orderItem) => (
                                                    <img
                                                        key={orderItem.product}
                                                        src={
                                                            orderItem.product
                                                                .imageUrls[0]
                                                                .url
                                                        }
                                                        alt={
                                                            orderItem.product
                                                                .name
                                                        }
                                                        className="w-20 h-20 object-cover"
                                                    />
                                                ),
                                            )}
                                        </td>
                                        <td className="border text-center border-gray-300 px-4 py-2">
                                            {formatDateTime(item.createdAt)}
                                        </td>
                                        <td className="text-center border border-gray-300 px-4 py-2">
                                            {formatCurrencyVND(item.totalPrice)}
                                        </td>
                                        <td
                                            className={`border border-gray-300 px-4 py-2 text-center font-bold ${
                                                item.deliveryStatus ===
                                                'Chờ xác nhận đơn hàng'
                                                    ? 'text-yellow-500'
                                                    : item.deliveryStatus ===
                                                      'Đơn hàng đang chuẩn bị'
                                                    ? 'text-blue-500'
                                                    : item.deliveryStatus ===
                                                      'Đơn hàng đã được giao'
                                                    ? 'text-green-500'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {item.deliveryStatus}
                                        </td>
                                        <td className="text-center border border-gray-300 px-4 py-2">
                                            <div className="flex justify-center items-center gap-4">
                                                <Link
                                                    to={`/orderDetails/${item._id}`}
                                                >
                                                    <Eye className="text-green-600" />
                                                </Link>
                                                <Delete
                                                    onClick={() => {
                                                        if (
                                                            item.deliveryStatus ===
                                                            'Chờ xác nhận đơn hàng'
                                                        ) {
                                                            handleSoftDelete(
                                                                item._id,
                                                            );
                                                        } else {
                                                            toast.error(
                                                                `Chỉ có thể hủy đơn hàng vì ${item.deliveryStatus}!`,
                                                            );
                                                        }
                                                    }}
                                                    className="text-red-600"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HistoryOrder;
