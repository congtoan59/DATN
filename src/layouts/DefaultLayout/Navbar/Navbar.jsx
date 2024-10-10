import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <div className="bg-black flex justify-between items-center h-[80px]">
            <div className="w-[10%] items-center pt-4">
                <NavLink to={'/'}>
                    <img
                        className="w-[100%]"
                        src="https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/logo.png?1718095609070"
                        alt=""
                    />
                </NavLink>
            </div>
            <div>
                <ul className="text-white flex gap-6 uppercase">
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/shoes'}>
                            <p>Giày Dép </p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/backpack'}>
                            <p>Túi Balo </p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/hat'}>
                            <p>Mũ nón</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/shoes'}>
                            <p>Áo quần</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/news'}>
                            <p>Tin tức MLB</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/shoes'}>
                            <p>Sale Off</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex text-white gap-4 pr-4 ">
                <div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    <i className="fa-regular fa-user"></i>
                </div>
                <div>
                    <i className="fa-regular fa-heart"></i>
                </div>
                <div>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
