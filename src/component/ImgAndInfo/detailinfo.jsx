import React from 'react';
import glassList from '../../data/glass';
import productList from '../../data/clock';
import jewelsList from '../../data/jewels';
import ImgAddCart from '../ImgandAddCart/imgAddCart';
import MoreInfo from '../MoreInfo/moreInfo';
import './detail.css';
import Get4Products from '../Product/productList';
const DetailInfo = ({product}) => {
    let initList = [];
    if(product.classify === 'glass'){
        initList = glassList;
    }else if(product.classify === 'jewels'){
        initList = jewelsList;
    }else{
        initList = productList;
    }
    let sameClassify = [];
    let i = 0;
    while (i < 4) {
        var rand = initList[Math.floor(Math.random() * initList.length)];
        sameClassify.push(rand);
        i++;
    }
    let allProduct = [];
    allProduct = allProduct.concat(productList, glassList, jewelsList);
    let k = 0;
    let recomenList = [];
    while (k < 4) {
        var rand = allProduct[Math.floor(Math.random() * allProduct.length)];
        recomenList.push(rand);
        k++;
    }
    return (
        <div className='detail-container'>
            <div>
                <ImgAddCart product={product}/>
            </div>
            <div>
                <MoreInfo product={product}/>
            </div>
            <div>
                <p className="title-last">SẢN PHẨM CÙNG LOẠI</p>
                <Get4Products arr={sameClassify}/>
            </div>
            <div>
                <p className="title-last">ĐỀ XUẤT NGẪU NHIÊN</p>
                <Get4Products arr={recomenList}/>
            </div>
        </div>
    );
};

export default DetailInfo;