import NavBar from '../DefaultLayout/Navbar/Navbar';
import Footer from '../DefaultLayout/Footer/Footer';
import Sidebar from './Sidebar/Sidebar';
import BannerSidebar from './BannerSidebar/BannerSidebar';

function SidebarLayout({ children }) {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>
                <BannerSidebar />
            </div>
            <div className="flex justify-between">
                <div className="w-[25%]">
                    <Sidebar />
                </div>
                <div className="flex-1 p-6 w-[75%]">{children}</div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default SidebarLayout;
