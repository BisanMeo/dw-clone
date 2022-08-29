import React from 'react';
import ContainerJewels from '../ContainerShow/containerJewels';
import './showproduct.css';
const ShowJewels = ({arr}) => {
    return (
        <div className="show-product">
            <div className="grid wide" >
                <div className="row">
                    <div className="col l-12 m-12 c-12">
                        <p className="show-product-title"> ĐỊNH NGHĨA MỚI  </p>
                        <p className="show-product-important">CỦA SỰ THANH LỊCH</p>
                    </div>
                </div>
            </div>
           <ContainerJewels arr={arr}/>
        </div>
       
    );
};

export default ShowJewels;