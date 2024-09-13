import { NavLink } from "react-router-dom";
function TextShoes() {
    return ( 
        <>
            <div className="text-center uppercase text-[3rem] text-[#420500] font-bold tracking-[5px]">
                <h1>New Shoes</h1>
            </div>
            <div>
                <span className="flex gap-1 justify-center text-gray-700 font-bold pt-4 text-[1.1rem] tracking-wide" >
                    Những phiên bản 
                    <NavLink><p className="text-[#660000] underline"> Giày MLB </p></NavLink>
                     mới nhất tại Việt Nam
                </span>
            </div>
        </>
     );
}

export default TextShoes;