import { useState } from 'react';
import CircleWithTick from './CircleWithTick/CircleWithTick';

function Color() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const colors = [
        { color: 'bg-red-500', tickColor: 'text-yellow-400' },
        { color: 'bg-green-500', tickColor: 'text-white' },
        { color: 'bg-blue-500', tickColor: 'text-white' },
        { color: 'bg-black', tickColor: 'text-white' },
        { color: 'bg-pink-500', tickColor: 'text-white' },
        { color: 'bg-[#990000]', tickColor: 'text-white' },
        { color: 'bg-[#C0C0C0]', tickColor: 'text-white' },
    ];

    return (
        <>
            <div>
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className="text-[1.5rem] tracking-wider uppercase">
                            Màu sắc
                        </h1>
                        <i
                            className={`fa-solid fa-chevron-${
                                isOpen ? 'up' : 'down'
                            } cursor-pointer pr-2`}
                            onClick={toggleSidebar}
                        ></i>
                    </div>
                </div>
                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden App flex items-center gap-2 pt-2 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    {colors.map((item, index) => (
                        <CircleWithTick
                            key={index}
                            color={item.color}
                            tickColor={item.tickColor}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Color;
