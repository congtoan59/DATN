import './Backpack.scss';
import { useState } from 'react';
import { backpackProduct } from './backpackProduct';
<<<<<<< HEAD:MLB-DATN/src/pages/Products/Backpack/Backpack.jsx
import { Link } from 'react-router-dom';
=======
>>>>>>> f257b2c5e8c58173e4ce655ea39c365425ebba30:src/pages/Products/Backpack/Backpack.jsx

function Backpack() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9; // Số sản phẩm trên mỗi trang

    // Tính toán các sản phẩm cần hiển thị
    const startIndex = currentPage * itemsPerPage;
    const currentItems = backpackProduct.slice(
        startIndex,
        startIndex + itemsPerPage,
    );
    const totalPages = Math.ceil(backpackProduct.length / itemsPerPage);

    const handleAddToCart = (id) => {
        console.log('Product ID:', id); // Thay đổi để thực hiện hành động thêm vào giỏ hàng
        // Bạn có thể thêm logic để thêm sản phẩm vào giỏ hàng ở đây
    };

    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {currentItems.map((item, index) => (
                    <div
                        className="relative hover:cursor-pointer"
                        key={item.id}
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
<<<<<<< HEAD:MLB-DATN/src/pages/Products/Backpack/Backpack.jsx
                        <Link to={`/productDetail/${item.id}`}>
                            <img
                                className="h-[90%]"
                                src={
                                    hoveredProduct === index
                                        ? item.img2
                                        : item.img
                                }
                                alt={item.name}
                            />
                        </Link>
=======
                        <img
                            className='h-[90%]'
                            src={
                                hoveredProduct === index ? item.img2 : item.img
                            }
                            alt={item.name}
                        />
>>>>>>> f257b2c5e8c58173e4ce655ea39c365425ebba30:src/pages/Products/Backpack/Backpack.jsx
                        <div className="text-center">
                            <span className="tracking-wider text-gray-500 ">
                                {item.nametag}
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
<<<<<<< HEAD:MLB-DATN/src/pages/Products/Backpack/Backpack.jsx
                            className={`absolute top-10 left-64 rounded-full bg-[#000] text-white flex items-center justify-center w-10 h-10 transition-transform duration-300 transform ${
                                hoveredProduct === index
                                    ? 'translate-x-0'
                                    : 'translate-x-[50px] opacity-0'
                            }`}
=======
                            className={`absolute top-10 left-64 rounded-full bg-[#000] text-white flex items-center justify-center w-10 h-10 transition-transform duration-300 transform ${hoveredProduct === index ? 'translate-x-0' : 'translate-x-[50px] opacity-0'}`}
>>>>>>> f257b2c5e8c58173e4ce655ea39c365425ebba30:src/pages/Products/Backpack/Backpack.jsx
                            onClick={() => handleAddToCart(item.id)}
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex justify-center pt-10 gap-2 pb-6">
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
            </div>
        </>
    );
}

export default Backpack;
