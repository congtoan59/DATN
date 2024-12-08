import React from 'react';

const UserManage = () => {
    // Dữ liệu người dùng mẫu
    const users = [
        {
            id: 1,
            name: 'Vietkhoi',
            email: 'khoi@example.com',
            createdAt: '2023-12-01',
        },
        {
            id: 2,
            name: 'Lenin',
            email: 'nin@example.com',
            createdAt: '2023-11-25',
        },
        {
            id: 3,
            name: 'Thien',
            email: 'thien@example.com',
            createdAt: '2023-11-20',
        },
    ];

    // Hàm xử lý khi nhấn vào nút Xem thông tin
    const handleViewInfo = (user) => {
        alert(`Thông tin người dùng:\n\nTên: ${user.name}\nEmail: ${user.email}\nNgày tạo: ${user.createdAt}`);
    };

    return (
        
        <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg">
            
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Quản lý người dùng</h1>
            <table className="w-full border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border border-gray-200">STT</th>
                        <th className="py-2 px-4 border border-gray-200">Tên người dùng</th>
                        <th className="py-2 px-4 border border-gray-200">Email</th>
                        <th className="py-2 px-4 border border-gray-200">Ngày tạo</th>
                        <th className="py-2 px-4 border border-gray-200">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                            <td className="py-2 px-4 text-center">{index + 1}</td>
                            <td className="py-2 px-4">{user.name}</td>
                            <td className="py-2 px-4">{user.email}</td>
                            <td className="py-2 px-4 text-center">{user.createdAt}</td>
                            <td className="py-2 px-4 text-center">
                                <button
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    onClick={() => handleViewInfo(user)}
                                >
                                    Xem thông tin
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManage;
