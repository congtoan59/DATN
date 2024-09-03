import ServiceHome from "./ServiceHome/ServiceHome";
import Banner from "./Banner/Banner";
import NewShoes from "./NewShoes/Newshoes";
import BagHome from "./BagHome/BagHome";

function Home() {
    return ( 
        <>
            <div>
                <Banner />
            </div>
            <div className="pt-10">
                <ServiceHome/>
            </div>
            <div>
                <NewShoes />
            </div>
            <div>
                <BagHome />
            </div>
        </>
     );
}

export default Home;