import { useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { ArrowRight } from '../../../../component/icons';
import InputAddAdmin from '../../../../component/input/InputAddAdmin';

const AddVoucher = () => {
    const [formData, setFormData] = useState({
        code: '',
        discountType: 'percentage', // default value
        discountValue: '',
        minOrderValue: '',
        maxDiscountAmount: '',
        validTo: '',
        maxClaim: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Voucher Data Submitted:', formData);
        // Handle form submission logic here
    };

    return (
        <>
            <div className="">
                <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                    <div className="text-[#3874ff] font-bold flex items-center justify-start gap-1 text-[15px] mb-6 mt-2">
                        <span className="hover:underline cursor-pointer">
                            Quản lý
                        </span>
                        <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                        <span className="hover:underline cursor-pointer">
                            Voucher
                        </span>
                        <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                        <span className="hover:underline cursor-pointer">
                            Thêm voucher
                        </span>
                    </div>
                    <div className="mb-2 flex justify-between items-center w-full">
                        <div>
                            <h1 className="font-bold text-[30px] text-[#141824] leading-[3rem]">
                                Thêm voucher
                            </h1>
                        </div>
                        <div className="flex gap-5">
                            <button
                                type="button"
                                className="border-custom px-5 py-3 bg-white rounded-lg text-primaryAdmin font-bold hover:bg-[#e3e6ed] transition-all duration-300 text-[15px]"
                            >
                                Danh sách voucher
                            </button>
                            <button
                                type="button"
                                className="border-custom px-5 py-3 bg-white rounded-lg text-primaryAdmin font-bold hover:bg-[#e3e6ed] transition-all duration-300 text-[15px]"
                            >
                                Xóa
                            </button>
                            <button
                                type="submit"
                                className="px-5 py-3 bg-[#3874ff] rounded-lg text-white font-bold hover:opacity-75 transition-all duration-300 text-[15px]"
                            >
                                Xuất voucher
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-3xl bg-gray-200 mx-auto p-6  shadow-md rounded-lg mt-8">
                    <form onSubmit={handleSubmit}>
                        {/* Mã Voucher */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={'Mã Voucher'}
                                    name="code"
                                    placeholder={'Nhập mã voucher ...'}
                                    value={formData.code}
                                    require
                                />
                            </div>

                            {/* Loại Giảm Giá */}

                            {/* Giá Trị Giảm Giá */}
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={' Giá Trị Giảm Giá'}
                                    name="discountValue"
                                    placeholder={'VD: 20%'}
                                    value={formData.discountValue}
                                    type="number"
                                    min="1"
                                    require
                                />
                            </div>

                            {/* Giá Trị Đơn Hàng Tối Thiểu */}
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={' Giá Trị Đơn Hàng Tối Thiểu'}
                                    name="minOrderValue"
                                    placeholder={'VD: 500000'}
                                    value={formData.minOrderValue}
                                    type="number"
                                    min="1"
                                    require
                                />
                            </div>

                            {/* Giảm Giá Tối Đa */}
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={' Giá Trị Giảm Giá Tối Đa'}
                                    name="maxDiscountAmount"
                                    placeholder={'VD: 1000000'}
                                    value={formData.maxDiscountAmount}
                                    type="number"
                                    min="1"
                                    require
                                />
                            </div>

                            {/* Ngày Hết Hạn */}
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={' Ngày Hết Hạn'}
                                    name="validTo"
                                    placeholder={'VD: 2024-12-31'}
                                    value={formData.validTo}
                                    require
                                />
                            </div>

                            {/* Số Lượng Tối Đa */}
                            <div>
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={' Số Lượng Tối Đa'}
                                    name="maxClaim"
                                    placeholder={'VD: 100'}
                                    value={formData.maxClaim}
                                    type="number"
                                    min="1"
                                    require
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="discountType"
                                className="font-bold text-primaryAdmin text-[16px] "
                            >
                                Loại Giảm Giá
                            </label>
                            <select
                                id="discountType"
                                name="discountType"
                                value={formData.discountType}
                                onChange={handleInputChange}
                                className="mt-2 border-solid border-2 border-gray-300 bg-white px-4 py-3 text-[14px] text-primaryAdmin placeholder:font-semibold font-semibold rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                            >
                                <option value="percentage">Phần Trăm</option>
                                <option value="fixed">Số Tiền Cố Định</option>
                            </select>
                        </div>
                        {/* Nút Thêm Voucher */}
                        <div className="md:col-span-2 flex mt-20 justify-center items-center">
                            <button
                                type="submit"
                                className="w-[25%] py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
                            >
                                Thêm Voucher
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddVoucher;
