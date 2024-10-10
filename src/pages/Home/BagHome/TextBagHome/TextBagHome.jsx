import { NavLink } from "react-router-dom";
function TextBagHome() {
    return ( 
        <>
             <div className="text-center uppercase text-[3rem] text-[#420500] font-bold tracking-[5px]">
                <h1>MLB Bag</h1>
            </div>
            <div>
                <span className="flex gap-1 justify-center text-gray-700 font-bold pt-4 text-[1.1rem] tracking-wide" >
                    Những bộ sưu tập
                    <NavLink><p className="text-[#660000] underline"> Túi MLB </p></NavLink>
                    Hot nhất
                </span>
            </div>
        </>
     );
}

export default TextBagHome;