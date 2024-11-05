import './Backpack.scss';
import { useEffect, useState } from 'react';
import { backpackProduct } from './backpackProduct';
import { Link } from 'react-router-dom';
import http from '../../../http/api';
import * as ProductService from '../../../service/ProductService';

function Backpack() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProductAll = async () => {
        try {
            const res = await ProductService.getAllProduct();
            console.log(res);

            setProducts(res);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProductAll();
    }, []);

    // const { isLoading, data: products } = useQuery({
    //     queryKey: 'products',
    //     queryFn: fetchProductAll,
    //   });

    const handleAddToCart = (id) => {
        console.log('Product ID:', id);
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-4">
                {products.map((item, index) => (
                    <div
                        className="relative hover:cursor-pointer"
                        key={item.id}
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                        <Link to={`/productDetail/${item.id}`}>
                            {item.imageUrls && item.imageUrls.length > 0 ? (
                                <img
                                    src={item.imageUrls[0].url}
                                    alt={item.imageUrls[0].alt || item.name}
                                    className="object-cover rounded"
                                />
                            ) : (
                                <span>Chưa có ảnh</span>
                            )}
                        </Link>
                        <div className="text-center">
                            <span className="tracking-wider text-gray-500 ">
                                {item.name}
                            </span>
                        </div>
                        <div>
                            <span className="hover:text-[#942319] cursor-pointer">
                                {item.name}
                            </span>
                        </div>
                        <div className="flex justify-center gap-5 items-center">
                            <p className="font-bold text-[#942319]">
                                {new Intl.NumberFormat('vi-VN').format(
                                    item.price * (1 - 15 / 100),
                                )}{' '}
                                đ
                            </p>
                            <p className="line-through text-[0.8rem] text-gray-500 text-center">
                                {new Intl.NumberFormat('vi-VN').format(
                                    item.price,
                                )}{' '}
                                đ
                            </p>
                        </div>
                        <button
                            className={`absolute top-10 left-64 rounded-full bg-[#000] text-white flex items-center justify-center w-10 h-10 transition-transform duration-300 transform ${
                                hoveredProduct === index
                                    ? 'translate-x-0'
                                    : 'translate-x-[50px] opacity-0'
                            }`}
                            onClick={() => handleAddToCart(item.id)}
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                ))}
            </div>

            {/* <div className="flex justify-center pt-10 gap-2 pb-6">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index)}
                        className={`btn-backpack ${
                            currentPage === index
                                ? 'bg-[#942319] text-white'
                                : 'bg-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div> */}
        </>
    );
}

export default Backpack;
