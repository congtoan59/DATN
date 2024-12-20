import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../http/api';
import { formatCurrencyVND } from '../../http/api';
import ButtonDetail from '../../component/buttonDetail/ButtonDetail';
import ContentProductDetail from './components/ContentProductDetail';
import ImageWithFallback from '../../component/img/ImageWithFallback';
import { Right, Left, Evaluation } from '../../component/icons';
import Banner from '../../component/banner/Banner';
import { toast } from 'react-toastify';
import * as CartService from '../../service/CartService';
function ProductDetail() {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const [selectedSize, setSelectedSize] = useState('S');
    const [quantity, setQuantity] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await api.get(`/product/detail/${id}`);
            setProduct(res.data);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    'Có lỗi xảy ra khi tải thông tin sản phẩm.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 1 ? prevQuantity - 1 : 1,
        );
    };
    const nextImage = () => {
        setSelectedImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1,
        );
    };

    const prevImage = () => {
        setSelectedImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1,
        );
    };

    const handleAddToCart = async () => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            toast.error('Bạn cần đăng nhập để thêm vào giỏ hàng!');
            return;
        }
        try {
            // Định nghĩa dữ liệu truyền đi
            const cartData = {
                productId: product._id,
                size: selectedSize,
                quantity,
                name: product.name,
                price: product.price,
                image: product.imageUrls[0]?.url,
            };

            const response = await CartService.addToCart(cartData);
            toast.success('Đã thêm vào giỏ hàng!');
            console.log(response);
        } catch (error) {
            toast.error(error.response?.data?.message || 'Không thể thêm vào giỏ hàng!');
            console.error(error);
        }

        // const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        // if (existingItem) {
        //     existingItem.quantity += 1;
        // } else {
        //     cart.push({
        //         id: item.id,
        //         name: item.name,
        //         price: item.price, // Giá sau giảm
        //         quantity: 1,
        //         image: item.imageUrls[0].url,
        //     });
        // }

        // localStorage.setItem('cart', JSON.stringify(cart));
        // toast.success('Đã thêm vào giỏ hàng!!');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div>
                <Banner title={product.name} content={product.name} />
            </div>
            <div className="flex justify-center gap-6 pt-20 mb-20">
                <div className="flex-[0_0_40%]">
                    <div className="mb-4">
                        <div className="relative">
                            <button
                                onClick={prevImage}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-r"
                            >
                                <Left />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-l"
                            >
                                <Right />
                            </button>
                            <ImageWithFallback
                                src={product.imageUrls[selectedImageIndex]?.url}
                                alt={product.name}
                                className="w-full h-[350px] object-cover rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="flex gap-2 overflow-x-auto">
                        {product.imageUrls.map((image, index) => (
                            <div
                                key={image.id}
                                className={`cursor-pointer w-20 h-20 
                                    ${
                                        selectedImageIndex === index
                                            ? 'border-2 border-[#942319] rounded-xl'
                                            : 'border'
                                    }
                                `}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <ImageWithFallback
                                    src={image.url}
                                    alt={`${product.name} - ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-[0_0_40%]">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-medium text-[24px]">
                            {product.name}
                        </h1>
                        <div className="flex gap-2 items-center">
                            <div>
                                <Evaluation className="text-orange-500" />
                                <Evaluation className="text-orange-500" />
                                <Evaluation className="text-orange-500" />
                                <Evaluation className="text-orange-500" />
                                <Evaluation className="text-orange-500" />
                            </div>
                            <div>
                                <h1 className="font-normal text-[14px] hover:text-blue-500 cursor-pointer duration-300">
                                    Đánh giá sản phẩm này
                                </h1>
                            </div>
                        </div>

                        <span className="text-[14px]">
                            Thương hiệu :{' '}
                            <span className="font-medium">
                                SixStars VietNam
                            </span>
                        </span>
                        <span className="text-[28px] text-[#942319]">
                            {formatCurrencyVND(product.price)}
                        </span>
                        <span>
                            Size:{' '}
                            <span className="font-medium">
                                {selectedSize || 'Chưa chọn'}
                            </span>
                        </span>
                        <div className="flex gap-4">
                            {['S', 'M', 'L', 'XL'].map((size) => (
                                <button
                                    key={size.id}
                                    className={`px-4 py-2 rounded-xl border ${
                                        selectedSize === size
                                            ? 'border-[#942319] text-[#942319]'
                                            : 'bg-white'
                                    }`}
                                    onClick={() => handleSizeSelect(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center mt-4">
                                <button
                                    className="px-2 py-1 border"
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-12 text-center border"
                                />
                                <button
                                    className="px-2 py-1 border"
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <ButtonDetail
                                    onClick={() => handleAddToCart()}
                                    title="Thêm vào giỏ hàng"
                                />
                                <ButtonDetail title="Mua hàng" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <h2 className="font-medium">
                                Thông tin sản phẩm :
                            </h2>
                            <span className="font-light line-clamp-3">
                                {product.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-10">
                <ContentProductDetail />
            </div>
        </>
    );
}

export default ProductDetail;
