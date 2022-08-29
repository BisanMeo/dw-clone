import React from 'react';
import ClockList from '../InfoList/clockList';
import GlassList from '../InfoList/glassList';
import JewelsList from '../InfoList/jewelsList';
import './moreinfo.css';
const MoreInfo = ({product}) => {
    let test = 'Iconic Link Mint nổi bật với mặt số màu xanh hồ trăn. Lấy cảm hứng từ phong cách Bãi biển những năm 80, kiệt tác cổ điển hiện đại này tạo phong cách tươi mới cho vẻ ngoài của bạn. Được chế tác bằng thép không gỉ, có sẵn lớp mạ bạc. Hãy để chiếc đồng hồ này tô điểm cho phong cách hàng ngày của bạn khi bạn cần một thứ màu sắc tinh tế.Iconic Link Mint không chỉ là một chiếc đồng hồ sang trọng với mặt đồng hồ màu xanh lá cây tươi mới. ';
    let classify = product.classify;
    console.log(classify);
    let para1 = '';
    let para2 = '';
    if(product.description.length > 435){
        para1 = product.description.slice(0, 435);
        para2 = product.description.slice(435, product.description.length);
    }else{
        para1 = product.description
    }
    return (
        <div className='moreInfo-Container'>
           <p className="title">THÔNG TIN CHI TIẾT </p>
           <div className="more-info">
                <div className="description">
                    <p className="description-item">
                        {para1}
                    </p>
                    <p className="description-item">
                        {para2}
                    </p>
                </div>
                <div className="info-list">
                    {classify === 'clock' && <ClockList product={product}/>}  
                    {classify === 'glass' && <GlassList product={product}/>} 
                    {classify === 'jewels' && <JewelsList product={product}/>}   
                </div>
           </div>
        </div>
    );
};

export default MoreInfo;