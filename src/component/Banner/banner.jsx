import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div>
            <a href="/clock" className="banner">
                <img className="banner-item banner-on-PC" src="https://www.movado.com/on/demandware.static/-/Sites-MovadoUS-Library/default/dwd597930f/content-assets/homepage/MOD-23-198_Content1A_Desktop_Modern_47.jpg" alt="" />
                <img className="banner-item banner-on-Moblie" src="https://www.movado.com/on/demandware.static/-/Sites-MovadoUS-Library/default/dwd1baef3a/content-assets/homepage/MOD-23-198_Content1A_Mobile_Modern_47.jpg" alt="" />
                <div className="banner-info">
                    <p className="banner-1"> LÊN ĐẾN </p>
                    <p className="banner-2"> GIẢM GIÁ 30%</p>
                    <p className="banner-3"> TRÊN CÁC SẢN PHẨM </p>
                    <p className="banner-4"><a href="/clock" className="">Khám phá </a></p>
                </div>
            </a>
            <div className="services-list">
                <div className="service-item">
                    <p className="service-link"><i class="fa-thin fa-truck-fast"></i><span className="service-name">Freeship</span></p>
                </div>
                <div className="service-item">
                    <p className="service-link"><i class="fa-thin fa-box-circle-check"></i><span className="service-name">Hoàn trả miễn phí </span></p>
                </div>
                <div className="service-item">
                    <p className="service-link"><i class="fa-thin fa-watch-fitness"></i><span className="service-name">Bảo hành 2 năm</span></p>
                </div>
            </div>
        </div>
    );
}

export default Banner;