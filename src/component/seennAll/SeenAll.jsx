import { NavLink } from 'react-router-dom';

function SeenAll({ path = '' }) {
    return (
        <>
            <NavLink to={path}>
                <div className="w-[245px] h-[60px] bg-[#420500] text-[18px] text-center leading-[60px] mx-auto mt-[45px] text-white hover:bg-[#942319] cursor-pointer duration-300 ">
                    <span> Xem Tất Cả </span>
                </div>
            </NavLink>
        </>
    );
}

export default SeenAll;
