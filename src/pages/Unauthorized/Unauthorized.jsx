import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Truy Cập Bị Từ Chối
        </h1>
        <p className="text-gray-600 mb-6">
          Bạn không có quyền truy cập vào trang này.
        </p>
        <Link 
          to="/" 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Quay Về Trang Chủ
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;