import React from 'react';
import './nav.css';

const Navbar = () => {
    return (
        <div>
            {/* Nav in PC */}
            <div className='onPC'>
                <div className="logo-container">
                    <div className="span"></div>
                    <a href='/' className="span logo"> DANIEL WALLINGTON</a>
                    <div className="span cart-wish">
                        <div className="wishlist">
                            <a href="/search" className="wishlist-item"><i class="fa-thin fa-magnifying-glass"></i></a>
                        </div>
                        <div className="cart">
                            <a href="/cart" className="cart-item"><i class="fa-thin fa-cart-shopping"></i></a>
                        </div>
                    </div>
                </div>
                <div className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="/" className="nav-link">TRANG CHỦ </a></li>
                        <li className="nav-item">
                            <a href="/clock" className="nav-link"> ĐỒNG HỒ </a>
                                <ul className="sub-list">
                                    <li className="sub-item">
                                        <a href="/clock" className="sub-link">Tất cả đồng hồ</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/clock/men" className="sub-link">Đồng hồ nam</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/clock/women" className="sub-link">Đồng hồ nữ</a>
                                    </li>
                                </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/jewels" className="nav-link">TRANG SỨC </a>
                            <ul className="sub-list">
                                    <li className="sub-item">
                                        <a href="/jewels" className="sub-link">Tất cả trang sức</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/jewels/earrings" className="sub-link">Khuyên tai</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/jewels/necklage" className="sub-link">Dây chuyền</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/jewels/bracelet" className="sub-link">Vòng tay</a>
                                    </li>
                                    <li className="sub-item">
                                        <a href="/jewels/ring" className="sub-link">Nhẫn</a>
                                    </li>
                            </ul>    
                        </li>
                        <li className="nav-item"><a href="/glass" className="nav-link">KÍNH RÂM </a></li>
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
                                    <a href="/" className="sidebar-link">Trang chủ</a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="/clock" className="sidebar-link">Đồng hồ</a>
                                    <ul className="sidebar-sub">
                                        <li className="sidebar-sub-item">
                                            <a href="/clock" className="sidebar-sub-link">
                                                Tất cả đồng hồ
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/clock/men" className="sidebar-sub-link">
                                                Đồng hồ Nam
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/clock/women" className="sidebar-sub-link">
                                                Đồng hồ Nữ
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="/men" className="sidebar-link">Trang sức</a>
                                    <ul className="sidebar-sub">
                                        <li className="sidebar-sub-item">
                                            <a href="/jewels" className="sidebar-sub-link">
                                              Tất cả trang sức
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/jewels/earrings" className="sidebar-sub-link">
                                               Khuyên tai
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/jewels/necklage" className="sidebar-sub-link">
                                               Dây chuyền
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/jewels/bracelet" className="sidebar-sub-link">
                                               Lắc tay
                                            </a>
                                        </li>
                                        <li className="sidebar-sub-item">
                                            <a href="/jewels/ring" className="sidebar-sub-link">
                                              Nhẫn
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sidebar-item">
                                    <a href="/glass" className="sidebar-link">Kính râm</a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="/" className="sidebar-link">Liên hệ</a>
                                </li>
                            </ul>
                        </label>
                   </div>
                    <a href="/home" className="chat-link-mobile"><i class="fa-thin fa-comment"></i></a>
                    <a href="/search" className="wishlist-link-mobile"><i class="fa-thin fa-magnifying-glass"></i></a>
                    <a href="/cart" className="cart-link-mobile"><i class="fa-thin fa-cart-shopping"></i></a>
                </div>
            </div>

        </div>

    );
}

export default Navbar;