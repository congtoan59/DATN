import { description } from './description';
import { products } from '../../NewShoes/ProductShoes/prodcuts';
import { useState } from 'react';
function ProductBags() {
    const [selectId, setSelectId] = useState(1);
    const [hoveredProduct , setHoveredProduct] = useState(null)

    const handleClick = (id) => {
        setSelectId(id);
    };

    // Lọc danh sách sản phẩm theo selectId
    const filteredProducts = products.filter(
        (product) => product.typeId === selectId,
    );
    return (
        <>
            <div>
                <ul className="flex justify-center gap-6 mt-4">
                    {description.map((type) => {
                        return (
                            <li
                                key={type.id}
                                onClick={() => handleClick(type.id)}
                                className={`p-2 rounded  cursor-pointer hover:bg-[#660000] hover:text-white ${
                                    selectId === type.id
                                        ? 'bg-[#660000] text-white'
                                        : 'bg-white text-black'
                                }`}
                            >
                                {type.name}
                            </li>
                        );
                    })}
                </ul>

                {/* Hiển thị danh sách sản phẩm đã lọc */}
                <div className="pt-[5%] grid grid-cols-4 gap-3 justify-center">
                    {filteredProducts.map((product ,index) => (
                        <div
                            className="hover:cursor-pointer"
                            key={product.id}
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div>
                                <img
                                    className='rounded-xl'
                                    src={
                                        hoveredProduct === index
                                            ? product.img2
                                            : product.img
                                    }
                                    alt={product.name}
                                />
                            </div>
                            <div className="text-center text-gray-500 text-base">
                                <span>{product.name}</span>
                            </div>
                            <div className="text-center">
                                <span className="text-[#942319] font-bold">
                                    {product.price.toLocaleString('vi-VN')} VNĐ
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductBags;
