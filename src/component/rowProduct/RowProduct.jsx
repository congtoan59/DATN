import { useState } from 'react';
import { Eye, Setting, Star, StarFull, Trash } from '../icons';

const RowProduct = ({
    name,
    img,
    price,
    category,
    quantitySold,
    buyDate,
    id,
}) => {
    const [focusStar, setFocusStar] = useState(true);

    return (
        <div className="flex text-center py-6 border-b border-gray-300">
            <div className="flex-[0_0_20%] flex justify-center gap-5">
                <img className="size-[70px]" src={img} alt="" />
                <h1 className="max-w-[200px] min-w-[200px] text-start text-blue-500 font-semibold hover:underline cursor-pointer leading-5 line-clamp-3">
                    {name}
                </h1>
            </div>
            <div className="flex items-center justify-center flex-[0_0_10%] font-bold text-[#525B75]">
                {price}
            </div>
            <div className="flex items-center justify-center flex-[0_0_10%] font-semibold text-gray-400">
                {category}
            </div>
            <div className="flex items-center justify-center flex-[0_0_20%] font-bold text-red-500">
                {quantitySold}
            </div>
            <div className="flex items-center justify-center flex-[0_0_10%] text-gray-400 font-medium italic">
                {buyDate}
            </div>
            <div className="flex items-center justify-center flex-[0_0_10%] gap-3">
                <button
                    onClick={() => setFocusStar(!focusStar)}
                    className="p-2 !border-gray-300 border-custom rounded-lg"
                >
                    {focusStar ? (
                        <Star className="text-yellow-500" />
                    ) : (
                        <StarFull className="text-yellow-500" />
                    )}
                </button>
            </div>
            <div className="flex items-center justify-center flex-[0_0_20%] gap-3">
                <button className="p-2 !border-gray-300 border-custom rounded-lg">
                    <Eye className="text-[#25B003]" />
                </button>
                <button className="p-2 !border-gray-300 border-custom rounded-lg">
                    <Setting className="text-blue-500" />
                </button>
                <button className="p-2 !border-gray-300 border-custom rounded-lg">
                    <Trash className="text-red-500" />
                </button>
            </div>
        </div>
    );
};

export default RowProduct;
