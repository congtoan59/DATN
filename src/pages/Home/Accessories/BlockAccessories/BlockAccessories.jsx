import { NavLink } from 'react-router-dom';
function BlockAccessories() {
    return (
        <>
            <div className="flex justify-center gap-6 pt-6 ">
                <div className="relative hover:cursor-pointer hover:opacity-[0.8]">
                    <img
                        src="https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_1.jpg?1725442106829"
                        alt=""
                        className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-40 z-0"></div>
                    <div className="absolute bottom-4 left-4  grid grid-flow-row z-10 b">
                        <NavLink className="px-4 py-2 rounded text-[2.2rem] font-bold text-white hover:text-[#660000]  ">
                            Cute Bear
                        </NavLink>
                        <NavLink className="flex gap-3 items-center px-4 py-2 rounded text-[1rem] font-bold text-white hover:text-[#660000] ">
                            Xem thêm
                            <i className="fa-solid fa-arrow-right"></i>
                        </NavLink>
                    </div>
                </div>

                <div className="grid grid-flow-row gap-4 items-center">
                    <div className="relative">
                        <img
                            className="hover:cursor-pointer hover:opacity-[0.8]"
                            src="https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_2.jpg?1725442106829"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-40 z-0"></div>
                        <div className="absolute bottom-4 left-4  grid grid-flow-row z-10 b">
                            <NavLink className="px-4 py-2 rounded text-[2.2rem] font-bold text-white hover:text-[#660000]  ">
                                Balo MLB
                            </NavLink>
                            <NavLink className="flex gap-3 items-center px-4 py-2 rounded text-[1rem] font-bold text-white hover:text-[#660000] ">
                                Xem thêm
                                <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            className="hover:cursor-pointer hover:opacity-[0.8]"
                            src="https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/accessories_3.jpg?1725442106829"
                            alt=""
                        />
                        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-40 z-0"></div>
                        <div className="absolute bottom-4 left-4 grid grid-flow-row z-10 b">
                            <NavLink className="px-4 py-2 rounded text-[2.2rem] font-bold text-white hover:text-[#660000]  ">
                            Socks
                            </NavLink>
                            <NavLink className="flex gap-3 items-center px-4 py-2 rounded text-[1rem] font-bold text-white hover:text-[#660000] ">
                                <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink>
               <div className="w-[245px] h-[60px] bg-[#420500] text-[18px] text-center leading-[60px] mx-auto mt-[45px] text-white">
                    <span> Xem Tất Cả </span>
                </div>
            </NavLink>
        </>
    );
}

export default BlockAccessories;
