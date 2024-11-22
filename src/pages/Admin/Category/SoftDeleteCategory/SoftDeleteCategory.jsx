import { useState, useEffect } from 'react';
import * as CategoryService from '../../../../service/CategoryService';
import api from '../../../../http/api';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { formatDateTime } from '../../../../http/api';
import { ArrowRight, Delete, Restart } from '../../../../component/icons';

function SoftDeleteCategory() {
    const [deletedCategories, setDeletedCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDeletedCategories();
    }, []);

    const fetchDeletedCategories = async () => {
        try {
            const res = await api.get('/category/deleted');
            console.log(res.data);

            setDeletedCategories(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Lỗi khi tải danh mục đã xóa:', err);
            setError(err.message);
            setLoading(false);
        }
    };

    const handleRestore = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <>
                    <div className="confirm-overlay" />
                    <div className="custom-confirm-dialog flex flex-col gap-4">
                        <h1 className="font-bold text-green-700 text-[18px] tracking-wider">
                            Xác nhận khôi phục
                        </h1>
                        <p>Bạn có chắc muốn khôi phục danh mục này?</p>
                        <div className="flex justify-between">
                            <button
                                className="confirm-buttonRestore font-bold"
                                onClick={async () => {
                                    try {
                                        await CategoryService.restoreCategory(
                                            id,
                                        );
                                        toast.success(
                                            'Khôi phục danh mục thành công!',
                                        );
                                        fetchDeletedCategories();
                                    } catch (error) {
                                        toast.error(
                                            'Khôi phục danh mục thất bại!!!',
                                        );
                                        console.error(
                                            'Lỗi khi khôi phục danh mục:',
                                            error,
                                        );
                                    }
                                    onClose();
                                }}
                            >
                                Có
                            </button>
                            <button
                                onClick={onClose}
                                className="mr-2 font-bold"
                            >
                                Không
                            </button>
                        </div>
                    </div>
                </>
            ),
        });
    };

    const handleDelete = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => (
                <>
                    <div className="confirm-overlay" />
                    <div className="custom-confirm-dialog flex flex-col gap-4 ">
                        <h1 className="font-bold text-red-700 text-[18px] tracking-wider">
                            Xác nhận xóa
                        </h1>
                        <p>Bạn có chắc muốn xóa danh mục này?</p>
                        <div className="flex justify-between">
                            <button
                                className="confirm-button font-bold"
                                onClick={async () => {
                                    try {
                                        await CategoryService.deleteCategory(
                                            id,
                                        );
                                        toast.success(
                                            'Xóa danh mục thành công!',
                                        );
                                        fetchDeletedCategories();
                                    } catch (error) {
                                        toast.error('Xóa danh mục thất bại!!!');
                                        console.log(
                                            'Có lỗi khi xóa danh mục này ! ',
                                            error,
                                        );
                                    }
                                    onClose();
                                }}
                            >
                                Có
                            </button>
                            <button
                                onClick={onClose}
                                className="mr-2 font-bold"
                            >
                                Không
                            </button>
                        </div>
                    </div>
                </>
            ),
        });
    };

    if (loading) {
        return <div className="text-center p-4">Đang tải...</div>;
    }

    return (
        <>
            <div className="p-4 border-b border-gray-300 ">
                <div className="text-[#3874ff] font-bold flex items-center justify-start gap-1 text-[15px] mb-6">
                    <span className="hover:underline cursor-pointer">
                        Quản lý
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Danh Mục
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Thùng Rác
                    </span>
                </div>
                <div className="text-[30px] font-bold tracking-wider mb-8">
                    Danh Mục Đã Xóa
                </div>
            </div>
            <div className="product-list p-5">
                {deletedCategories.length === 0 ? (
                    <div className="text-center text-gray-500 font-bold text-lg">
                        Không có danh mục nào bị xóa
                    </div>
                ) : (
                    // Hiển thị bảng danh mục

                    <table className="min-w-full bg-white">
                        <thead className="">
                            <tr className="uppercase font-bold border-b-2 border-gray-300">
                                <th className="py-3 uppercase font-semibold text-sm text-center">
                                    STT
                                </th>
                                <th className="py-3 uppercase font-semibold text-sm text-center">
                                    Tên Danh Mục
                                </th>
                                <th className="py-3 uppercase font-semibold text-sm text-center">
                                    Mô tả
                                </th>
                                <th className="py-3 uppercase font-semibold text-sm text-center">
                                    Ngày Xóa
                                </th>
                                <th className="py-3 uppercase font-semibold text-sm text-center">
                                    Hành Động
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            {deletedCategories.map((category, index) => (
                                <tr key={category.id}>
                                    <td className="w-1/12 text-center py-3 px-4">
                                        {index + 1}
                                    </td>
                                    <td className="w-3/12 text-center py-3 px-4">
                                        {category.name}
                                    </td>
                                    <td className="w-3/12 text-center py-3 px-4">
                                        {category.description}
                                    </td>
                                    <td className="w-2/12 text-center py-3 px-4">
                                        {formatDateTime(
                                            new Date(category.deleted_at),
                                        )}
                                    </td>
                                    <td className="w-4/12 text-center py-3 px-4 ">
                                        <button
                                            onClick={() =>
                                                handleRestore(category.id)
                                            }
                                            className="text-green-500 hover:text-green-700 px-2 py-2 font-bold  rounded mr-2"
                                        >
                                            <Restart />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleDelete(category.id)
                                            }
                                            className="text-red-500 hover:text-red-700 px-2 py-2   font-bold  rounded"
                                        >
                                            <Delete />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default SoftDeleteCategory;
