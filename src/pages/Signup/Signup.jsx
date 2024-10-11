import { Link } from 'react-router-dom';
import { useState } from 'react';
import UserService from '../../service/UserService';
function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setshowPassword] = useState(false);
    const [showPassword1, setshowPassword1] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await UserService.register(formData);
            if (result.status === 'OK') {
                // Xử lý đăng ký thành công
                console.log('Đăng ký thành công:', result);
                // Có thể thêm chuyển hướng: navigate('/login');
            } else {
                setError(result.message);
            }
        } catch (errorMessage) {
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
    };
    const togglePasswordVisibilityConfirm = () => {
        setshowPassword1(!showPassword1);
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
                {error && (
                    <div className="text-red-500 text-center mb-4">{error}</div>
                )}
                <form
                    onSubmit={handleSubmit}
                    action=""
                    className=" flex flex-col items-center w-[60%] mx-auto"
                >
                    <div className="relative w-[100%] mb-4  text-center ">
                        <input
                            id="name"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer "
                            type="text"
                            name="name"
                            placeholder=" "
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="user-name"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                formData.name ||
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                formData.email ||
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
                            value={formData.password}
                            onChange={handleChange}
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
                    <div className="relative w-[100%] mb-4 text-center">
                        <input
                            id="confirmPassword"
                            className="bg-transparent border-b-2 border-gray-400 text-base pb-[2px] pt-4 w-full focus:border-black focus:outline-none placeholder-transparent peer"
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            placeholder=" "
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <label
                            htmlFor="confirmPassword"
                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform origin-left ${
                                formData.confirmPassword
                                    ? 'scale-75 -translate-y-4'
                                    : 'scale-100 translate-y-0'
                            }`}
                        >
                            Xác nhận mật khẩu
                        </label>
                        <button
                            type="button"
                            onClick={togglePasswordVisibilityConfirm}
                            className="absolute right-0 top-3 focus:outline-none"
                        >
                            {showPassword1 ? (
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
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white w-full h-10 font-semibold text-center rounded-3xl mb-3 mt-3 hover:bg-[#420500] cursor-pointer disabled:opacity-50"
                    >
                        {loading ? 'Đang xử lý...' : 'Đăng ký'}
                    </button>
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
