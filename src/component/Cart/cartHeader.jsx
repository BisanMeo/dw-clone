import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

const CartHeader = () => {
    return (
        <div className="header-cart">
            <Link to="/" className="cart-return-link"><i class="fa-thin fa-arrow-left"></i><span className='onMoblie-none'>Tiếp tục mua sắp</span></Link>
            <p className="name">DANIEL WALLINGTON</p>
        </div>
    );
}
export default CartHeader;