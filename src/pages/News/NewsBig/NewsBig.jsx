import './NewsBig.scss';
import news from '../../../../public/image/news.webp'
import news1 from '../../../../public/image/news1.webp';

function NewsBig() {
    return ( 
        <>
            <div className='big'>
                <div className='big1'>
                    <div className='img1'>
                        <img src={news} alt="" />

                        <div className='overlay'></div>

                        <div className='contentImg'>
                            <h2>SIX STARS</h2>
                        </div>
                    </div>
                    <div className='content' >
                        <a href=""><h1>Top Những Mẫu Giày MLB Nữ Chính Hãng Được Yêu Thích Nhất Hiện Nay!</h1></a>
                        <p>Đăng bởi: <b>MLB Vietnam - 13/06/2024</b></p>
                        <p>Thời trang MLB Korea từ xưa đến nay luôn là người bạn đồng hành tuyệt vời dành cho phái nữ. Từ quần áo, phụ kiện hay giày dép, các bạn nữ cá tính của MLB luôn có một kho tàng thời trang to lớn để lựa chọn và sử dụng. Ngay tại đây, cùng khám phá xem đâu là Những Mẫu Giày MLB Nữ Được Yêu Thích Nhất Hiện Nay nhé! Những mẫu giày MLB chính hãng dành cho nữ Đa dạng trong thiết kế, kiểu dáng sang trọng Nói về Giày MLB thời trang dành cho phái nữ, thương hiệu thời trang Hàn Quốc có hẳn một bộ sưu tập đồ sộ đủ kiểu dáng và đầy đủ màu sắc tùy theo sở thích và cá tính riêng của mỗi người. Có thể nói là bất kỳ kiểu giày nào mà MLB tung ra cũng phù hợp với các bạn gái trẻ...</p>
                    </div>
                </div>
                <div className='big2'>
                    <div className='content1' >
                        <a href=""><h1>Nâng Tầm Phong Cách với Bộ Sưu Tập Túi Basic Denim New York Yankees</h1></a>
                        <p>Đăng bởi: <b>MLB Vietnam - 10/06/2024</b></p>
                        <p>Xu hướng của thời trang thời thượng, hiện đại, những chiếc túi của MLB không chỉ là items đi kèm mà còn là người bạn không thể thiếu trong tủ đồ thời trang của bạn. Với lối thiết kế sáng tạo và sự chọn lọc màu sắc tinh tế, đã khiến cho các mẫu túi của MLB không thể không cháy hàng sau khi được tung bán. Các nàng chắc hẳn sẽ rất mong chờ các sản phẩm mới trong mục bộ sưu tập túi của MLB đúng không nào? Vậy thì cùng tìm hiểu về Bộ sưu tập Túi MLB Korea Basic Denim Hobo Bag New York Yankees mới nhất và hứa hẹn sẽ hot hit trong thời gian tới! Bộ sưu tập Túi MLB Korea Basic Denim Hobo Bag New York Yankees Tại sao đây lại là bộ sưu tập sản phẩm đầy hứa hẹn giúp cho bạn nâng tầm...</p>
                    </div>
                    <div className='img2'>
                        <img src={news1} alt="" />
                        
                        <div className='overlay'></div>

                        <div className='contentImg'>
                            <h2>SIX STARS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default NewsBig;