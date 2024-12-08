import React, { useState } from 'react';

const OrderManage = () => {
    // Dữ liệu đơn hàng mẫu
    const [orders, setOrders] = useState([
        {
            id: 1,
            img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-chunky-liner-logo-b-mau-nau-3asxcln4n-43brs-1.jpg?v=1732265600883',
            date: '2023-12-01',
            amount: '1,500,000 VND',
            status: 'Chờ xử lý',
        },
        {
            id: 2,
            img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-ace-runner-v2-logo-ny-mau-bac-3arnac24n-50sis-1.jpg?v=1725247825930',
            date: '2023-11-25',
            amount: '800,000 VND',
            status: 'Đang giao cho đơn vị vận chuyển',
        },
        {
            id: 3,
            img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-chunky-liner-logo-ny-mau-nau-3asxcln4n-50msd-1.jpg?v=1732266849410',
            date: '2023-11-20',
            amount: '2,200,000 VND',
            status: 'Giao hàng thành công',
        },
    ]);

    // Hàm cập nhật trạng thái đơn hàng
    const updateStatus = (id, newStatus) => {
        const updatedOrders = orders.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order,
        );
        setOrders(updatedOrders);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
                Quản lý đơn hàng
            </h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border border-gray-200">
                            Hình ảnh
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Ngày
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Tiền đơn hàng
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Trạng thái
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 text-center">
                                <img
                                    src={order.img}
                                    alt="Product"
                                    className="h-12 w-12 object-cover rounded"
                                />
                            </td>
                            <td className="py-2 px-4 text-center">
                                {order.date}
                            </td>
                            <td className="py-2 px-4 text-center">
                                {order.amount}
                            </td>
                            <td className="py-2 px-4 text-center">
                                <select
                                    value={order.status}
                                    onChange={(e) =>
                                        updateStatus(order.id, e.target.value)
                                    }
                                    className="px-3 py-1 rounded border border-gray-300 bg-white"
                                >
                                    <option value="Chờ xử lý">Chờ xử lý</option>
                                    <option value="Đang giao cho đơn vị vận chuyển">
                                        Đã giao cho đơn vị vận chuyển
                                    </option>
                                    <option value="Giao hàng thành công">
                                        Giao hàng thành công
                                    </option>
                                </select>
                            </td>
                            <td className="py-2 px-4 text-center">
                                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2">
                                    Xem
                                </button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderManage;
