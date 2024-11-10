import * as ProductService from '../../service/ProductService';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartIcon } from '../icons';
function ListProduct({ categoryName, cols = 3 }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await ProductService.getProductsByCategory(
                    categoryName,
                );
                console.log(res);

                setProducts(res);
            } catch (error) {
                console.log('Lỗi fetch sản phẩm : ', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [categoryName]);

    const handleAddToCart = (id) => {
        console.log('Product ID:', id);
    };

    if (loading) return <p>Loading Products...</p>;
    return (
        <div className={`grid grid-cols-${cols} gap-4 mt-4`}>
            {products.map((item, index) => (
                <div
                    className="relative hover:cursor-pointer mb-2 "
                    key={item.id}
                    onMouseEnter={() => setHoveredProduct(index)}
                    onMouseLeave={() => setHoveredProduct(null)}
                >
                    <Link to={`/productDetail/${item.id}`}>
                        {item.imageUrls && item.imageUrls.length > 0 ? (
                            <img
                                src={item.imageUrls[0].url}
                                alt={item.imageUrls[0].alt || item.name}
                                className="object-cover rounded w-[365px] h-[365px]"
                            />
                        ) : (
                            <span>Chưa có ảnh</span>
                        )}
                    </Link>
                    <div className="text-center">
                        <span className="font-normal text-[#adadad] tracking-[0.2rem] text-sm uppercase">
                            Six Stars
                        </span>
                    </div>
                    <div>
                        <span className="hover:text-[#942319] cursor-pointer line-clamp-1">
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
                            {new Intl.NumberFormat('vi-VN').format(item.price)}{' '}
                            đ
                        </p>
                    </div>
                    <button
                        className={`absolute top-4 right-0  rounded-full bg-[#000000] text-white flex items-center justify-center w-10 h-10  duration-300 transform ${
                            hoveredProduct === index
                                ? 'translate-x-0'
                                : 'translate-x-[0px] opacity-0 transition-all ease-in-out duration-300'
                        }`}
                        onClick={() => handleAddToCart(item.id)}
                    >
                        <CartIcon />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ListProduct;
