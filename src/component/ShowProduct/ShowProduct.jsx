import React from 'react';
import Containershow from '../ContainerShow/containershow';
import './showproduct.css';
const ShowProduct = ({arr}) => {
    return (
        <div className="show-product">
            <div className="grid wide" >
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <p className="show-product-title"> MUA BẤT KỲ ĐỒNG HỒ ICONIC </p>
                        <p className="show-product-important">VÀ THÊM VÒNG TAY CỔ ĐIỂN MIỄN PHÍ</p>
                    </div>
                </div>
            </div>
            <Containershow arr={arr}/>
        </div>
       
    );
};

export default ShowProduct;