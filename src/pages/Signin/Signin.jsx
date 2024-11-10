import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/authSlice';
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await dispatch(loginUser({ email, password })).unwrap();
            console.log(res);
            toast.success('Đăng nhập thành công!');
            localStorage.setItem('accessToken', res.access_token);
            localStorage.setItem('refreshToken', res.refresh_token);
            navigate('/');
        } catch (error) {
            toast.error(error.message || 'Đăng nhập không thành công!');
        }
    };
    return (
        <>
            <div>
                <div className="text-center py-6">
                    <h1 className="text-3xl capitalize font-medium mb-1">
                        Chào mừng trở lại!
                    </h1>
                    <p className="font-light mt-4">
                        Vui lòng nhập thông tin chi tiết của bạn
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    action="#"
                    className=" flex flex-col items-center justify-center w-[60%] mx-auto"
                >
                    {/* email */}
                    <div className="relative w-[100%] mb-4 mt-6 text-center">
                        <input
                            id="email"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-[100%] focus:border-black focus:outline-none placeholder-transparent peer"
                            type="email"
                            name="email"
                            placeholder=" "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
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
                    {/* password */}
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
                    {/*  */}
                    <div className="flex w-[100%] mb-8 justify-between text-xs ">
                        <label htmlFor="checkbox" className="flex items-center">
                            <input
                                id="checkbox"
                                type="checkbox"
                                className="mr-1 mt-[1px] cursor-pointer"
                            />
                            Remember me
                        </label>
                        <Link
                            to="/ResetPwd"
                            className="text-xs hover:text-[#420500]"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    {/* login */}
                    <div className=" bg-black text-white w-[100%] h-10 font-semibold items-center text-center leading-10 rounded-3xl mb-3 mt-6 hover:bg-[#420500] cursor-pointer">
                        <button type="submit">Đăng nhập</button>
                    </div>
                </form>
                {/*  */}
                <div className=" bg-[#e9e9e9] text-black w-[60%] h-10 items-center text-center leading-10 rounded-3xl mb-4 mx-auto">
                    <Link className="flex items-center text-center justify-center hover:opacity-85">
                        <img
                            className="w-5 h-5"
                            src="/image/google.png"
                            alt=""
                        />
                        <button className="ml-2 font-semibold">
                            {' '}
                            Đăng nhập bằng Google
                        </button>
                    </Link>
                </div>
                <div className="text-center mt-28">
                    <p className="text-xs">
                        Bạn chưa có tài khoản?{' '}
                        <Link
                            className="text-sm font-medium hover:text-[#420500]"
                            to="/sign-up"
                        >
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignIn;
