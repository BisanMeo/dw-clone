import React from 'react';
import './cart.css';
const CartHeader = () => {
    return (
        <div className="header-cart">
            <a href="/" className="cart-return-link"><i class="fa-thin fa-arrow-left"></i><span className='onMoblie-none'>Tiếp tục mua sắp</span></a>
            <p className="name">DANIEL WALLINGTON</p>
        </div>
    );
}
export default CartHeader;