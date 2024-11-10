import { Link } from 'react-router-dom';
function BannerProfile() {
    return (
        <>
            <div className="relative">
                <img
                    src="https://bizweb.dktcdn.net/100/446/974/files/banner-mlb-viet-nam-65451178-c358-4dee-aad8-b259b2143193.png?v=1716531331367"
                    alt=""
                    className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white ">
                    <h2 className="font-bold text-[2rem] tracking-widest uppercase">
                        Trang Khách hàng
                    </h2>
                    <div className="flex gap-2 pt-2">
                        <Link to="/">Trang chủ</Link>
                        <span>/ Trang khách hàng</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerProfile;
