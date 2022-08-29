import React from 'react';
import './cartItem.css';


function CartItem({item}) {
    const handelRemove = (e) => {
        const idDel = e.target.getAttribute('idDel');
        const cartListNow = localStorage.getItem('cartList');
        const nonTranlaste =  cartListNow;
        const tranlaste = JSON.parse(nonTranlaste);
        const cart = tranlaste;
        const index = cart.findIndex((item) => item.idDel === idDel);
        cart.splice(index,1);
        // Chuyển thành string
        const stringCart = JSON.stringify(cart);
        // Set lại local
        localStorage.setItem('cartList', stringCart);
        window.location.reload();
    }
    
    const money = Number(item.price);
    const price =  money.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })
    return (
        <div className='cart-item-container'>
            <button className="remove-item" onClick={handelRemove} >
                <i class="fa-thin fa-xmark" idDel={item.idDel}></i>
            </button>
            <div className="cart-info">
                <div className="cart-img">
                    <img src={item.img} alt="" />
                </div>
                <div className="cart-info-item">
                    <p className="cart-info-name">{item.name}</p>
                    <p className="cart-info-color">{item.color}</p>
                    <p className="cart-item-price">{price}</p>
                </div>
            </div>
        </div>
    );
}

export default CartItem;