import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as CategoryService from '../../../../service/CategoryService'; // Import CategoryService
import { ArrowRight } from '../../../../component/icons';
import InputAddAdmin from '../../../../component/input/InputAddAdmin';

const AddCategory = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    // Xử lý thay đổi input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Gửi form để thêm danh mục
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) {
            toast.error('Vui lòng nhập tên danh mục');
            return;
        }
        setIsLoading(true);
        try {
            const response = await CategoryService.createCategory(formData); // Gọi API thêm danh mục
            if (response.status === 'OK') {
                toast.success('Thêm danh mục thành công');
                navigate('/system/admin/category'); // Điều hướng về danh sách danh mục
            } else {
                toast.error(response.message || 'Có lỗi xảy ra');
            }
        } catch (error) {
            console.error('Error adding category:', error);
            toast.error('Có lỗi xảy ra khi thêm danh mục');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 pb-7">
            {/* Đường dẫn */}
            <div className="text-[#3874ff] font-bold flex items-center justify-start gap-1 text-[15px] mb-6 mt-2">
                <span
                    className="hover:underline cursor-pointer"
                    onClick={() => navigate('/system/admin')}
                >
                    Quản lý
                </span>
                <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                <span
                    className="hover:underline cursor-pointer"
                    onClick={() => navigate('/system/admin/category')}
                >
                    Danh mục
                </span>
                <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                <span>Thêm danh mục</span>
            </div>

            {/* Tiêu đề */}
            <div className="mb-[60px] flex justify-between items-center w-full">
                <div>
                    <h1 className="font-bold text-[32px] text-[#141824] leading-[3rem]">
                        Thêm danh mục
                    </h1>
                </div>
                <div className="flex gap-5">
                    <button
                        onClick={navigate}
                        type="button"
                        className="border-custom px-5 py-3 bg-white rounded-lg text-primaryAdmin font-bold hover:bg-[#e3e6ed] transition-all duration-300 text-[15px]"
                    >
                        Danh sách danh mục
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
                        Xuất danh mục
                    </button>
                </div>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit}
                className=" flex flex-col gap-4 p-6 rounded-lg "
            >
                {/* Tên danh mục */}
                <InputAddAdmin
                    onChange={handleInputChange}
                    label="Tên danh mục"
                    name="name"
                    placeholder="Nhập tên danh mục..."
                    value={formData.name}
                    require
                />

                {/* Mô tả danh mục */}
                <div className="flex flex-col">
                    <label
                        className="font-bold text-gray-700 text-[18px] mb-2"
                        htmlFor="description"
                    >
                        Mô tả danh mục
                    </label>
                    <textarea
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        name="description"
                        id="description"
                        className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                        placeholder="Nhập mô tả danh mục..."
                        rows="4"
                    ></textarea>
                </div>

                {/* Nút thêm danh mục */}
                <button
                    type="submit"
                    className=" lg:w-[20%] mx-auto px-1 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-500 transition-all duration-300 text-[16px] shadow-md"
                >
                    Thêm danh mục
                </button>
            </form>
        </div>
    );
};

export default AddCategory;
