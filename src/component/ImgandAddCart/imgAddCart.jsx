import React from 'react';
import ToCart from '../Product/toCart';
import './img-add.css';
import { v4 as uuidv4 } from 'uuid';

const ImgAddCart = ({product}) => {
    let classify = product.classify;
    switch (classify) {
        case 'jewels':
            classify = "Trang sức";
            break;
        case 'glass':
            classify = "Kính râm";
            break;
        default:
            classify = "Đồng hồ";
            break;
    }
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

    const handelAdd = () =>{
        const id = product.id;
        const img = product.img;
        const name = product.name;
        const color = product.Dialcolor;
        const price = product.price;
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
        <div className='img-add'>
            <div className="img">
                <img src={product.img} alt="" />
            </div>
            <div className="add-container">
                <p className="tag">NEW</p>
                <div className="name-price">
                    <p className="name-item">{product.name}</p>
                    <p className="price">{price}</p>
                </div>
                <div className="classify-color">
                    <p className="classify"> Phân loại: {classify}</p>
                    <p className='color'> Màu sắc: {product.Dialcolor}</p>
                </div>
                <label htmlFor='toCartBox' className='addCart-btn' onClick={handelAdd}>
                    THÊM VÀO GIỎ HÀNG
                </label>
                <ul className="service-list">
                    <li className="service-item"> - FREESHIP</li>
                    <li className="service-item"> - HOÀN TRẢ MIỄN PHÍ</li>
                    <li className="service-item"> - Thuế và lệ phí hải quan sẽ được áp dụng khi giao hàng theo quy định của Hải Quan Việt Nam</li>
                </ul>
            </div>
            <ToCart/>
        </div>
    );
};

export default ImgAddCart;