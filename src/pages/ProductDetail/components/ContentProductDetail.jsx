import { useState } from 'react';

function ContentProductDetail() {
    const [activeTab, setActiveTab] = useState('description'); // Tab mặc định

    const renderContent = () => {
        switch (activeTab) {
            case 'description':
                return (
                    <div className="flex justify-center w-full">
                        <div className="w-[55%] flex flex-col gap-4">
                            <span>
                                Tất cả sản phẩm tại cửa hàng đều là sản phẩm
                                chính hãng, xuất phát từ các thương hiệu độc
                                quyền và uy tín, được ủy quyền bởi Liên đoàn Thể
                                thao Bóng chày SixStars. Các thương hiệu chính
                                tại cửa hàng bao gồm:
                            </span>
                            <span>
                                <span className="font-bold">
                                    SixStars Korea:
                                </span>
                                Được ủy quyền tại Hàn Quốc, thương hiệu này mang
                                đến sự hòa quyện giữa phong cách thời trang hàng
                                hiệu và đam mê bóng chày. Sản phẩm của SixStars
                                Korea đánh bại mọi cạnh tranh trên thị trường
                                thời trang, thể hiện sự đẳng cấp và phong cách
                                đỉnh cao.
                            </span>
                            <span>
                                <span className="font-bold">
                                    SixStars New Era:
                                </span>
                                Được đánh giá là một biểu tượng của thể thao và
                                phong cách thời trang thể thao. Thương hiệu này,
                                có nguồn gốc tại Hoa Kỳ, đã được SixStars ủy
                                quyền để sản xuất các sản phẩm chuyên dành cho
                                thể thao với mục tiêu tạo ra những sản phẩm chất
                                lượng với giá cả cạnh tranh.
                            </span>
                        </div>
                    </div>
                );

            case 'reviews':
                return (
                    <div className="flex justify-center w-full">
                        <div className="w-[55%] flex flex-col gap-4">
                            Đánh giá sản phẩm ở đây.
                        </div>
                    </div>
                );

            case 'details':
                return (
                    <div className="flex justify-center w-full">
                        <div className="w-[55%] flex flex-col gap-4">
                            Thông tin chi tiết sản phẩm ở đây.
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center">
            <nav className="flex gap-4 bg-black  z-10">
                <button
                    className={`px-4 py-2 uppercase tracking-widest ${
                        activeTab === 'description'
                            ? 'bg-[#942319] text-white'
                            : 'bg-black text-white'
                    }`}
                    onClick={() => setActiveTab('description')}
                >
                    SixStars Chính Hãng
                </button>
                <button
                    className={`px-4 py-2 uppercase tracking-widest ${
                        activeTab === 'reviews'
                            ? 'bg-[#942319] text-white'
                            : 'bg-black text-white'
                    }`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Đánh Giá Sản Phẩm
                </button>
                <button
                    className={`px-4 py-2 uppercase tracking-widest ${
                        activeTab === 'details'
                            ? 'bg-[#942319] text-white'
                            : 'bg-black text-white'
                    }`}
                    onClick={() => setActiveTab('details')}
                >
                    Chính Sách đổi trả
                </button>
            </nav>

            {/* Render nội dung dựa trên tab đã chọn */}
            <div className="pt-6 mb-10 text-[14px]">{renderContent()}</div>
        </div>
    );
}

export default ContentProductDetail;
