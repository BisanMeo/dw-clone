import React from 'react';
import {useSelector } from 'react-redux';

const CartList = () => {

    const selectors = useSelector((state) => state.listCart);
    console.log(selectors);
 
    return (
        <div>
         <h1>Đây là cartList</h1>
        </div>
    );
}

export default CartList;