import BarChart from './BarChart/BarChart';
import ProductOverview from './ProductOverview/ProductOverview';

function Overview() {
    return (
        <>
            <div className="text-blue-700 font-medium p-4">Trang chủ </div>
            <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                <h1 className="text-2xl font-bold mb-4">Tổng quan</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
                        <div className="h-12 w-12 flex items-center justify-center border-2 border-blue-500 rounded-full">
                            <i className="fa-solid fa-cart-shopping text-blue-500 text-lg"></i>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Đơn hàng</h2>
                            <p className="text-3xl font-bold text-blue-500">
                                15
                            </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
                        <div className="h-12 w-12 flex items-center justify-center border-2 border-green-500 rounded-full">
                            <i className="fa-solid fa-layer-group text-green-500 text-lg"></i>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Sản phẩm</h2>
                            <p className="text-3xl font-bold text-green-500">
                                30
                            </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
                        <div className="h-12 w-12 flex items-center justify-center border-2 border-yellow-500 rounded-full">
                            <i className="fa-solid fa-dollar-sign text-yellow-500 text-lg"></i>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">Doanh thu</h2>
                            <p className="text-3xl font-bold text-yellow-500">
                                0
                            </p>
                        </div>
                    </div>
                    <div className="p-4 bg-white shadow rounded-lg flex items-center space-x-4">
                        <div className="h-12 w-12 flex items-center justify-center border-2 border-red-500 rounded-full">
                            <i className="fa-solid fa-user text-red-500 text-lg"></i>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold">
                                Người dùng
                            </h2>
                            <p className="text-3xl font-bold text-red-500">
                                45
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <BarChart />
            </div>
            <div>
                <div>
                    <h1 className="p-4 text-2xl font-bold">Sản phẩm</h1>
                </div>
                <ProductOverview />
            </div>
        </>
    );
}

export default Overview;
