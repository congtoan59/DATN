import { Link } from 'react-router-dom';
import { useState } from 'react';
function SignUp() {
    const [lastName, setlastName] = useState('');
    const [firstName, setfirstName] = useState('');
    const [userName, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    };
    return (
        <>
            <div>
                <div className="text-center py-6">
                    <h1 className="text-3xl capitalize font-medium mb-1">
                        Chào mừng trở lại!
                    </h1>
                    <p className="font-light mt-4">
                        {' '}
                        Vui lòng nhập thông tin chi tiết của bạn
                    </p>
                </div>

                <form
                    action=""
                    className=" flex flex-col items-center w-[60%] mx-auto"
                >
                    <div className="flex w-[100%] justify-between gap-2.5">
                        <div className="relative flex-[0_0_45%] mb-4">
                            <input
                                id="last-name"
                                className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer focus:bg-white"
                                type="text"
                                name="lastName"
                                placeholder=" "
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="last-name"
                                className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                    lastName ||
                                    document.activeElement ===
                                        document.getElementById('last-name')
                                        ? 'scale-75 -translate-y-4'
                                        : 'scale-100 translate-y-0'
                                }`}
                            >
                                Họ
                            </label>
                        </div>
                        <div className="relative flex-[0_0_45%] mb-4 text-center">
                            <input
                                id="first-name"
                                className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer"
                                type="text"
                                name="firstName"
                                placeholder=" "
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                                required
                            />
                            <label
                                htmlFor="first-name"
                                className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                    firstName ||
                                    document.activeElement ===
                                        document.getElementById('first-name')
                                        ? 'scale-75 -translate-y-4'
                                        : 'scale-100 translate-y-0'
                                }`}
                            >
                                Tên
                            </label>
                        </div>
                    </div>
                    <div className="relative w-[100%] mb-4  text-center ">
                        <input
                            id="user-name"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer "
                            type="text"
                            name="userName"
                            placeholder=" "
                            value={userName}
                            onChange={(e) => setuserName(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="user-name"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                userName ||
                                document.activeElement ===
                                    document.getElementById('user-name')
                                    ? 'scale-75 -translate-y-4'
                                    : 'scale-100 translate-y-0'
                            }`}
                        >
                            Tên người dùng
                        </label>
                    </div>
                    <div className="relative w-[100%] mb-4  text-center">
                        <input
                            id="email"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer "
                            type="email"
                            name="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                email ||
                                document.activeElement ===
                                    document.getElementById('email')
                                    ? 'scale-75 -translate-y-4'
                                    : 'scale-100 translate-y-0'
                            }`}
                        >
                            Email
                        </label>
                    </div>
                    <div className="relative w-[100%] mb-4  text-center">
                        <input
                            id="password"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder=" "
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-0 top-2 text-black transition-all duration-300 transform scale-100 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
                        >
                            Mật khẩu
                        </label>
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-0 top-3 focus:outline-none"
                        >
                            {showPassword ? (
                                <i className="fa-solid fa-eye"></i>
                            ) : (
                                <i className="fa-solid fa-eye-slash"></i>
                            )}
                        </button>
                    </div>
                    <div className="flex w-[100%] mb-6 justify-between text-xs ">
                        <label htmlFor="checkbox" className="flex items-center">
                            <input
                                id="checkbox"
                                type="checkbox"
                                className="mr-1 mt-[1px] cursor-pointer"
                            />
                            Remember me
                        </label>
                    </div>
                    <div className=" bg-black text-white w-[100%] h-10 font-semibold items-center text-center leading-10 rounded-3xl mb-3 mt-3 hover:bg-[#420500] cursor-pointer">
                        <button>Đăng ký</button>
                    </div>
                </form>

                <div className=" bg-[#e9e9e9] text-black w-[60%] h-10 items-center text-center leading-10 rounded-3xl mb-4 mx-auto">
                    <Link className="flex items-center text-center justify-center hover:opacity-85">
                        <img
                            className="w-5 h-5"
                            src="/image/google.png"
                            alt=""
                        />
                        <button className="ml-2 font-semibold">
                            {' '}
                            Đăng ký bằng Google
                        </button>
                    </Link>
                </div>
                <div className="text-center mt-9">
                    <p className="text-xs">
                        Bạn đã có tài khoản?{' '}
                        <Link
                            className="text-sm font-medium hover:text-[#420500]"
                            to="/Sign-in"
                        >
                            Đăng nhập
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;