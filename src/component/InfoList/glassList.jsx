import React from 'react';
import './listInfo.css';
const GlassList = ({product}) => {
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
                <p className="name-value">Màu gọng</p>
                <p className="value">{product.Framecolor}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Chất liệu</p>
                <p className="value">{product.Glassesmaterial}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Chất liệu gọng</p>
                <p className="value">{product.Framematerial}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Chống va đập</p>
                <p className="value">{product.Shockresistance}</p>
            </li>
        </ul>
    );
};

export default GlassList;