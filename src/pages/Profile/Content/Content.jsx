// src/components/Content.js
import { useEffect, useState } from 'react';
import * as UserService from '../../../service/UserService';
import UserInfo from './components/UserInfo';
import HistoryOrder from './components/HistoryOrder';
import PurchaseHistory from './components/PurchaseHistory';
import { Link } from 'react-router-dom';

function Content() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
    });
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('profile');

    const fetchDetailUser = async () => {
        const storedUser = localStorage.getItem('user');

        try {
            const parsedUser = JSON.parse(storedUser);
            const userId = parsedUser.id;
            setLoading(true);
            const res = await UserService.getDetailsUser(userId);
            setUserInfo({
                name: res.name,
                email: res.email,
            });
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchDetailUser();
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserInfo(JSON.parse(storedUser).name);
            setLoading(false);
        } else setLoading(true);
    }, []);
    if (loading) {
        return <p>Đang tải...</p>;
    }

    if (error) {
        return <p>Đã xảy ra lỗi: {error}</p>;
    }
    let content;
    if (activeTab === 'profile') {
        content = (
            <UserInfo
                title="Thông tin tài khoản"
                name={userInfo.name}
                email={userInfo.email}
            />
        );
    } else if (activeTab === 'orders') {
        content = <HistoryOrder title="Đơn hàng của bạn" />;
    } else if (activeTab === 'purchaseHistory') {
        content = <PurchaseHistory title="Lịch sử mua hàng" />;
    }

    return (
        <>
            <div className="flex flex-[0_0_100%] p-[5%] justify-start">
                <div className="flex-[0_0_20%] flex flex-col gap-5">
                    <div>
                        <h1 className="uppercase font-normal tracking-widest text-[19px]">
                            Trang tài khoản
                        </h1>
                        <p className="font-bold tracking-wider text-[14px] items-center">
                            Xin chào, {userInfo.name} !
                        </p>
                    </div>
                    <div>
                        <ul className="leading-loose cursor-pointer">
                            <li onClick={() => setActiveTab('profile')}>
                                Thông tin tài khoản
                            </li>
                            <li onClick={() => setActiveTab('purchaseHistory')}>
                                Lịch sử mua hàng
                            </li>
                            <li onClick={() => setActiveTab('orders')}>
                                Đơn hàng
                            </li>

                            <li onClick={() => setActiveTab('address')}>
                                Số địa chỉ
                            </li>
                            <li onClick={() => setActiveTab('logout')}>
                                Đăng Xuất
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-[0_0_80%]">{content}</div>
            </div>
        </>
    );
}

export default Content;
