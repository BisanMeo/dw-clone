import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer">
                <ul className="footer-list">
                    <p className="title-footer"> CỬA TIỆM </p>
                    <li className="footer-item">
                        <a href="/clock" className="footer-link">Tất cả đồng hồ</a>
                    </li>
                    <li className="footer-item">
                        <a href="/jewels" className="footer-link">Tất cả trang sức</a>
                    </li>
                    <li className="footer-item">
                        <a href="/glass" className="footer-link">Tất cả kính râm</a>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer"> HỖ TRỢ </p>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Trung tâm trợ giúp</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Liên hệ chúng tôi</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Cách thay dây đồng hồ</a>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer">THÔNG TIN </p>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Điều khoản bảo mật</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Điều khoản khác</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Chính sách hoàn trả</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Bảo hành</a>
                    </li>
                </ul>
                <ul className="footer-list">
                    <p className="title-footer">VỀ CHÚNG TÔI </p>
                    <li className="footer-item">
                        <a href="/" className="footer-link">Câu chuyện</a>
                    </li>
                    <li className="footer-item">
                        <a href="/" className="footer-link">#DWMOMENT</a>
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