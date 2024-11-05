import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LogoHeader from '../../../../public/image/LogoAll/LogoHeader22.png';
import { useSelector } from 'react-redux';
import { User, SearchIcon, CartIcon, Heart } from '../../../component/icons';

function NavBar() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState(null);
    const [loading, setLoading] = useState(true);
    const decodedUser = useSelector((state) => state.auth.decodedUser);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        if (decodedUser) setLoading(false);
    }, [decodedUser]);

    return (
        <div className="bg-black flex justify-between items-center h-[80px]">
            <div className="flex-[0_0_15%] object-cover items-center">
                <NavLink to={'/'}>
                    <img className="w-[100%]" src={LogoHeader} alt="Logo" />
                </NavLink>
            </div>
            <div>
                <ul className="text-white flex gap-6 uppercase">
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/shoes'}>
                            <p>Giày Dép</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/backpack'}>
                            <p>Túi Balo</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/hat'}>
                            <p>Mũ nón</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/clothes'}>
                            <p>Áo quần</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/news'}>
                            <p>Tin tức MLB</p>
                        </NavLink>
                    </li>
                    <li className="hover:text-[#dc3545]">
                        <NavLink to={'/sale'}>
                            <p>Sale Off</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex text-white gap-2 pr-2 items-center">
                <div>
                    <Link>
                        <SearchIcon />
                    </Link>
                </div>
                <div>
                    <Link>
                        <Heart />
                    </Link>
                </div>
                <div>
                    <Link>
                        <CartIcon />
                    </Link>
                </div>

                <div className="relative">
                    {loading ? (
                        <Link to={'/sign-in'}>
                            <User />
                        </Link>
                    ) : decodedUser ? (
                        <div
                            className="cursor-pointer"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={closeDropdown}
                        >
                            <span>Xin chào, {decodedUser.name}</span>
                            {isDropdownOpen && (
                                <div className="absolute right-0 w-32 bg-white border rounded shadow-lg z-[999] p-[10px] flex flex-col gap-3">
                                    <Link
                                        to={'/profile'}
                                        className="block text-gray-800 hover:bg-gray-200"
                                        onClick={closeDropdown}
                                    >
                                        Profile
                                    </Link>
                                    <p
                                        onClick={() => {
                                            closeDropdown();
                                            navigate('/sign-in');
                                        }}
                                        className="block text-gray-800 cursor-pointer hover:bg-gray-200"
                                    >
                                        Đăng xuất
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to={'/sign-in'}>
                            <i className="fa-regular fa-user"></i>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
