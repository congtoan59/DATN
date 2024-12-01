import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../component/banner/Banner';
import * as CartService from '../../service/CartService';
import { BagCart } from '../../component/icons';
function Cart() {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        setLoading(true);

        try {
            const res = await CartService.getCart('/cart/');
            setCarts(res.items);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRemoveItem = async (id) => {
        try {
            setCarts((prev) => prev.filter((item) => item.id !== id));
            await CartService.removeCartItem(id);
            fetchCart();
        } catch (error) {
            console.error('Failed to remove item:', error);
        }
    };
    const calculateTotal = () => {
        return carts.reduce((total, item) => {
            return total + item.product.price * (item.quantity || 1);
        }, 0);
    };

    return (
        <>
            <Banner title="Giỏ hàng" content="Giỏ hàng" />
            <div className="mx-[100px] pb-6">
                <div>
                    <h1 className="text-[22px] font-normal pt-4  tracking-wide">
                        Giỏ hàng của bạn tại Six Stars Việt Nam
                    </h1>
                </div>
                <div>
                    {loading ? ( // Hiển thị loading khi fetch dữ liệu
                        <div className="text-center py-10">
                            <div className="text-gray-700">Đang tải...</div>
                        </div>
                    ) : carts.length === 0 ? ( // Kiểm tra nếu không có sản phẩm
                        <div className="text-center py-10">
                            <BagCart
                                style={{ fontSize: '100px' }}
                                className="font-light text-gray-700 mb-4"
                            />
                            <p className=" font-normal tracking-wide text-[15px] text-black">
                                Không có sản phẩm nào trong giỏ hàng của bạn
                            </p>
                        </div>
                    ) : (
                        <div>
                            <table className="table-auto w-full bg-white shadow-md">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left py-3 px-4 text-[16px] font-medium ">
                                            Thông tin sản phẩm
                                        </th>
                                        <th className="py-3 px-4 text-[16px] font-medium ">
                                            Đơn giá
                                        </th>
                                        <th className="py-3 px-4 text-[16px] font-medium ">
                                            Số lượng
                                        </th>
                                        <th className="py-3 px-4 text-[16px] font-medium ">
                                            Thành tiền
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((item) => (
                                        <tr key={item.id}>
                                            <td className="flex gap-4 items-center py-3 px-4 font-medium text-gray-800">
                                                <div className="w-[120px] h-[120px] flex-shrink-0">
                                                    <Link
                                                        to={`/productDetail/${item.product.id}`}
                                                    >
                                                        <img
                                                            src={
                                                                item.product
                                                                    .imageUrls[0]
                                                                    .url
                                                            }
                                                            alt=""
                                                            className="w-full h-full object-cover rounded"
                                                        />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link
                                                        to={`/productDetail/${item.product.id}`}
                                                    >
                                                        <p className="hover:text-blue-500">
                                                            {item.product.name}
                                                        </p>{' '}
                                                    </Link>
                                                    <p className="text-gray-500">
                                                        {item.product.size}
                                                    </p>
                                                    <button
                                                        className="mt-1 text-red-500 hover:underline"
                                                        onClick={() =>
                                                            handleRemoveItem(
                                                                item.id,
                                                            )
                                                        }
                                                    >
                                                        Xóa
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 font-medium text-red-700 text-center">
                                                {item.product.price.toLocaleString()}{' '}
                                                VNĐ
                                            </td>
                                            <td className="py-3 px-4 font-medium text-center">
                                                {item.quantity || 1}
                                            </td>
                                            <td className="py-3 px-4 font-medium text-red-700 text-center">
                                                {(
                                                    item.product.price *
                                                    (item.quantity || 1)
                                                ).toLocaleString()}{' '}
                                                VNĐ
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-6 flex justify-end">
                                <div className="flex items-center w-[30%]">
                                    <h2 className="text-[18px] font-medium">
                                        Tổng tiền:
                                    </h2>
                                    <p className="text-[20px] font-medium text-red-700 ml-auto">
                                        {calculateTotal().toLocaleString()} VNĐ
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-end pt-4">
                                <Link
                                    to={'/checkout'}
                                    className="w-[30%] text-center p-2 text-white bg-[#420500] hover:bg-black "
                                >
                                    Thanh Toán
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;
