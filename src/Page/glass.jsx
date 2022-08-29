import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import Banner from '../component/Banner/banner';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import ShowProduct from '../component/ShowProduct/ShowProduct';
import glassList from '../data/glass';
import ShowGlass from '../component/ShowProduct/ShowGlass';
import Footer from '../component/footer/footer';

const Glass= () => {
    const arr = glassList;
    return (
        <div>
            <Navbar/>
            <Banner/>
            <ShowGlass arr={arr}/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
};

export default Glass;