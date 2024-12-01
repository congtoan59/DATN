import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../http/api';
import { ArrowRight } from '../../../../component/icons';
import { toast } from 'react-toastify';
import * as CategoryService from '../../../../service/CategoryService';
import ButtonEditProduct from '../../../../component/button/ButtonEditProduct';

function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [category, setCategory] = useState({
        name: '',
        description: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCategory();
    }, [id]);

    // Fetch category data by ID
    const fetchCategory = async () => {
        try {
            const res = await api.get(`/category/detail/${id}`);
            setCategory(res.data || {}); // Avoid null or undefined
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                    'Không thể tải thông tin danh mục, vui lòng thử lại.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await CategoryService.updateCategory(id, category);
            toast.success('Cập nhật danh mục thành công!');
            navigate('/system/admin/category');
        } catch (err) {
            toast.error(
                err.response?.data?.message || 'Cập nhật danh mục thất bại.',
            );
        }
    };

    if (loading) {
        return <div>Đang tải dữ liệu...</div>;
    }

    return (
        <div className="edit-category">
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
                <span>Sửa danh mục</span>
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 rounded-lg"
            >
                <div>
                    <h1 className="font-bold text-[32px] text-[#141824] leading-[3rem]">
                        Sửa danh mục
                    </h1>
                </div>
                <div>
                    <ButtonEditProduct
                        label="Tên danh mục"
                        type="text"
                        id="name"
                        name="name"
                        value={category.name || ''}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        className="font-bold text-gray-700 text-[18px] mb-2"
                        htmlFor="description"
                    >
                        Mô tả:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={category.description || ''}
                        onChange={handleInputChange}
                        required
                        className="border border-gray-300 px-4 py-3 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-200"
                    />
                </div>

                <button
                    type="submit"
                    className=" lg:w-[20%] mx-auto px-1 py-3 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-500 transition-all duration-300 text-[16px] shadow-md"
                >
                    Sửa danh mục
                </button>
            </form>
        </div>
    );
}

export default EditCategory;
