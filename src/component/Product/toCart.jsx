import React from 'react';
import './productList.css'
const ToCart = () => {
    return (
        <>
            <input type="checkbox" name="" id="toCartBox" hidden/>
            <label htmlFor='toCartBox' className="toCart-Container">
                <p className="toCarttitle">SẢN PHẨM ĐÃ ĐƯỢC THÊM VÀO GIỎ HÀNG </p>
                <a href="/cart" className="toCart-link"> ĐẾN GIỎ HÀNG </a>
                <label htmlFor='toCartBox' className="toCartBtn">TIẾP TỤC MUA HÀNG </label>
            </label>
            <label htmlFor="toCartBox" className='ovelayCart'></label>
        </>
        
    );
};

export default ToCart;