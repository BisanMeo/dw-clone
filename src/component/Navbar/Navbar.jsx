import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return (
        <div>
            {/* Nav in PC */}
            <div className='onPC'>
                <div className="logo-container">
                    <div className="span"></div>
                    <Link to="/" className="span logo"> DANIEL WALLINGTON</Link>
                    <div className="span cart-wish">
                        <div className="wishlist">
                            <Link to="/search" className="wishlist-item"><i class="fa-thin fa-magnifying-glass"></i></Link>
                        </div>
                        <div className="cart">
                            <Link to="/cart" className="cart-item"><i class="fa-thin fa-cart-shopping"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/" className="nav-link">TRANG CHỦ </Link></li>
                        <li className="nav-item">
                            <Link to="/clock" className="nav-link"> ĐỒNG HỒ </Link>
                                <ul className="sub-list">
                                    <li className="sub-item">
                                        <Link to="/clock" className="sub-link">Tất cả đồng hồ</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/clock/men" className="sub-link">Đồng hồ nam</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/clock/women" className="sub-link">Đồng hồ nữ</Link>
                                    </li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/jewels" className="nav-link">TRANG SỨC </Link>
                            <ul className="sub-list">
                                    <li className="sub-item">
                                        <Link to="/jewels" className="sub-link">Tất cả trang sức</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/jewels/earrings" className="sub-link">Khuyên tai</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/jewels/necklage" className="sub-link">Dây chuyền</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/jewels/bracelet" className="sub-link">Vòng tay</Link>
                                    </li>
                                    <li className="sub-item">
                                        <Link to="/jewels/ring" className="sub-link">Nhẫn</Link>
                                    </li>
                            </ul>    
                        </li>
                        <li className="nav-item"><Link to="/glass" className="nav-link">KÍNH RÂM </Link></li>
                    </ul>
                </div>
            </div>
            {/* Nav in Moblile */}
            <div className="onMobile">
                <div className="logo-mobile">
                    <p className="logo-mobile-item">DANIEL WALLINGTON</p>
                </div>
                <div className="nav-mobile">
                   <div className="sidebar">
                        <input type="checkbox" id='sidebar' hidden/>
                        <label htmlFor="sidebar" class="sidebar-in"><i class="fa-thin fa-bars"></i></label>
                        <label htmlFor="sidebar" class="sidebar-ovelay"></label>
                        <label htmlFor="sidebar" class="sidebar-container">
                            <div className="nav-sidebar">
                                <p className="sidebar-noti">MENU</p>
                                <label htmlFor="sidebar" className='sidebar-out'><i class="fa-thin fa-circle-xmark"></i></label>
                            </div>
                            <ul className="sidebar-list">
                                <li className="sidebar-item">
                                    <Link to="/" className="sidebar-link">Trang chủ</Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/clock" className="sidebar-link">Đồng hồ</Link>
                                    <ul className="sidebar-sub">
                                        <li className="sidebar-sub-item">
                                            <Link to="/clock" className="sidebar-sub-link">
                                                Tất cả đồng hồ
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/clock/men" className="sidebar-sub-link">
                                                Đồng hồ Nam
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/clock/women" className="sidebar-sub-link">
                                                Đồng hồ Nữ
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/men" className="sidebar-link">Trang sức</Link>
                                    <ul className="sidebar-sub">
                                        <li className="sidebar-sub-item">
                                            <Link to="/jewels" className="sidebar-sub-link">
                                              Tất cả trang sức
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/jewels/earrings" className="sidebar-sub-link">
                                               Khuyên tai
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/jewels/necklage" className="sidebar-sub-link">
                                               Dây chuyền
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/jewels/bracelet" className="sidebar-sub-link">
                                               Lắc tay
                                            </Link>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <Link to="/jewels/ring" className="sidebar-sub-link">
                                              Nhẫn
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/glass" className="sidebar-link">Kính râm</Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link to="/" className="sidebar-link">Liên hệ</Link>
                                </li>
                            </ul>
                        </label>
                   </div>
                    <Link to="/home" className="chat-link-mobile"><i class="fa-thin fa-comment"></i></Link>
                    <Link to="/search" className="wishlist-link-mobile"><i class="fa-thin fa-magnifying-glass"></i></Link>
                    <Link to="/cart" className="cart-link-mobile"><i class="fa-thin fa-cart-shopping"></i></Link>
                </div>
            </div>

        </div>

    );
}

export default Navbar;