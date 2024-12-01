import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../../public/image/LogoAll/LogoAdmin.png';
import InputCheckout from '../../component/inputCheckout/InputCheckout';
import { Payment, Left, User } from '../../component/icons';

import * as OrderService from '../../service/OrderService';
import * as CartService from '../../service/CartService';
import { toast } from 'react-toastify';

const Order = ({ cartItem, user }) => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        city: '',
        phone: '',
        paymentMethod: 'COD',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLoggedIn) {
            toast.success('Vui lòng đăng nhập để đặt hàng !!!');
            return;
        }
        if (cartItems.length === 0) {
            toast.error('Giỏ hàng của bạn đang trống. Vui lòng chọn sản phẩm trước khi đặt hàng.');
            return;
        }

        const { fullName, phone, address, email } = formData;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+84|0)[35789]\d{8}$/;

        if (!fullName || !phone || !address || !email) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error('Email không hợp lệ!');
            return;
        }

        if (!phoneRegex.test(phone)) {
            toast.error('Số điện thoại không hợp lệ!');
            return;
        }
        try {
            const orderItems = cartItems.map((item) => ({
                name: item.product.name,
                amount: item.quantity,
                price: item.price,
                product: item.product.id,
            }));

            const { itemsPrice, shippingPrice, totalPrice } =
                OrderService.calculateOrderTotals(orderItems);

            const orderData = {
                orderItems,
                shippingAdress: {
                    fullName: formData.fullName,
                    address: formData.address,
                    phone: formData.phone,
                    city: formData.city,
                },
                paymentMethod: formData.paymentMethod,
                itemsPrice,
                shippingPrice,
                totalPrice,
            };

            const token = localStorage.getItem('accessToken');

            const response = await OrderService.createOrder(orderData, token);

            const orderId =
                response?.data?._id || response?._id || response?.id;

            if (!orderId) {
                toast.error('Không thể lấy mã đơn hàng');
                return;
            }

            navigate(`/order-success/${orderId}`);
            toast.success('Bạn đã đặt hàng thành công ');
        } catch (error) {
            console.error('Lỗi khi đặt hàng:', error);
        }
    };

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const response = await CartService.getCart();

                setCartItems(response.items);
            } catch (error) {
                console.error('Lỗi khi lấy giỏ hàng:', error);
            }
        };
        fetchOrderData();
    }, []);

    return (
        <>
            <div className="flex justify-center pt-4">
                <div className="flex-[0_0_50%]">
                    <Link to={'/'} className="flex justify-center">
                        <img
                            src={Logo}
                            alt=""
                            className="object-cover w-[35%] "
                        />
                    </Link>
                    <div className="">
                        <form onSubmit={handleSubmit} className="p-4 ">
                            <div className="flex gap-4 justify-between">
                                <div className="flex-[0_0_48%]">
                                    <div>
                                        <h1 className="font-bold text-[18px] tracking-wide mb-4">
                                            Thông tin mua hàng
                                        </h1>
                                    </div>
                                    <InputCheckout
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Nhập email..."
                                        required
                                    />
                                    <InputCheckout
                                        label="Họ và tên"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Nhập họ và tên..."
                                        required
                                    />

                                    <InputCheckout
                                        label="Số điện thoại"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Nhập số điện thoại..."
                                        required
                                    />
                                    <InputCheckout
                                        label="Địa chỉ"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Nhập Địa chỉ..."
                                        required
                                    />
                                    <InputCheckout
                                        label="Thành phố"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="Nhập thành phố..."
                                        required
                                    />
                                    <InputCheckout
                                        label="Ghi chú"
                                        name="des"
                                        value={formData.des}
                                        onChange={handleInputChange}
                                        placeholder="Ghi chú (tùy chọn)"
                                        required
                                    />
                                </div>
                                <div className="mb-4 flex-[0_0_48%]">
                                    <div className="mb-6">
                                        <h1 className="font-bold text-[18px] tracking-wide mb-4">
                                            Vận chuyển
                                        </h1>

                                        <div className="bg-[#d1ecf1] border border-[#bee5eb] p-[0.75rem] rounded-md">
                                            <h1 className="text-[#0098b2] font-normal tracking-wide ">
                                                {isLoggedIn ? (
                                                    'Vui lòng nhập thông tin giao hàng'
                                                ) : (
                                                    <>
                                                        <Link
                                                            to={'/sign-in'}
                                                            className="flex gap-2 items-center hover:text-[#348c9b]"
                                                        >
                                                            Vui lòng đăng nhập
                                                            để mua hàng !!!{' '}
                                                            <User />
                                                        </Link>
                                                    </>
                                                )}
                                            </h1>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-[18px] font-bold mb-4">
                                            Thanh Toán
                                        </label>
                                        <div className="border-[1px] border-[#cecdcd] rounded-lg">
                                            <div className="flex items-center gap-3 p-4 justify-between">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        className="cursor-pointer"
                                                        type="radio"
                                                        id="paymentVietQr"
                                                        name="paymentMethod"
                                                        value="VietQr"
                                                        checked={
                                                            formData.paymentMethod ===
                                                            'VietQr'
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="paymentVietQr"
                                                        className="text-[14px] cursor-pointer"
                                                    >
                                                        <h1 className="line-clamp-3">
                                                            Thanh toán nhanh
                                                            bằng QR (Chấp nhận
                                                            thẻ ngân hàng, momo
                                                            và các kênh thánh
                                                            toán khác)
                                                        </h1>
                                                    </label>
                                                </div>
                                                <img
                                                    src="https://bizweb.dktcdn.net/web/assets/images/ocb_payment_icon_new.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex items-center gap-3 p-4 justify-between">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        className="cursor-pointer"
                                                        type="radio"
                                                        id="paymentPaypal"
                                                        name="paymentMethod"
                                                        value="Paypal"
                                                        checked={
                                                            formData.paymentMethod ===
                                                            'Paypal'
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="paymentPaypal"
                                                        className="text-[14px] cursor-pointer"
                                                    >
                                                        <h1>
                                                            Thanh toán bằng
                                                            Paypal
                                                        </h1>
                                                    </label>
                                                </div>
                                                <img
                                                    src="https://bizweb.dktcdn.net/assets/themes_support/payment_icon_paypal.png"
                                                    alt=""
                                                />
                                            </div>

                                            <div className="flex items-center gap-3 p-4 justify-between">
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        className="cursor-pointer"
                                                        type="radio"
                                                        id="paymentCOD"
                                                        name="paymentMethod"
                                                        value="COD"
                                                        checked={
                                                            formData.paymentMethod ===
                                                            'COD'
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                    />
                                                    <label
                                                        htmlFor="paymentCOD"
                                                        className="text-[14px] cursor-pointer"
                                                    >
                                                        <h1>
                                                            Thanh toán khi nhận
                                                            hàng (COD)
                                                        </h1>
                                                    </label>
                                                </div>
                                                <Payment className="text-blue-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex-[0_0_40%]">
                    <h1 className="font-bold tracking-wide text-[18px] mb-4">
                        Đơn hàng ({cartItems.length} sản phẩm )
                    </h1>
                    <div className="overflow-y-scroll customScroll max-h-[200px]">
                        {cartItems.map((item) => (
                            <div className="flex gap-4" key={item.product.id}>
                                <div className="relative">
                                    <img
                                        className="w-[50px] h-[50px]"
                                        src={
                                            item.product.imageUrls[0]?.url || ''
                                        }
                                        alt={item.product.name}
                                    />
                                    <div className="absolute top-0 right-0 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-blue-300 text-white text-xs">
                                        {item.quantity}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h1 className="w-[70%] mb-2">
                                        {item.product.name}
                                    </h1>
                                    <div className="flex justify-between ">
                                        <p className="text-[13px] text-[#969696]">
                                            Size: {item.size}
                                        </p>
                                        <p className="text-[14px] font-medium tracking-wider">
                                            {item.product.price.toLocaleString()}{' '}
                                            VNĐ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10">
                        <div className="mb-6">
                            <div className="flex justify-between gap-2 mb-2">
                                <p className="text-[14px] font-medium ">
                                    Tạm tính
                                </p>
                                <p className="text-[14px] font-medium tracking-wider">
                                    {cartItems
                                        .reduce(
                                            (total, item) =>
                                                total +
                                                item.product.price *
                                                    item.quantity,
                                            0,
                                        )
                                        .toLocaleString()}{' '}
                                    VNĐ
                                </p>
                            </div>
                            <div className="flex justify-between gap-2 mb-2">
                                <p className="text-[14px] font-medium ">
                                    Phí vận chuyển
                                </p>
                                <p className="text-[14px] font-medium tracking-wider">
                                    {cartItems.length > 0 &&
                                    cartItems.reduce(
                                        (total, item) =>
                                            total +
                                            item.product.price * item.quantity,
                                        0,
                                    ) > 1000000
                                        ? 'Freeship'
                                        : '30,000 VNĐ'}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-2 mb-4">
                            <p className="text-[17px] font-medium ">
                                Tổng cộng
                            </p>
                            <p className="text-[21px] font-medium text-[#0098b2] tracking-wider">
                                {cartItems
                                    .reduce(
                                        (total, item) =>
                                            total +
                                            item.product.price * item.quantity,
                                        0,
                                    )
                                    .toLocaleString()}{' '}
                                VNĐ
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <Link className="flex items-center  text-[#2a9dcc] font-medium hover:text-[#0098b2]">
                                <Left />
                                <p>Quay về giỏ hàng</p>
                            </Link>
                            <button
                                onClick={handleSubmit}
                                className="bg-[#009eb9] hover:bg-[#00768A] hover:border-[#00768A] border border-[#009eb9] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Đặt hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center gap-8 text-[#0098b2] hover:text-[#2a9dcc] text-[14px] font-medium tracking-wider">
                    <Link>Chính sách đổi trả</Link>
                    <Link>Chính sách bảo mật</Link>
                    <Link>Điều khoản sử dụng</Link>
                </div>

                <div className="flex gap-1 pt-6 justify-center text-[14px] mb-10">
                    <Link to={'/'} className="text-[#2980b9] font-bold ">
                        Six Stars Việt Nam{' '}
                    </Link>
                    <p>
                        hân hạnh được phục vụ . Mời quý khách tham gia Six Stars
                        để nhận ưu đãi độc quyền
                    </p>
                </div>
            </div>
        </>
    );
};

export default Order;
