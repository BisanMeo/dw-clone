import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Banner from '../component/Banner/banner';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import ShowProduct from '../component/ShowProduct/ShowProduct';
import productList from '../data/clock.js';
import {useParams} from 'react-router-dom';
import Footer from '../component/footer/footer';

const Clock= () => {
    let arr = productList;
    const {type} = useParams();
    if(type !== undefined){
        arr = arr.filter( (item) => item.for === type);
    }
    console.log("For: ",type);
    console.log('Xử lí: ', arr);
    return (
        <div>
            <Navbar/>
            <Banner/>
            <ShowProduct arr={arr}/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
};

export default Clock;