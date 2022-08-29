import React from 'react';
import ContainerGlass from '../ContainerShow/containerGlass';
import './showproduct.css';
const ShowGlass = ({arr}) => {
    return (
        <div className="show-product">
            <div className="grid wide" >
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <p className="show-product-title"> TẠO ẤN TƯỢNG </p>
                        <p className="show-product-important">TỪ THIẾT KẾ BẮT MẮT CỦA DANIEL WELLINGTON</p>
                    </div>
                </div>
            </div>
            <ContainerGlass arr={arr}/>
        </div>
       
    );
};

export default ShowGlass;