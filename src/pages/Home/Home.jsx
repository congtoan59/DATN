import ServiceHome from './ServiceHome/ServiceHome';
import Banner from './Banner/Banner';
import NewShoes from './NewShoes/Newshoes';
import BagHome from './BagHome/BagHome';
import Accessories from './Accessories/Accessories';
import News from './News/News';

function Home() {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className="pt-10">
                <ServiceHome />
            </div>
            <div className="formatContent">
                <div>
                    <NewShoes />
                </div>
                <div className="mt-[50px]">
                    <BagHome />
                </div>
                <div>
                    <Accessories />
                </div>
                <div className="pt-4">
                    <News />
                </div>
            </div>
        </div>
    );
}

export default Home;
