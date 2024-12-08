import { Link } from 'react-router-dom';
import Logo from '../../../public/image/LogoAll/LogoAdmin.png';
import Navigate from '../../component/navigate/Navigate';
import { useEffect, useState } from 'react';
import {
    OverView,
    Staff,
    Member,
    Setting,
    Trash,
    Web,
    CartIcon,
    CartFollow,
    AddProduct,
    ListProduct,
    AddCate,
    ListCate,
    Chart,
    SearchIcon,
    Bell,
    DropDown,
} from '../../component/icons';
function AdminLayout({ children }) {
    const [userName, setUserName] = useState(null);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserName(JSON.parse(storedUser).name);
            setRole(JSON.parse(storedUser).role);
            setLoading(false);
        } else {
            setLoading(true);
        }
    }, []);
    return (
        <div className="flex h-screen w-screen">
            <div className="w-[25%] flex-col flex items-center justify-start px-2 bg-[#fafafa] min-w-[320px]">
                <Link className="w-full flex-[0_0_10%] flex justify-center items-center">
                    <img className="w-[130px] mx-auto" src={Logo} alt="" />
                </Link>
                <div className="pt-[20px] flex-[0_0_80%] w-full flex justify-start flex-col items-center overflow-y-auto customScroll">
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            ADMIN
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate to={'/system/admin/'} title={'Tổng quan'}>
                                <OverView className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Tài khoản
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate
                                to={'/system/admin/user'}
                                title={'Người dùng'}
                            >
                                <Member className="!text-[25px]" />
                            </Navigate>
                            <Navigate title={'Nhân viên'}>
                                <Staff className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Sản phẩm
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate
                                to={'/system/admin/products'}
                                title={'Danh sách sản phẩm'}
                            >
                                <ListProduct className="!text-[25px]" />
                            </Navigate>
                            <Navigate
                                to={'/system/admin/products/add-product'}
                                title={'Thêm sản phẩm'}
                            >
                                <AddProduct className="!text-[25px]" />
                            </Navigate>
                            <Navigate
                                to={'/system/admin/products/trash-product'}
                                title={'Thùng rác'}
                            >
                                <Trash className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Danh mục
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate
                                to={'/system/admin/category'}
                                title={'Danh sách danh mục'}
                            >
                                <ListCate className="!text-[25px]" />
                            </Navigate>
                            <Navigate
                                to={'/system/admin/category/add-category'}
                                title={'Thêm danh mục'}
                            >
                                <AddCate className="!text-[25px]" />
                            </Navigate>
                            <Navigate
                                to={'/system/admin/category/trash-category'}
                                title={'Thùng rác '}
                            >
                                <Trash className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Đặt hàng
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate
                                to={'/system/admin/order'}
                                title={'Lượt xem đơn hàng'}
                            >
                                <OverView className="!text-[25px]" />
                            </Navigate>
                            <Navigate title={'Theo dõi đơn hàng'}>
                                <CartFollow className="!text-[25px]" />
                            </Navigate>
                            <Navigate title={'Quản lý đơn hàng'}>
                                <CartIcon className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Biểu đồ
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate title={'Biểu đồ xem'}>
                                <Chart className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                    <div className="w-full px-5 mb-7 pb-5 border-b-[1.5px] border-[#e3e6e8]">
                        <h1 className="uppercase font-semibold text-black text-[14px] mb-7">
                            Lập trình viên
                        </h1>
                        <div className="flex flex-col gap-7">
                            <Navigate title={'Quản lý trang web'}>
                                <Web className="!text-[25px]" />
                            </Navigate>
                            <Navigate title={'Cài đặt'}>
                                <Setting className="!text-[25px]" />
                            </Navigate>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className=" h-[10%] w-full border-b-[1px] border-[#ebecef] p-2 px-8 flex justify-between items-center">
                    <div className="relative w-[20%]">
                        <input
                            className="border border-[#a6a5a5] rounded-md p-3 pr-2 pl-11 text-[13px] text-[#7a7979] size-full"
                            placeholder="Search"
                            type="text"
                        />
                        <SearchIcon className="absolute left-0 top-0 translate-y-[50%] translate-x-[50%]" />
                    </div>
                    <div className="relative w-fit flex items-center gap-4">
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <Bell className="!text-[25px]" />
                                <div className="bg-blue-500 absolute top-0 right-0 size-[10px] rounded-full translate-y-[-80%] translate-x-[60%]"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-medium text-[14px]">
                                    EN
                                </div>
                                <DropDown className="text-[18px]" />
                            </div>
                        </div>
                        <div className="h-[30px] w-[1px] bg-[#ebecef] "></div>
                        <div className="flex items-center gap-5">
                            <div className="flex flex-col text-[13px] gap-2">
                                <h1 className="font-semibold">{userName}</h1>
                                <p className="font-medium capitalize text-gray-400 text-end text-[10px]">
                                    {role}
                                </p>
                            </div>
                            <div className="h-full">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
                                    className="size-[50px] object-cover rounded-full "
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[90%] overflow-y-scroll customScroll pt-[20px]">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
