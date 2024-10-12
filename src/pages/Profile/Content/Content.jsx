import { useState, useEffect } from 'react';
// import axios from 'axios';
function Content() {
    const listProfile = [
        { id: 1, name: 'Thông tin tài khoản' },
        { id: 2, name: 'Đơn hàng của bạn' },
        { id: 3, name: 'Đổi mật khẩu' },
        { id: 4, name: 'Số địa chỉ (0)' },
        { id: 5, name: 'Đăng xuất' },
    ];
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');

    useEffect(() => {
        // Đặt giá trị mặc định cho title là name của id 1
        const defaultProfile = listProfile.find((item) => item.id === 1);
        if (defaultProfile) {
            setTitle(defaultProfile.name);
        }
    }, []);

    // const refreshToken = localStorage.getItem('refresh_token'); // Giả sử bạn lưu refresh_token trong localStorage

    const handleProfileClick = async (id) => {
        // if (id === 1) {
        //     // Nếu nhấn vào "Thông tin tài khoản"
        //     setLoading(true);
        //     try {
        //         const response = await axios.post(
        //             'http://localhost:3001/api/user/get-details/:id',
        //             { refresh_token: refreshToken },
        //         );
        //         setUserInfo(response.data);
        //     } catch (error) {
        //         console.error('Error fetching user info:', error);
        //     } finally {
        //         setLoading(false);
        //     }
        // }
        const selectedProfile = listProfile.find((item) => item.id === id);
        if (selectedProfile) {
            setTitle(selectedProfile.name);
        }
    };
    return (
        <>
            <div className="flex flex-[0_0_100%] p-[5%] justify-star ">
                <div className="flex-[0_0_20%] flex flex-col gap-5">
                    <div>
                        <h1 className="uppercase font-normal tracking-widest text-[19px]">
                            Trang tài khoản
                        </h1>
                        <p className="font-medium tracking-wide text-[14px] ">
                            Xin chào , Name !
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
                    <div className="uppercase font-normal tracking-widest text-[19px]">
                        {title}
                    </div>
                    {loading && <p>Loading...</p>}
                    {userInfo && (
                        <div>
                            <p>Name: {userInfo.name}</p>
                            <p>Email: {userInfo.email}</p>
                            {/* Hiển thị thêm thông tin khác nếu cần */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Content;
