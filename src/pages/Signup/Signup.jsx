import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
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
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
                <div className="flex flex-col items-center justify-center  w-[95%] flex-1 px-20 ">
                    <div className="  flex px-8">
                        <div className="flex-[0_0_60%] ">
                            <img
                                className="h-full w-full rounded-l-2xl"
                                src="https://cdn.dribbble.com/userupload/8432950/file/original-0c14504bd291054d76548cb015dff89a.png?resize=1200x900&vertical=center"
                                alt="Image 1"
                            />
                        </div>
                        <div className="relative flex-[0_0_40%] bg-[#e9e9e9] rounded-r-2xl">
                            <div className="absolute top-3 left-3 bg-white h-[95%] w-[95%] rounded-2xl shadow-sm">
                                <div className="text-center py-6">
                                    <h1 className="text-3xl capitalize font-medium">
                                        Create your account
                                    </h1>
                                    <p className="font-light">
                                        Please enter your detail
                                    </p>
                                </div>
                                <form
                                    action=""
                                    className=" flex flex-col items-center"
                                >
                                    <div className="flex">
                                        {/* lastName */}
                                        <div className="relative mb-3 mx-2.5">
                                            <input
                                                id="last-name"
                                                className="bg-transparent border-b border-black text-base pb-[2px] pt-4 w-[130px] focus:border-b-2 focus:outline-none placeholder-transparent peer focus:bg-white"
                                                type="text"
                                                name="lastName"
                                                placeholder=" "
                                                value={lastName}
                                                onChange={(e) =>
                                                    setlastName(e.target.value)
                                                }
                                                required
                                            />
                                            <label
                                                htmlFor="last-name"
                                                className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                                    lastName ||
                                                    document.activeElement ===
                                                        document.getElementById(
                                                            'last-name',
                                                        )
                                                        ? 'scale-75 -translate-y-4'
                                                        : 'scale-100 translate-y-0'
                                                }`}
                                            >
                                                Last Name
                                            </label>
                                        </div>
                                        {/* firstName */}
                                        <div className="relative mb-3 mx-2.5">
                                            <input
                                                id="first-name"
                                                className="bg-transparent border-b border-black text-base pb-[2px] pt-4 w-[130px] focus:border-b-2 focus:outline-none placeholder-transparent peer "
                                                type="text"
                                                name="firstName"
                                                placeholder=" "
                                                value={firstName}
                                                onChange={(e) =>
                                                    setfirstName(e.target.value)
                                                }
                                                required
                                            />
                                            <label
                                                htmlFor="first-name"
                                                className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                                    firstName ||
                                                    document.activeElement ===
                                                        document.getElementById(
                                                            'first-name',
                                                        )
                                                        ? 'scale-75 -translate-y-4'
                                                        : 'scale-100 translate-y-0'
                                                }`}
                                            >
                                                First Name
                                            </label>
                                        </div>
                                    </div>
                                    {/* userName */}
                                    <div className="relative mb-3 ">
                                        <input
                                            id="user-name"
                                            className="bg-transparent border-b border-black text-base pb-[2px] pt-4 w-[280px] focus:border-b-2 focus:outline-none placeholder-transparent peer "
                                            type="text"
                                            name="userName"
                                            placeholder=" "
                                            value={userName}
                                            onChange={(e) =>
                                                setuserName(e.target.value)
                                            }
                                            required
                                        />
                                        <label
                                            htmlFor="user-name"
                                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                                userName ||
                                                document.activeElement ===
                                                    document.getElementById(
                                                        'user-name',
                                                    )
                                                    ? 'scale-75 -translate-y-4'
                                                    : 'scale-100 translate-y-0'
                                            }`}
                                        >
                                            User Name
                                        </label>
                                    </div>
                                    {/* email */}
                                    <div className="relative mb-3">
                                        <input
                                            id="email"
                                            className="bg-transparent border-b border-black text-base pb-[2px] pt-4 w-[280px] focus:border-b-2 focus:outline-none placeholder-transparent peer "
                                            type="email"
                                            name="email"
                                            placeholder=" "
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`absolute left-0 top-2 text-black transition-all duration-300 transform  origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4  ${
                                                email ||
                                                document.activeElement ===
                                                    document.getElementById(
                                                        'email',
                                                    )
                                                    ? 'scale-75 -translate-y-4'
                                                    : 'scale-100 translate-y-0'
                                            }`}
                                        >
                                            Email
                                        </label>
                                    </div>
                                    {/* password */}
                                    <div className="relative mb-3">
                                        <input
                                            id="password"
                                            className="bg-transparent border-b border-black text-base pb-[2px] pt-4 w-[280px] focus:border-b-2 focus:outline-none placeholder-transparent peer"
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            name="password"
                                            placeholder=" "
                                            required
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 top-2 text-black transition-all duration-300 transform scale-100 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-valid:scale-75 peer-valid:-translate-y-4"
                                        >
                                            Password
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
                                    <div className="flex w-[280px] mb-5 justify-between text-xs ">
                                        <label
                                            htmlFor=""
                                            className="flex items-center"
                                        >
                                            <input
                                                type="checkbox"
                                                className="mr-1 mt-[1px] cursor-pointer"
                                            />
                                            Remember me
                                        </label>
                                    </div>
                                    {/* login */}
                                    <div className=" bg-black text-white w-[280px] h-10 font-semibold items-center text-center leading-10 rounded-3xl mb-2 mt-3 hover:opacity-75 cursor-pointer">
                                        <Link className="">
                                            <button>Sign up</button>
                                        </Link> 
                                    </div>
                                    <div className=" bg-[#e9e9e9] text-black w-[280px] h-10 items-center text-center leading-10 rounded-3xl mb-4">
                                        <Link className="flex items-center text-center justify-center hover:opacity-85">
                                            <img
                                                className="w-5 h-5"
                                                src="/image/google.png"
                                                alt=""
                                            />
                                            <button className="ml-2 font-semibold">
                                                {' '}
                                                Sign up with Google
                                            </button>
                                        </Link>
                                    </div>
                                    {/*  */}
                                    <div className="">
                                        <p className="text-xs">
                                            Already have an Account?{' '}
                                            <Link
                                                className="text-sm font-medium hover:opacity-75"
                                                to="/login"
                                            >
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
