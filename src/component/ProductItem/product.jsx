import React from 'react';
import ToCart from '../Product/toCart';
import './product.css';
import { v4 as uuidv4 } from 'uuid';

function Product({product}) {
    
    // Định dạng tiền
    let price = Number(product.price);
    price = price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
    })
    const addCart = (obj) => {
        //Nhận giá trị của localStoger
        const list = localStorage.getItem('cartList');
        const nontranlaste = list;
        const translate = JSON.parse(nontranlaste);
        const newCart = translate;
        console.log('list: ',newCart);
         //2 trường hợp thêm vào
        if(newCart.length === 0){
            newCart.push(obj);
        }else{
            const isExisted = newCart.find( item => item.id === obj.id);
            if(!isExisted){
                newCart.push(obj);
            }else{
                const idx = newCart.findIndex( item => item.id === obj.id);
                newCart.splice(idx,0,obj);
            }
        }
        //Chuyển thành JSON
        const newArr = JSON.stringify(newCart);
        //Lưu vào Local
        localStorage.setItem('cartList', newArr);
        console.log(localStorage.getItem('cartList'));
    }

    const handelAdd = (e) =>{
        const container = e.target.parentElement.parentElement.parentElement.parentElement;
        const id = container.getAttribute('idPro');
        const img = container.querySelector('.product-img-item').getAttribute('src');
        const name = container.querySelector('.product-name').innerHTML;
        const color = container.querySelector('.product-color').innerText;
        const price = container.querySelector('.product-price').getAttribute('price');
        const obj = {
            "id": id,
            "idDel":  uuidv4(),
            "name": name,
            "img": img,
            "color": color,
            "price": price
        }
        addCart(obj);
    }

 
    return (
        <a href={`/detail/${product.id}`} className='product-container' idPro={product.id}>
           <div className="product-img">
                <img src={product.img} alt="" className="product-img-item"/>
                <div className="product-btns">
                    <span></span>
                    <label htmlFor='toCartBox' className='product-btn' onClick={handelAdd}  idAddCart={product.id}><i class="fa-thin fa-cart-plus"></i></label>
                </div>
           </div>
           <div className="product-info">
                <p className="product-tag">NEW</p>
                <p className="product-name">{product.name}</p>
                <p className="product-color">{product.Dialcolor}</p>
                <p className="product-price" price={product.price}>{price} VND</p>
           </div>
           <ToCart/>
        </a>
    );
}

export default Product;