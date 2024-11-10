// src/components/Content.js
import { useState } from 'react';

function Content() {
    const [title, setTitle] = useState('Thông tin tài khoản');

    const listProfile = [
        {
            id: 1,
            name: 'Thông tin tài khoản',
        },
        {
            id: 2,
            name: 'Đơn hàng của bạn',
        },
        {
            id: 3,
            name: 'Đổi mật khẩu',
        },
        {
            id: 4,
            name: 'Số địa chỉ (0)',
        },
        {
            id: 5,
            name: 'Đăng xuất',
        },
    ];

    const handleProfileClick = (id) => {
        const selectedProfile = listProfile.find((item) => item.id === id);
        setTitle(selectedProfile.name);
    };

    return (
        <>
            <div className="flex flex-[0_0_100%] p-[5%] justify-star">
                <div className="flex-[0_0_20%] flex flex-col gap-5">
                    <div>
                        <h1 className="uppercase font-normal tracking-widest text-[19px]">
                            Trang tài khoản
                        </h1>
                        <p className="font-medium tracking-wide text-[14px]">
                            Xin chào,!
                        </p>
                    </div>
                    <div>
                        {listProfile.map((item) => (
                            <ul
                                key={item.id}
                                onClick={() => handleProfileClick(item.id)}
                                className="leading-loose cursor-pointer"
                            >
                                <li>{item.name}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="flex-[0_0_55%]">
                    <h1 className="uppercase font-normal tracking-widest text-[19px]">
                        {title}
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Content;
