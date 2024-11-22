import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../http/api';
import { toast } from 'react-toastify';
import * as ProductService from '../../../../service/ProductService';
import { useNavigate } from 'react-router-dom';
import ButtonEditProduct from '../../../../component/button/ButtonEditProduct';

function EditProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        name: '',
        price: '',
        img: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await api.get(`/product/detail/${id}`);
            setProduct(res.data);
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    'Có lỗi xảy ra khi tải thông tin sản phẩm.',
            );
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ProductService.updateProduct(id, product);
            toast.success('Cập Nhật sản phẩm thành công!');
            navigate('/system/admin/products');
        } catch (err) {
            toast.error('Cập nhật sản phẩm thất bại.');
            console.error('Cập nhật lỗi :', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <div className="flex gap-4 text-blue-500 font-medium text-[16px] ">
                <h1>Sản phẩm</h1>
                <h1>Chỉnh sửa sản phẩm</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <ButtonEditProduct
                        label="Tên sản phẩm"
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="name">Tên sản phẩm:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price">Giá sản phẩm:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <button type="submit">Cập nhật</button>
            </form>
        </>
    );
}

export default EditProduct;
