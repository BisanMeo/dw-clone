import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import productList from '../data/clock';
import glassList from '../data/glass';
import jewelsList from '../data/jewels';
import DetailInfo from '../component/ImgAndInfo/detailinfo';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import Footer from '../component/footer/footer';

const Detail = () => {
    // Nối mảng
    let allProduct = [];
    allProduct = allProduct.concat(productList,glassList,jewelsList);
    let {code} = useParams();
    code = Number(code);
    let product = allProduct.find(item => item.id === code);
    return (
        <div>
            <Navbar/>
            <DetailInfo product={product}/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
};

export default Detail;