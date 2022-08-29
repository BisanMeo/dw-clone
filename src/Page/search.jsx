import React from 'react';
import Footer from '../component/footer/footer';
import Navbar from '../component/Navbar/Navbar';
import RegisterForSale from '../component/RegisterforSale/registerforsale';
import SearchContainer from '../component/Search/searchContainer';

const Search = () => {
    return (
        <div>
           <Navbar/>
           <SearchContainer/>
           <RegisterForSale/>
           <Footer/>
        </div>
    );
};

export default Search;