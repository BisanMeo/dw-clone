import React, { useState } from 'react';
import './search.css';
import productList from '../../data/clock';
import glassList from '../../data/glass';
import jewelsList from '../../data/jewels';
import AllProducts from '../Product/allProduct';

const SearchContainer = () => {
    const [param, setParam] = useState('');
    const [arrShow, setArrShow] = useState([]);
    const handelChange = (e) =>{
        let value = e.target.value;
        value = value.toLowerCase();
        setParam(value);
        let allData = [];
        allData = allData.concat(productList,glassList,jewelsList);
        for(let i = 0; i < allData.length; i++){
            allData[i].name = allData[i].name.toLowerCase();
        }
        const searchValue = [];
        allData.map( item => {
            if( item['name'].includes(param)){
                searchValue.push(item.id);
            }
        })
        console.log('Kết quả chưa xử lí: ',searchValue);

        // Lấy mảng hoàn chỉnh
        let newArr = [];
        newArr = newArr.concat(productList,glassList,jewelsList);
        let result = [];
        console.log(newArr);
        searchValue.map(id =>{
            newArr.map( item => {
                if(item.id === id){
                    result.push(item);
                }
            })
        })
        setArrShow(result);
    }
    
    return (
        <div className='searchContainer'>
            <div className="search-box">
                <input type="text" id='searchParam' placeholder='Nhập thông tin tìm kiếm ở đây' value={param} onChange={handelChange}/>
            </div>
            <p className="result-title"> KẾT QUẢ TÌM KIẾM </p>
            <p className="result-num"> {arrShow.length} sản phẩm</p>
            {arrShow.length !== 0 && <AllProducts arr={arrShow} /> }
            {arrShow.length === 0 && <p className='noti'>Không có sản phẩm phù hợp. </p>}
        </div>
    );
};

export default SearchContainer;