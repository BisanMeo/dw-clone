import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../component/Banner/banner';
import Footer from '../component/footer/footer';
import Navbar from '../component/Navbar/Navbar';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import ShowJewels from '../component/ShowProduct/ShowJewels';
import jewelsList from '../data/jewels';

const Jewels= () => {
    let arr = jewelsList;
    const {type} = useParams();
    if(type !== undefined){
        arr = arr.filter( (item) => item.type === type);
    }
    console.log("For: ",type);
    console.log('Xử lí: ', arr);
    return (
        <div>
            <Navbar/>
            <Banner/>
            <ShowJewels arr={arr}/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
};

export default Jewels;