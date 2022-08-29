import React from 'react';
import CartContainer from '../component/Cart/cart';
import CartHeader from '../component/Cart/cartHeader';
import Footer from '../component/footer/footer';
import RegisterForSale from '../component/RegisterforSale/registerforsale';

const Cart = () => {
    return (
        <div className='cart'>
            <CartHeader/>
            <CartContainer/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
}
export default Cart;