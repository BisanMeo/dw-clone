import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <ul className="footer-list">
                    <p className="title-footer"> CỬA TIỆM </p>
                    <li className="footer-item">
                        <Link to="/clock" className="footer-link">Tất cả đồng hồ</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/jewels" className="footer-link">Tất cả trang sức</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/glass" className="footer-link">Tất cả kính râm</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer"> HỖ TRỢ </p>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Trung tâm trợ giúp</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Liên hệ chúng tôi</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Cách thay dây đồng hồ</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer">THÔNG TIN </p>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Điều khoản bảo mật</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Điều khoản khác</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Chính sách hoàn trả</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Bảo hành</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer">VỀ CHÚNG TÔI </p>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">Câu chuyện</Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" className="footer-link">#DWMOMENT</Link>
                    </li>
                </ul>
            </div>
            <div className="copy">
                <p className='name-footer'>DANIEL WALLINGTON</p>
                <p className='copy'>© 2022 Daniel Wellington AB</p>
            </div>
        </div>
    );
};

export default Footer;