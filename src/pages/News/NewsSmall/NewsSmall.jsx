import './NewsSmall.scss'
import {Link} from 'react-router-dom'
import newssmall1 from '../../../../public/image/newssmall1.webp';
import newssmall2 from '../../../../public/image/newssmall2.webp';
import newssmall3 from '../../../../public/image/newssmall3.webp';
import newssmall4 from '../../../../public/image/newssmall4.webp';
import newssmall5 from '../../../../public/image/newssmall5.webp';
import newssmall6 from '../../../../public/image/newssmall6.webp';
import newssmall7 from '../../../../public/image/newssmall7.webp';
import newssmall8 from '../../../../public/image/newssmall8.webp';

function NewsSmall() {
    return ( 
        <>
        <div className='small'>
            <div>
                <div className='img3'>
                    <img src={newssmall1} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Bùng Nổ Phong Cách với Giày MLB...</h1>
                </Link>
                <p>Bạn đang tìm kiếm món phụ kiện nâng tầm phong cách, tạo dấu ấn mới cho cá tính thời trang của riêng mình? Không...</p>
            </div>

            
            <div>
                <div className='img3'>
                    <img src={newssmall2} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Túi MLB Trắng: Điểm Nhấn Hoàn...</h1>
                </Link>
                <p>Túi MLB vẫn luôn là cái tên được nhắc đến khi các tín đồ thời trang muốn mua sắm, làm mới bản thân. Với chất lượng...</p>
            </div>
            <div>
                <div className='img3'>
                    <img src={newssmall3} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Túi MLB Cho Nam: Biểu Tượng...</h1>
                </Link>
                <p>Thời trang là không giới hạn. Có thể nói điều đó vẫn luôn đúng trong khuôn khổ và triết lý thời trang của MLB Korea...</p>
            </div>
            <div>
                <div className='img3'>
                    <img src={newssmall4} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Khám Phá Phong Cách Độc Đáo với...</h1>
                </Link>
                <p>MLB vẫn luôn là hãng thời trang được nhiều bạn trẻ săn đón nhất nhờ những thiết kế độc đáo, tiện lợi nhưng không...</p>
            </div>
        </div>
        <div className='small'>
            <div>
                <div className='img3'>
                    <img src={newssmall5} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Bộ Sưu Tập 24SS MLB DENIM...</h1>
                </Link>
                <p>Hãy để đồ Jeans đầy tính bụi định hình phong cách ăn mặc của bạn. Vốn từ lâu, bộ outfit Jeans đã trở thành một...</p>
            </div>

            
            <div>
                <div className='img3'>
                    <img src={newssmall6} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Sự Kết Hợp Hoàn Hảo Giữa Phong...</h1>
                </Link>
                <p>Với giới trẻ hiện đại, giày không chỉ là món phụ kiện phục vụ cho mục đích đi lại, nó còn là dấu ấn để các bạn trẻ tạ...</p>
            </div>
            <div>
                <div className='img3'>
                    <img src={newssmall7} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Khám Phá Sự Dịu Dàng và Phong...</h1>
                </Link>
                <p>Gam màu hồng tuy không phải là gam màu dễ phối đồ, nhưng khó có thể cưỡng lại sức hút nổi trội của nó. Với...</p>
            </div>
            <div>
                <div className='img3'>
                    <img src={newssmall8} alt="" />

                    <div className='overlay'></div>

                    <div className='contentImg'>
                        <h2>SIX STARS</h2>
                    </div>
                </div>
                <Link to="">
                    <h1>Bộ Sưu Tập Giày MLB BigBall Chun...</h1>
                </Link>
                <p>Vốn là một trong những dòng sản phẩm chủ lực của MLB Korea, mẫu giày BigBall Chunky được xem là biểu tượng...</p>
            </div>
        </div>
        <div className="pagination clearfix" >
            <ul>
                <li>
                    <Link>1</Link>
                </li>
                <li>
                    <Link>2</Link>
                </li>
                <li>
                    <Link>3</Link>
                </li>
                <li>
                    <Link>...</Link>
                </li>
                <li>
                    <Link>9</Link>
                </li>
                <li> 
                    <Link> » </Link>
                </li>
            </ul>
        </div>
        </>
     );
}

export default NewsSmall;