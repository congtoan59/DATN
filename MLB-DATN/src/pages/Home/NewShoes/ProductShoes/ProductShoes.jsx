import { useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "./prodcuts";
function ProductShoes() {

    const [hoveredProduct , setHoveredProduct] = useState(null)
    return ( 
        
        <>
            <div className="grid grid-cols-4 gap-3 justify-center pt-[5%] ">
           {products.map((product , index)=> {
               return(
                    <div
                        className="hover:cursor-pointer"
                        key={product.id} 
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                    >
                    <div>
                        <img className="rounded-xl" src={hoveredProduct === index ? product.img2 : product.img} alt={product.name} />
                    </div>
                    <div className="text-center text-gray-500 text-base">
                        <span>{product.name}</span>
                    </div>
                    <div  className="text-center">
                    <span className="text-[#942319] font-bold">
                            {product.price.toLocaleString('vi-VN')} VNĐ
                        </span>
                    </div>
                </div>
               )
            })} 
            </div>

            <NavLink>
               <div className="w-[245px] h-[60px] bg-[#420500] text-[18px] text-center leading-[60px] mx-auto mt-[45px] text-white">
                    <span> Xem Tất Cả </span>
                </div>
            </NavLink>
        </>
     );
}

export default ProductShoes;