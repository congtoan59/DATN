import { useState } from 'react';
import { shoes } from './product-shoes';

function Shoes() {
    const [hoverProduct, sethoverProduct] = useState(null);
    // Xử lý hover product
    const [currentPage, setcurrentPage] = useState(1);
    // Số trang hiện tại mà người dùng đang xem
    const itemsPerPage = 9;
    // Số lượng sản phẩm hiện tối đa của mỗi trang
    const indexOfLastProduct = currentPage * itemsPerPage;
    // Tính sản phẩm cuối cùng của trang
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    // Tính sản phẩm đầu tiên của trang
    const currentProducts = shoes.slice(
        indexOfFirstProduct,
        indexOfLastProduct,
    );
    // Tính tổng sản phẩm của trang hiện tại
    const totalPages = Math.ceil(shoes.length / itemsPerPage);
    // Tính tổng trang dựa trên sản phẩm
    const handlePageChange = (pageNumber) => {
        setcurrentPage(pageNumber);
    };
    // Hàm chuyển đổi các trang
    return (
        <>
            <div className="grid grid-cols-3 justify-center ">
                {currentProducts.map((product, index) => (
                    <div
                        className="hover:cursor-pointer border"
                        key={product.id}
                        onMouseEnter={() => sethoverProduct(index)}
                        onMouseLeave={() => sethoverProduct(null)}
                    >
                        <div className="">
                            <div className="">
                                <img
                                    className="h-96 w-96 object-cover p-2"
                                    src={
                                        hoverProduct === index
                                            ? product.img2
                                            : product.img
                                    }
                                    alt={product.name}
                                />
                            </div>
                            <div className="p-6 pb-8">
                                <div className="text-center">
                                    <span className="font-normal text-[#adadad] tracking-[0.2rem] text-sm">
                                        {product.brand}
                                    </span>
                                </div>
                                <div className=" text-center text-[#333333] text-base hover:text-[#942319]">
                                    <span>
                                        {hoverProduct === index
                                            ? product.name
                                            : product.name}
                                    </span>
                                </div>
                                <div className="text-center flex items-center justify-center space-x-4">
                                    <div>
                                        <span className="text-[#942319] font-medium">
                                            {product.price.toLocaleString(
                                                'vi-VN',
                                            )}{' '}
                                            VNĐ
                                        </span>
                                    </div>
                                    <div>
                                        <span className="line-through text-[#adadad] font-light text-sm">
                                            {product.salePrice
                                                ? `${product.salePrice.toLocaleString(
                                                      'vi-VN',
                                                  )} VNĐ`
                                                : null}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="">
                <ul className="flex text-center justify-center space-x-3 p-6 ">
                    {currentPage > 1 &&(
                        <li className="bg-[#f3f5f7] h-10 w-10 leading-[40px]">
                        <button
                            className="h-full w-full hover:bg-[#942319] hover:text-[#fff]"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className="fa-solid fa-angles-left"></i>
                        </button>
                    </li>
                    )}
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li
                            key={index}
                            className={` h-10 w-10 leading-[40px]  ${
                                currentPage === index + 1
                                    ? 'bg-[#942319] text-[#fff]'
                                    : ''
                            }`}
                        >
                            <button
                                className="h-full w-full hover:bg-[#942319] hover:text-[#fff]"
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}

                    {currentPage < totalPages && (
                        <li
                        className="bg-[#f3f5f7] h-10 w-10 leading-[40px]"
                    >
                        <button
                            className="h-full w-full hover:bg-[#942319] hover:text-[#fff]"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </li>
                    )}
                </ul>
            </div>
        </>
    );
}

export default Shoes;
