import NewsSmall from './NewsSmall/NewsSmall';
import NewsBig from './NewsBig/NewsBig';
import BannerSidebar from '../../layouts/SidebarLayout/BannerSidebar/BannerSidebar';
function News() {
    return (
        <>
            <div>
                <BannerSidebar />
                <NewsBig />
                <NewsSmall />
            </div>
        </>
    );
}

export default News;
