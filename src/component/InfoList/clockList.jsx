import React from 'react';
import './listInfo.css';
const ClockList = ({product}) => {
    return (
        <ul className='classList'>
            <li className="classList-item">
                <p className="name-value">Mã hàng</p>
                <p className="value">{product.SKU}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Độ dày trường hợp</p>
                <p className="value">{product.Casethickness}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Màu</p>
                <p className="value">{product.Dialcolor}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Động cơ</p>
                <p className="value">{product.Movement}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Chất liệu</p>
                <p className="value">{product.Material}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Độ dài dây đeo</p>
                <p className="value">{product.Strapwidth}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Độ dài có thể điều chỉnh</p>
                <p className="value">{product.Adjustablelength}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Dây đeo</p>
                <p className="value">{product.Strap}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Dây hoán đổi</p>
                <p className="value">{product.Strapchange}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Chống nước mưa</p>
                <p className="value">{product.Waterresistant}</p>
            </li>
        </ul>
    );
};

export default ClockList;