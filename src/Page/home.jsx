import React from 'react';
import BannerFooter from '../component/4Banner/4Banner';
import Banner from '../component/Banner/banner';
import Footer from '../component/footer/footer';
import Navbar from '../component/Navbar/Navbar';
import Get4Products from '../component/Product/productList';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import Tag from '../component/Tag/Tag';
import productList from '../data/clock';

const Home = () => {
    let arrInit = productList;
    let i = 0;
    let arr = [];
    while (i < 4) {
        var rand = arrInit[Math.floor(Math.random() * arrInit.length)];
        arr.push(rand);
        i++;
    }
    console.log(arr);
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Tag/>
            <Get4Products arr={arr}/>
            <BannerFooter/>
            <RegisterForSale/>
            <Footer/>
        </div>
    );
}
export default Home;