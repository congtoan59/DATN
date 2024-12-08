import React, { useState } from 'react';

const ProductOverview = () => {
    // State quản lý tab hiện tại
    const [activeTab, setActiveTab] = useState('top');

    // Dữ liệu sản phẩm mẫu
    const products = {
        top: [
            {
                id: 1,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-chunky-liner-logo-b-mau-nau-3asxcln4n-43brs-1.jpg?v=1732265600883',
                name: 'Giày MLB Korea Chunky Liner Nubuck Boston Red Sox Brown',
                code: 'SP001',
                quantity: 120,
            },
            {
                id: 2,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-ace-runner-v2-logo-ny-mau-bac-3arnac24n-50sis-1.jpg?v=1725247825930',
                name: 'Giày MLB Korea Ace Runner V2 New York Yankees Silver',
                code: 'SP002',
                quantity: 110,
            },
        ],
        slow: [
            {
                id: 1,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-chunky-liner-logo-ny-mau-nau-3asxcln4n-50msd-1.jpg?v=1732266849410',
                name: 'Giày MLB Korea Ace Runner V2 New York Yankees Black',
                code: 'SP003',
                quantity: 5,
            },
            {
                id: 2,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/balo-mlb-chinh-hang-newlux-mono-logo-ny-mau-den-7abkmd25n-50bks-1.jpg?v=1733048389743',
                name: 'Balo MLB Korea Newlux Mono Backpack Set New York Yankees Black',
                code: 'SP004',
                quantity: 8,
            },
        ],
        lowStock: [
            {
                id: 1,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/balo-mlb-chinh-hang-newlux-mono-logo-b-mau-lavender-7abkmd25n-43ldl-1.jpg?v=1733047949377',
                name: 'Balo MLB Korea Newlux Mono Backpack Set Boston Red Sox Lavender',
                code: 'SP005',
                quantity: 2,
            },
            {
                id: 2,
                img: 'https://bizweb.dktcdn.net/100/446/974/products/ao-thun-mlb-chinh-hang-logo-la-mau-xanh-duong-3atsv0334-07bll-1.jpg?v=1727428629153',
                name: 'Áo Thun MLB Korea Varsity Number Graphic LA Dodgers Blue',
                code: 'SP006',
                quantity: 3,
            },
        ],
    };

    // Render sản phẩm theo tab
    const renderProducts = () => {
        return products[activeTab].map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="h-10 w-10 object-cover rounded"
                    />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4 text-center">{product.code}</td>
                <td className="py-2 px-4 text-center">{product.quantity}</td>
            </tr>
        ));
    };

    return (
        <div className="w-full mx-auto bg-white shadow rounded-lg p-6">
            {/* Tabs */}
            <div className="flex justify-between border-b pb-2 mb-4">
                <button
                    className={`px-4 py-2 ${
                        activeTab === 'top'
                            ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                            : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('top')}
                >
                    Top sản phẩm bán chạy
                </button>
                <button
                    className={`px-4 py-2 ${
                        activeTab === 'slow'
                            ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                            : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('slow')}
                >
                    Top sản phẩm bán chậm
                </button>
                <button
                    className={`px-4 py-2 ${
                        activeTab === 'lowStock'
                            ? 'text-blue-500 border-b-2 border-blue-500 font-bold'
                            : 'text-gray-500'
                    }`}
                    onClick={() => setActiveTab('lowStock')}
                >
                    Sản phẩm gần hết hàng
                </button>
            </div>

            {/* Bảng sản phẩm */}
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="py-2 px-4 border border-gray-200">
                            STT
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Hình ảnh
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Tên sản phẩm
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Mã sản phẩm
                        </th>
                        <th className="py-2 px-4 border border-gray-200">
                            Số lượng
                        </th>
                    </tr>
                </thead>
                <tbody>{renderProducts()}</tbody>
            </table>
        </div>
    );
};

export default ProductOverview;
