import React from 'react';
import './tag.css';
import { Link } from 'react-router-dom';

const Tag = () => {
    return (
        <>
            <div className='tag-and-banner'>
                <ul className="tag-list">
                
                    <li className="tag-item">
                        <Link to="/clock/men" className="tag-link">ĐỒNG HỒ NAM </Link>
                    </li>
                    <li className="tag-item">
                        <Link to="/clock/women" className="tag-link">ĐỒNG HỒ NỮ </Link>
                    </li>
                    <li className="tag-item">
                        <Link to="/jewels" className="tag-link">TRANG SỨC </Link>
                    </li>
                    <li className="tag-item">
                        <Link to="/glass" className="tag-link">KÍNH RÂM</Link>
                    </li>
                </ul>
            </div>
            <div className="event">
                <Link to="/clock" className="event-link">
                    <img src="https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/6aUqKu4VrN0sJaWvNNml2N/76f2d55b3de91313e33a921bfda631df/SEO_2800x900px_hero.jpg" alt="" className="event-on-pc" />
                    <img src="https://m.media-amazon.com/images/I/71DgWZsU03L._AC_UL1500_.jpg" alt="" className="event-on-mobile" />
                    <div className="event-info">
                        <p className="event-title"> MUA BẤT KÌ ĐỒNG HỒ NÀO </p>
                        <p className="event-dre"> NHẬN NGAY CLASSIC BRACELET </p>
                        <Link to="/clock" className="btn-event">KHÁM PHÁ</Link>
                    </div>
                    
                </Link>
            </div>
        </>
    );
}

export default Tag;