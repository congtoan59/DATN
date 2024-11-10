import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <>
            <div className="bg-black text-white py-10 ">
                <div className="flex justify-around">
                    <div>
                        <div>
                            <img
                                src="https://bizweb.dktcdn.net/100/446/974/themes/849897/assets/logo_footer.png?1725442106829"
                                alt=""
                            />
                        </div>
                        <ul className="space-y-4 pt-8">
                            <li>
                                <div className="flex gap-4 items-center">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <span>137 Nguyễn Thị Thập - Đà Nẵng</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-4 items-center hover:text-[#660000]  hover:cursor-pointer">
                                    <i className="fa-solid fa-phone"></i>
                                    <span className="tracking-wider">
                                        +84899862803
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-4 items-center hover:text-[#660000] hover:cursor-pointer ">
                                    <i className="fa-solid fa-headphones-simple"></i>
                                    <span className="tracking-wider">
                                        Zalo Business: +84899862803
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="flex gap-4 items-center">
                                    <i className="fa-regular fa-clock"></i>
                                    <span className="tracking-wider">
                                        Giờ làm việc: 8:00am - 10:00pm
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex justify-center gap-4 pt-12">
                        <div>
                            <h3 className="font-bold text-lg mb-4 uppercase">
                                Hỗ Trợ
                            </h3>
                            <ul className="space-y-4">
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Tìm kiếm sản phẩm</span>
                                </li>
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Giỏ hàng</span>
                                </li>
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Kiểm tra tình trạng đơn hàng </span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-lg mb-4 uppercase">
                                Chính Sách MLB
                            </h3>
                            <ul className="space-y-4">
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Chính sách đổi trả</span>
                                </li>
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Chính sách bảo mật</span>
                                </li>
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Chính sách vận chuyển</span>
                                </li>
                                <li className="hover:text-[#660000]  hover:cursor-pointer">
                                    <span>Quy định sử dụng</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[30%]">
                            <ul className="font-bold uppercase ">
                                <li>
                                    <NavLink>MLB Việt Nam</NavLink>{' '}
                                    <span> hân hạnh được phục vụ</span>
                                </li>
                                <li>
                                    <span> GOLDEN MANSION Building</span>
                                </li>
                                <li>
                                    <span> CEO : Truong Cong Toan</span>
                                </li>
                                <li>
                                    <span>
                                        {' '}
                                        Business Registration : 150-41-60423
                                    </span>
                                </li>
                                <li>
                                    <span> E-Commerce Permit : 2021-29489</span>
                                </li>
                                <li>
                                    <span>
                                        {' '}
                                        Personal Infor Manager : LE THANH NGHIEM
                                    </span>
                                </li>
                                <li className="flex gap-4 text-xl pt-2">
                                    <div className="bg-[#660000] w-10 h-10 flex items-center justify-center rounded-lg hover:cursor-pointer hover:text-[#660000] hover:bg-white">
                                        <i className="fa-brands fa-youtube"></i>
                                    </div>
                                    <div className="bg-[#660000] w-10 h-10 flex items-center justify-center rounded-lg hover:cursor-pointer hover:text-[#660000] hover:bg-white">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </div>
                                    <div className="bg-[#660000] w-10 h-10 flex items-center justify-center rounded-lg hover:cursor-pointer hover:text-[#660000] hover:bg-white">
                                        <i className="fa-brands fa-instagram"></i>
                                    </div>
                                </li>
                                <li className='pt-4'>
                                    <div>
                                        <span className='text-[0.9rem]'>Đăng Ký để nhận thông tin</span>
                                    </div>
                                    <div className='flex'>
                                        <input type="text" placeholder='Nhập địa chỉ Email'
                                        className='w-full p-2 border  focus:outline-none focus:ring-1 focus:ring-black' />
                                        <button className='bg-[#660000] text-white px-4 py-2  hover:bg-red-700'>Gửi</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-center text-[0.9rem] border-t border-t-white border-opacity-50 mt-4 pt-4 w-[70%] flex justify-center mx-auto'>
                    <span>@ Bản quyền thuộc về DATN - FPOLY | Cung cấp bởi DATN WEB</span>
                </div>
            </div>
        </>
    );
}

export default Footer;
