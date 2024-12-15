import { useState } from 'react';
import { Edit, Delete } from '@mui/icons-material'; // Import Material UI icons
import { Link } from 'react-router-dom';
import Logo from '../../../../../public/image/LogoAll/LogoAdmin.png';

import 'react-confirm-alert/src/react-confirm-alert.css';
import { ArrowRight, SearchIcon, DocDown } from '../../../../component/icons';
const ListVoucher = () => {
    const [vouchers, setVouchers] = useState([
        {
            code: 'SAVE',
            discountType: 'fixed',
            discountValue: 20,
            minOrderValue: 500000,
            maxDiscountAmount: 10000000,
            validTo: '2024-12-31',
            maxClaim: 100,
        },
        {
            code: 'NEWYEAR',
            discountType: 'fixed',
            discountValue: 50,
            minOrderValue: 200000,
            maxDiscountAmount: 500000,
            validTo: '2024-01-31',
            maxClaim: 50,
        },
        {
            code: 'SUMMER',
            discountType: 'fixed',
            discountValue: 15,
            minOrderValue: 300,
            maxDiscountAmount: 700000,
            validTo: '2024-06-30',
            maxClaim: 80,
        },
        {
            code: 'WINTER',
            discountType: 'fixed',
            discountValue: 100,
            minOrderValue: 400000,
            maxDiscountAmount: 800000,
            validTo: '2024-12-15',
            maxClaim: 60,
        },
        {
            code: 'BLACKFRI',
            discountType: 'fixed',
            discountValue: 50,
            minOrderValue: 1000000,
            maxDiscountAmount: 2000000,
            validTo: '2024-11-30',
            maxClaim: 30,
        },
        {
            code: 'FREESHIP',
            discountType: 'fixed',
            discountValue: 30,
            minOrderValue: 150000,
            maxDiscountAmount: 300000,
            validTo: '2024-03-31',
            maxClaim: 120,
        },
    ]);

    // Handle edit
    const handleEdit = (index) => {
        const updatedCode = prompt('Edit Code:', vouchers[index].code);
        if (updatedCode !== null && updatedCode.trim() !== '') {
            const updatedVouchers = [...vouchers];
            updatedVouchers[index].code = updatedCode;
            setVouchers(updatedVouchers);
        }
    };

    // Handle delete
    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this voucher?')) {
            const updatedVouchers = vouchers.filter((_, i) => i !== index);
            setVouchers(updatedVouchers);
        }
    };

    return (
        <>
            <div className="p-4 border-b border-gray-300 pb-7">
                <div className="text-[#3874ff] font-bold flex items-center justify-start gap-1 text-[15px] mb-6">
                    <span className="hover:underline cursor-pointer">
                        Quản lý
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Voucher
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Danh sách voucher
                    </span>
                </div>
                <div className="text-[40px] font-bold tracking-wider mb-8">
                    Voucher
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-8">
                        <Link className="font-bold hover:underline text-[#3874ff]">
                            Tất cả{' '}
                            <span className="text-[#525b75] font-medium ml-1">
                                (68817)
                            </span>
                        </Link>
                        <Link className="font-bold hover:underline text-[#3874ff]">
                            Đã xuất bản{' '}
                            <span className="text-[#525b75] font-medium ml-1">
                                (70348)
                            </span>
                        </Link>
                        <Link className="font-bold hover:underline text-[#3874ff]">
                            Nháp{' '}
                            <span className="text-[#525b75] font-medium ml-1">
                                (17)
                            </span>
                        </Link>
                        <Link className="font-bold hover:underline text-[#3874ff]">
                            Giảm giá{' '}
                            <span className="text-[#525b75] font-medium ml-1">
                                (810)
                            </span>
                        </Link>
                    </div>
                    <div className="flex gap-12 ">
                        <div className="relative w-[30%]">
                            <input
                                className="border border-[#a6a5a5] rounded-md p-3 pr-2 pl-11 text-[13px] text-[#7a7979] size-full"
                                placeholder="Search"
                                type="text"
                            />
                            <SearchIcon className="absolute left-0 top-0 translate-y-[50%] translate-x-[50%]" />
                        </div>

                        <div className="flex gap-3 items-center ">
                            <select
                                className="flex h-[44px] w-[150px] px-3 justify-center items-center border-custom rounded-md font-bold text-primaryAdmin cursor-pointer hover:bg-[#e3e6ed]"
                                name=""
                                id=""
                            >
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                            </select>
                            <select
                                className="flex h-[44px] w-[150px] px-3 justify-center items-center border-custom rounded-md font-bold text-primaryAdmin cursor-pointer hover:bg-[#e3e6ed]"
                                name=""
                                id=""
                            >
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                            </select>
                            <select
                                className="flex h-[44px] w-[150px] px-3 justify-center items-center border-custom rounded-md font-bold text-primaryAdmin cursor-pointer hover:bg-[#e3e6ed]"
                                name=""
                                id=""
                            >
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                                <option value="">OutSide</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="flex gap-2 hover:underline cursor-pointer">
                                <DocDown />
                                <button className="font-bold text-primaryAdmin ">
                                    Export
                                </button>
                            </div>
                            <div>
                                <Link
                                    to={'/system/admin/add-voucher'}
                                    className="font-bold px-1 py-3 text-white bg-[#004cffb8] h-[44px] rounded-lg hover:bg-[#004dff]"
                                >
                                    Thêm voucher
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
                    {vouchers.map((voucher, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-2xl p-2"
                        >
                            <div className="flex">
                                {/* Logo and Code */}
                                <div className="w-1/3 border-r border-gray-200 flex flex-col items-center">
                                    <img
                                        src={Logo}
                                        alt=""
                                        className="w-22 h-14 mb-3 rounded-full shadow-md"
                                    />
                                    <span className="border border-green-500 px-2 rounded-full text-green-600 font-bold hover:bg-green-500 hover:text-white cursor-pointer transition-all">
                                        {voucher.code}
                                    </span>
                                    <div className="flex mt-2 ">
                                        <h1 className="text-lg font-semibold text-indigo-600">
                                            {voucher.discountValue}%
                                            <span className="mx-2">OFF</span>
                                        </h1>
                                    </div>
                                </div>

                                {/* Discount Info */}
                                <div className="w-2/3 pl-4 flex flex-col justify-between">
                                    <div>
                                        <p>
                                            <span className="font-semibold text-base">
                                                Giảm tối đa:
                                            </span>{' '}
                                            {voucher.maxDiscountAmount.toLocaleString()}{' '}
                                            VNĐ
                                        </p>
                                    </div>

                                    <div className="mt-2 text-xs text-gray-600 space-y-2">
                                        <p>
                                            <span className="font-bold">
                                                Đơn tối thiểu:
                                            </span>{' '}
                                            {voucher.minOrderValue.toLocaleString()}{' '}
                                            VNĐ
                                        </p>
                                        <p>
                                            <span className="font-bold">
                                                HSD:
                                            </span>{' '}
                                            {voucher.validTo}
                                        </p>
                                        <p>
                                            <span className="font-bold">
                                                Số lần tối đa:
                                            </span>{' '}
                                            {voucher.maxClaim}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-4 flex justify-end space-x-2 border-t-2">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="mt-2 text-blue-500 py-1 px-2 rounded hover:bg-blue-100"
                                >
                                    <Edit />
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="mt-2 text-red-500 py-1 px-2 rounded hover:bg-red-100"
                                >
                                    <Delete />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ListVoucher;
