import { useState, useEffect } from 'react';
import * as ProductService from '../../../../service/ProductService';
import api from '../../../../http/api';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { formatCurrencyVND, formatDateTime } from '../../../../http/api';
import { Link } from 'react-router-dom';
import { ArrowRight, Delete, Restart } from '../../../../component/icons';

function SoftDelete() {
    const [deletedProducts, setDeletedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchDeletedProducts();
    }, []);

    const fetchDeletedProducts = async () => {
        try {
            const res = await api.get('/product/deleted');
            console.log(res.data);

            setDeletedProducts(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Lỗi khi tải sản phẩm đã xóa:', err);
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
                        <p>Bạn có chắc muốn khôi phục sản phẩm này?</p>
                        <div className="flex justify-between">
                            <button
                                className="confirm-buttonRestore font-bold"
                                onClick={async () => {
                                    try {
                                        await ProductService.restoreProduct(id);
                                        toast.success(
                                            'Khôi phục sản phẩm thành công!',
                                        );
                                        fetchDeletedProducts();
                                    } catch (error) {
                                        toast.error(
                                            'Khôi phục sản phẩm thất bại!!!',
                                        );
                                        console.error(
                                            'Lỗi khi khôi phục sản phẩm:',
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
                        <p>Bạn có chắc muốn xóa sản phẩm này?</p>
                        <div className="flex justify-between">
                            <button
                                className="confirm-button font-bold"
                                onClick={async () => {
                                    try {
                                        await ProductService.deleteProduct(id);
                                        toast.success(
                                            'Xóa sản phẩm thành công!',
                                        );
                                        fetchDeletedProducts();
                                    } catch (error) {
                                        toast.error('Xóa sản phẩm thất bại!!!');
                                        console.log(
                                            'Có lỗi khi xóa sản phẩm này ! ',
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
                        Sản Phẩm
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Thùng Rác
                    </span>
                </div>
                <div className="text-[40px] font-bold tracking-wider mb-8">
                    Sản Phẩm Đã Xóa
                </div>
            </div>
            <div className="product-list p-5">
                <table className="min-w-full bg-white">
                    <thead className="">
                        <tr className="uppercase font-bold border-b-2 border-gray-300">
                            <th className="py-3 uppercase font-semibold text-sm text-center">
                                STT
                            </th>
                            <th className="py-3 uppercase font-semibold text-sm text-center">
                                Tên Sản Phẩm
                            </th>
                            <th className="py-3 uppercase font-semibold text-sm text-center">
                                Giá
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
                        {deletedProducts.map((product, index) => (
                            <tr key={product.id}>
                                <td className="w-1/12 text-center py-3 px-4">
                                    {index + 1}
                                </td>
                                <td className="w-3/12 text-center py-3 px-4">
                                    {product.name}
                                </td>
                                <td className="w-2/12 text-center py-3 px-4">
                                    {formatCurrencyVND(product.price)}
                                </td>
                                <td className="w-2/12 text-center py-3 px-4">
                                    {formatDateTime(
                                        new Date(product.deleted_at),
                                    )}
                                </td>
                                <td className="w-4/12 text-center py-3 px-4 ">
                                    <button
                                        onClick={() =>
                                            handleRestore(product.id)
                                        }
                                        className="text-green-500 hover:text-green-700  font-bold py-2 px-4 rounded mr-2"
                                    >
                                        <Restart />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="text-red-500 hover:text-red-700  font-bold py-2 px-4 rounded"
                                    >
                                        <Delete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SoftDelete;
