import { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPwd() {
    const [email, setEmail] = useState('');
    return (
        <>
            <div className="">
                <div className="text-center py-6 mb-2">
                    <h1 className="text-3xl capitalize font-medium">
                        Đặt lại mật khẩu của bạn
                    </h1>
                    <p className="font-light px-8 mt-4">
                        Bạn quên mật khẩu? Vui lòng nhập email của bạn và chúng
                        tôi sẽ gửi cho bạn mã gồm 4 chữ số.
                    </p>
                </div>
                <form
                    className="flex flex-col items-center justify-center w-[60%] mx-auto"
                    action=""
                >
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
                            Nhập email của bạn
                        </label>
                    </div>
                    <div className=" bg-black text-white w-[100%] h-10 font-semibold items-center text-center leading-10 rounded-3xl mb-3 mt-6 hover:bg-[#420500] cursor-pointer">
                        <Link className="">
                            <button>Đặt lại mật khẩu</button>
                        </Link>
                    </div>
                </form>
                <div className=" bg-[#e9e9e9] text-black w-[60%] h-10 items-center text-center leading-10 rounded-3xl mb-4 mx-auto">
                    <Link to='/sign-in' className="flex items-center text-center justify-center hover:opacity-85">
                        <i className="fa-solid fa-arrow-left "></i>
                        <button className="ml-2 pb-0.5  font-semibold">
                            {' '}
                            Trở lại Đăng nhập
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <ul className="flex gap-2">
                        <li className="h-7 w-7 border-2 rounded-2xl text-center ">
                            <button>1</button>
                        </li>
                        <li className="h-7 w-7 border-2 rounded-2xl text-center ">
                            <button>1</button>
                        </li>
                        <li className="h-7 w-7 border-2 rounded-2xl text-center ">
                            <button>1</button>
                        </li>
                        <li className="h-7 w-7 border-2 rounded-2xl text-center ">
                            <button>1</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ResetPwd;
