import React from 'react';
import './listInfo.css';
const JewelsList = ({product}) => {
    return (
        <ul className='classList'>
            <li className="classList-item">
                <p className="name-value">Mã hàng</p>
                <p className="value">{product.SKU}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Đường kính</p>
                <p className="value">{product.Casethickness}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Màu</p>
                <p className="value">{product.Dialcolor}</p>
            </li>
            <li className="classList-item">
                <p className="name-value">Vật liệu</p>
                <p className="value">{product.material}</p>
            </li>
        </ul>
    );
};

export default JewelsList;