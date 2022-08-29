import React from 'react';
import './regis.css';
import { Link } from 'react-router-dom';

const RegisterForSale = () => {
    return (
        <div className='regis-bg'>
            <div className="regis-container">
                <p className="regis-item-title">KHUYẾN MẠI 10% VỚI ORDER ĐẦU TIÊN</p>
                <p className="regis-pre">Đăng ký thông báo để trở thành người đầu tiên nhận được những tin tức mới nhất của hãng và cả những chương trình ưu đãi độc quyền hội viên. Đặc biệt với đơn hàng đầu tiên bạn sẽ nhận được khuyến mại 10% trên sản phẩm bất kỳ.  </p>
                <p className="regis-pre">Email:  </p>
                <form action="" className='regis-form'>
                    <input type="email" className='regis-input'/>
                    <button type="submit">Đăng kí </button>
                </form>
                <p className="regis-waning">Nhấp vào <Link to='/'>đây</Link> để đọc thông tin về cách Daniel Wellington xử lý dữ liệu cá nhân của bạn.</p>
            </div>
            <ul className="mxh-list">
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-instagram"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-facebook-f"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-twitter"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-pinterest-p"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-snapchat"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-youtube"></i></Link>
                </li>
                <li className="mxh-item">
                    <Link to="" className="mxh-link"><i class="fa-brands fa-tiktok"></i></Link>
                </li>
            </ul>
        </div>
    );
};

export default RegisterForSale;