import { useEffect, useState } from 'react';
import { Upload, X } from 'lucide-react'; // Import thêm icon X từ lucide-react
import axios from 'axios';
import * as ProductService from '../../../../service/ProductService';
import * as CategoryService from '../../../../service/CategoryService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ArrowRight } from '../../../../component/icons';
import InputAddAdmin from '../../../../component/input/InputAddAdmin';
import Select from '../../../../component/select/Select';

const AddProduct = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        countInStock: '',
        description: '',
    });

    const [imagePreviews, setImagePreviews] = useState([]);
    const [images, setImages] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    console.log(formData);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await CategoryService.getAllCategory();
                setCategories(res);
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('Có lỗi xảy ra khi tải danh sách danh mục');
            }
        };
        fetchCategories();
    }, []);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length) {
            const newImages = [...images, ...files]; // Thêm ảnh mới vào danh sách
            const newPreviews = [...imagePreviews];

            files.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newPreviews.push(reader.result);
                    if (newPreviews.length === newImages.length) {
                        setImagePreviews(newPreviews);
                    }
                };
                reader.readAsDataURL(file);
            });

            setImages(newImages);
        }
    };

    const removeImage = (index) => {
        const updatedImages = images.filter((_, i) => i !== index);
        const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
        setImages(updatedImages);
        setImagePreviews(updatedPreviews);
    };

    const uploadImagesToCloudinary = async (imageFiles) => {
        const imageUrls = [];
        for (const imageFile of imageFiles) {
            const formData = new FormData();
            formData.append('file', imageFile);
            formData.append(
                'upload_preset',
                import.meta.env.VITE_UPLOAD_ASSETS_NAME,
            );
            formData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME);
            try {
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/${
                        import.meta.env.VITE_CLOUD_NAME
                    }/image/upload`,
                    formData,
                );
                if (response.data.secure_url) {
                    imageUrls.push(response.data.secure_url);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
                toast.error(`Upload ảnh ${imageFile.name} thất bại`);
            }
        }
        if (imageUrls.length === 0) {
            throw new Error('Không có ảnh nào được upload thành công');
        }
        return imageUrls;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let imageUrls = [];
            if (images.length) {
                imageUrls = await uploadImagesToCloudinary(images);
            }
            const data = {
                name: formData.name,
                category: formData.category,
                price: Number(formData.price),
                countInStock: Number(formData.countInStock),
                description: formData.description,
                images: imageUrls,
            };

            const response = await ProductService.createProduct(data);
            console.log(response);

            if (response.status === 'OK') {
                toast.success('Tạo sản phẩm thành công');
                navigate('/system/admin/products');
            } else {
                toast.error(response.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Có lỗi xảy ra');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 pb-7">
            <div className="bg-slate-300 p-6 rounded-lg shadow-lg">
                <div className="text-[#3874ff] font-bold flex items-center justify-start gap-1 text-[15px] mb-6 mt-2">
                    <span className="hover:underline cursor-pointer">
                        Quản lý
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Sản phẩm
                    </span>
                    <ArrowRight className="!text-[13px] flex !justify-center !items-center !h-6 !text-[#3e465b]" />
                    <span className="hover:underline cursor-pointer">
                        Thêm sản phẩm
                    </span>
                </div>
                <div className="mb-2 flex justify-between items-center w-full">
                    <div>
                        <h1 className="font-bold text-[30px] text-[#141824] leading-[3rem]">
                            Thêm sản phẩm
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        <button
                            type="button"
                            className="border-custom px-5 py-3 bg-white rounded-lg text-primaryAdmin font-bold hover:bg-[#e3e6ed] transition-all duration-300 text-[15px]"
                        >
                            Danh sách sản phẩm
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
                            Xuất sản phẩm
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <form
                    onSubmit={handleSubmit}
                    className="mb-7 flex justify-between items-center flex-col"
                >
                    <div className="w-full flex justify-between items-start gap-4 px-3">
                        <div className="flex-[0_0_60%]">
                            <div className="flex gap-4 mb-5">
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={'Tiêu đề sản phẩm'}
                                    name="name"
                                    placeholder={'Nhập tên sản phẩm ...'}
                                    value={formData.name}
                                    require
                                />
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={'Giá sản phẩm'}
                                    name="price"
                                    placeholder={'Nhập giá sản phẩm ...'}
                                    value={formData.price}
                                    require
                                    type="number"
                                />
                            </div>
                            <div className="flex gap-4 mb-5">
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={'Giảm giá sản phẩm'}
                                    name="discount"
                                    placeholder={'Nhập giảm giá sản phẩm ...'}
                                    require
                                />
                                <InputAddAdmin
                                    onChange={handleInputChange}
                                    label={'Số lượng sản phẩm'}
                                    name="countInStock"
                                    placeholder={'Nhập số lượng sản phẩm ...'}
                                    value={formData.countInStock}
                                    type="number"
                                    min="1"
                                    require
                                />
                            </div>
                            <div className="mb-5">
                                <Select
                                    label={'Tags'}
                                    name={'category'}
                                    require
                                    options={categories}
                                    value={formData.category}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col mb-5">
                                <label
                                    className="font-bold text-primaryAdmin text-[18px] mb-[1rem]"
                                    htmlFor="description"
                                >
                                    Mô tả
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
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-[14px] placeholder-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
                                    placeholder="Nhập mô tả sản phẩm ..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="flex-[0_0_40%] flex flex-col gap-[1rem]">
                            <label
                                className="font-bold text-primaryAdmin text-[18px]"
                                htmlFor="description"
                            >
                                Hình ảnh
                            </label>
                            <div className="border-2 border-dashed border-gray-500 rounded-lg p-4">
                                <div className="flex flex-col items-center">
                                    <input
                                        type="file"
                                        id="image"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        multiple
                                    />
                                    <label
                                        htmlFor="image"
                                        className="cursor-pointer flex flex-col items-center mb-4"
                                    >
                                        {imagePreviews.length > 0 ? (
                                            <div className="grid grid-cols-3 gap-2 mb-4">
                                                {imagePreviews.map(
                                                    (preview, index) => (
                                                        <div
                                                            key={index}
                                                            className="relative"
                                                        >
                                                            <img
                                                                src={preview}
                                                                alt={`Preview ${
                                                                    index + 1
                                                                }`}
                                                                className="w-24 h-24 object-cover rounded-lg"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    removeImage(
                                                                        index,
                                                                    )
                                                                }
                                                                className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        ) : (
                                            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                                                <Upload className="w-8 h-8 text-gray-400" />
                                            </div>
                                        )}
                                        <span className="text-blue-600">
                                            {imagePreviews.length > 0
                                                ? 'Thay đổi ảnh'
                                                : 'Tải ảnh lên'}
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-3 bg-[#3874ff] rounded-lg text-white font-bold hover:opacity-75 transition-all duration-300 text-[15px]"
                    >
                        Thêm sản phẩm
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
