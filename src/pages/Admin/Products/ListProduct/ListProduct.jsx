import { useState, useEffect } from 'react';
import api from '../../../../http/api';
import { formatCurrencyVND } from '../../../../http/api';
import * as ProductService from '../../../../service/ProductService';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import {
    ArrowRight,
    SearchIcon,
    DocDown,
    Delete,
    Eye,
    Edit,
} from '../../../../component/icons';

function ListProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await api.get(`/product/`);
            const filteredProducts = res.data.filter(
                (product) => product.deleted_at === null,
            );
            console.log(res);

            setProducts(filteredProducts);
        } catch (err) {
            setError(
                err.res?.data?.message || 'Có lỗi xảy ra khi tải sản phẩm.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleSoftDelete = (id) => {
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
                                        await ProductService.softDeleteProduct(
                                            id,
                                        );
                                        toast.success(
                                            'Xóa sản phẩm thành công!',
                                        );
                                        fetchProducts();
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

    const handleEdit = (id) => {
        navigate(`/system/admin/products/edit/${id}`);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <>
            <div className="p-4 border-b border-gray-300 pb-7">
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
                        Thêm sản phẩm
                    </span>
                </div>
                <div className="text-[40px] font-bold tracking-wider mb-8">
                    Sản phẩm
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
                                    to={'/system/admin/products/add-product'}
                                    className="font-bold px-1 py-3 text-white bg-[#004cffb8] h-[44px] rounded-lg hover:bg-[#004dff]"
                                >
                                    Thêm sản phẩm
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </div>

            <div className="product-list p-5">
                <table className="min-w-full bg-white ">
                    <thead className="">
                        <tr className="uppercase font-bold border-b-2 border-gray-300 ">
                            <th className="py-3 px-4 font-semibold text-sm text-center ">
                                STT
                            </th>
                            <th className="py-3 px-4 font-semibold text-sm text-center ">
                                Ảnh
                            </th>
                            <th className="py-3 px-4 font-semibold text-sm text-center ">
                                Tên Sản Phẩm
                            </th>
                            <th className="py-3 px-4 font-semibold text-sm text-center ">
                                Giá
                            </th>
                            <th className="py-3 px-4 font-semibold text-sm text-center ">
                                Hành Động
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={product.id}
                                className="text-center items-center "
                            >
                                <td className="py-2 px-4 border">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-4 border">
                                    {product.imageUrls &&
                                    product.imageUrls.length > 0 ? (
                                        <div className="flex justify-center gap-2">
                                            {product.imageUrls.map(
                                                (image, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={image.url}
                                                        alt={
                                                            image.alt ||
                                                            product.name
                                                        }
                                                        className="w-16 h-16 object-cover rounded"
                                                    />
                                                ),
                                            )}
                                        </div>
                                    ) : (
                                        <span>Chưa có ảnh</span>
                                    )}
                                </td>
                                <td className="py-2 px-4 border">
                                    {product.name}
                                </td>
                                <td className="py-2 px-4 border">
                                    {formatCurrencyVND(product.price)}
                                </td>
                                <td className="py-2 px-4 border items-center">
                                    <button
                                        onClick={() => handleEdit(product.id)}
                                        className=" text-green-500 py-1 px-2 rounded"
                                    >
                                        <Eye />
                                    </button>
                                    <button
                                        onClick={() => handleEdit(product.id)}
                                        className=" text-blue-500 py-1 px-2 rounded"
                                    >
                                        <Edit />
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleSoftDelete(product.id)
                                        }
                                        className="text-red-500 py-1 px-2 rounded"
                                    >
                                        <Delete className="" />
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

export default ListProduct;
