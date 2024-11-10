import SeenAll from '../../../../component/seennAll/SeenAll';
import ListProduct from '../../../../component/listProduct/ListProduct';
function ProductShoes() {
    return (
        <>
            <ListProduct categoryName={'Shoes'} cols={4} />
            {/* <div className="grid grid-cols-4 gap-3 justify-center pt-[5%] ">
                {products.map((product, index) => {
                    return (
                        <div
                            className="hover:cursor-pointer"
                            key={product.id}
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div>
                                <img
                                    className="rounded-lg transition duration-400"
                                    src={
                                        hoveredProduct === index
                                            ? product.img2
                                            : product.img
                                    }
                                    alt={product.name}
                                />
                            </div>
                            <div className="text-center font-normal tracking-widest text-gray-400 pt-2 uppercase">
                                <span>Six Stars</span>
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
                    );
                })}
            </div> */}
            <SeenAll path="/shoes" />
        </>
    );
}

export default ProductShoes;
