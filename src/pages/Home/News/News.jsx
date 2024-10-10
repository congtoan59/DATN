import { NavLink } from 'react-router-dom';
import { newsHome } from './newsHome';
function News() {
    const firstNews = newsHome.filter((news) => news.import === 1);
    const otherNews = newsHome.filter((news) => news.import === 2);

    function formatDate (date) {
        if (!(date instanceof Date)) {
            // Chuyển đổi date thành đối tượng Date nếu nó là chuỗi
            date = new Date(date);
        }
        const day = date.getDate();
        const month = date.getMonth() +1;
        const year   = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-4 '>
                {/* Hiển thị bài viết có import là 1 */}
                {firstNews.map((news) => (
                    <div key={news.id}  className='border p-4'>
                        <img className='hover:opacity-[0.9] hover:cursor-pointer' src={news.img} alt={news.title} />
                        <div>
                            <h1 className='font-bold text-[1.5rem] hover:text-[#0056b3] hover:cursor-pointer'>{news.title}</h1>

                            <div className='flex gap-2 pt-4 pb-4'>
                                <p>Đăng bởi:</p>
                                <p className='font-bold'>{news.nameNews} -</p>
                            <p>{formatDate(news.timeNews)}</p>

                            </div>
                            <p className='line-clamp-5'>{news.description}</p>
                        </div>
                    </div>
                ))}

                {/* Hiển thị các bài viết có import là 2 */}
                <div>
                    <div className='grid grid-cols-2 gap-2'>
                        {otherNews.map((news) => (
                            <div key={news.id} className='border p-2 w-full h-full '>
                                <img className='hover:opacity-[0.9] hover:cursor-pointer ' src={news.img} alt={news.title} />
                                <div>
                                    <h1 className='line-clamp-1 font-bold text-[1rem] hover:text-[#0056b3] hover:cursor-pointer'>{news.title}</h1>
                                    <p className='line-clamp-3 text-gray-400'>{news.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default News;
