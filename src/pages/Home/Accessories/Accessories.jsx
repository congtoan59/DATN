import { NavLink } from "react-router-dom";
import BlockAccessories from "./BlockAccessories/BlockAccessories";
function Accessories() {
    return ( 
        <>
            <div className="text-center uppercase text-[3rem] text-[#420500] font-bold tracking-[5px] pt-4">
                <h1>Phụ kiện</h1>
            </div>
            <div>
            <span className="flex gap-1 justify-center text-gray-700 font-bold pt-4 text-[1.1rem] tracking-wide" >
                    Tất Cả Phụ Kiện Tại
                    <NavLink><p className="text-[#660000] underline">MLB Việt Nam </p></NavLink>
                </span>
            </div>

            <div>
                <BlockAccessories />
            </div>
            
        </>
     );
}

export default Accessories;