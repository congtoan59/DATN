import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div>{children}</div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
