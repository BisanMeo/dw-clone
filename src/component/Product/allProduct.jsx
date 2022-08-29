import React from 'react';
import '../../Css/grid.css';
import Product from '../ProductItem/product';
import './productList.css';


function AllProducts({arr}) {
    let product = arr;
    return ( 
        <div className="grid wide">
            <ul className="row product-list">
                {   
                    arr.map( product => 
                        <div className="col l-3 m-4 c-6" key={product.id}>
                           <Product product={product}/>
                        </div>  
                    )
                }
            </ul>
        </div>
    );
}

export default AllProducts;