import React from 'react';
import CartForm from '../CartForm/cartForm';
import CartItem from '../CartItem/cartItem';
import './cart.css';


const CartContainer = () => {
    const cart = localStorage.getItem('cartList');
    const list = JSON.parse(cart);
    const arr = list;
    // Tổng tiền
    let sum = 0;
    arr.map( (item) => {
        const transLate = Number(item.price);
        sum += transLate;
    });
    let sumMoney =  sum.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
    })
    const tranMoney = JSON.stringify(sumMoney);
    localStorage.setItem('sumMoney', tranMoney);
    return (
        <div className='cart-container'>
            <p className="cart-title"> GIỎ HÀNG CỦA BẠN </p>
            <div className="cart-info">
                <div className="cartForm">
                    <CartForm/>
                </div>
                <ul className="cart-list">
                    {
                        arr.map( item => 
                            <li key={item.IdDel}>
                               <CartItem item={item}/>
                            </li>
                        )
                    }
                    <div className="total-cart">
                        <p className='total-item'>TỔNG CỘNG: </p>
                        <p className='total-item'>{sumMoney}</p>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default CartContainer;