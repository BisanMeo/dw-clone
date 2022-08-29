import React from 'react';
import './tag.css';
const Tag = () => {
    return (
        <>
            <div className='tag-and-banner'>
                <ul className="tag-list">
                    <li className="tag-item">
                        <a href="/clock/men" className="tag-link">ĐỒNG HỒ NAM </a>
                    </li>
                    <li className="tag-item">
                        <a href="/clock/women" className="tag-link">ĐỒNG HỒ NỮ </a>
                    </li>
                    <li className="tag-item">
                        <a href="/jewels" className="tag-link">TRANG SỨC </a>
                    </li>
                    <li className="tag-item">
                        <a href="/glass" className="tag-link">KÍNH RÂM</a>
                    </li>
                </ul>
            </div>
            <div className="event">
                <a href="/clock" className="event-link">
                    <img src="https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/6aUqKu4VrN0sJaWvNNml2N/76f2d55b3de91313e33a921bfda631df/SEO_2800x900px_hero.jpg" alt="" className="event-on-pc" />
                    <img src="https://m.media-amazon.com/images/I/71DgWZsU03L._AC_UL1500_.jpg" alt="" className="event-on-mobile" />
                    <div className="event-info">
                        <p className="event-title"> MUA BẤT KÌ ĐỒNG HỒ NÀO </p>
                        <p className="event-dre"> NHẬN NGAY CLASSIC BRACELET </p>
                        <a href="/clock" className="btn-event">KHÁM PHÁ</a>
                    </div>
                    
                </a>
            </div>
        </>
    );
}

export default Tag;