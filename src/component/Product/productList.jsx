import React, { useState } from 'react';
import '../../Css/grid.css';
import './productList.css';
import productList from '../../data/clock.js';
import Product from '../ProductItem/product';
import PropTypes from "prop-types";

productList.propTypes = {
    productList: PropTypes.array.isRequired,
};

function Get4Products({arr}) {
    const products = arr;
    return ( 
        <div className="grid wide">
            <ul className="row product-list">
                {   
                    products.map( product => 
                        <div className="col l-3 m-4 c-6" key={product.id}>
                            <Product product={product}/>
                        </div>  
                    )
                }
            </ul>
        </div>
    );
}

export default Get4Products;