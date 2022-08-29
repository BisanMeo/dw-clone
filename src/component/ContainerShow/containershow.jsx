import React, { useState } from 'react';
import AllProducts from '../Product/allProduct';
import './containershow.css';

const Containershow = ({arr}) => {

    const [arrShow, setArrShow] = useState(arr);
    const [colorList, setColorList] = useState([]);
    const [strapList, setstrapList] = useState([]);
    const [isSort, setIsSort] = useState(0);
    
    
    let colorArr = colorList;
    let strapArr = strapList;
    const handelColors = (e) =>{
        if(e.target.checked === true){
            colorArr.push(e.target.value);
        }else{
            let index = colorArr.findIndex((color) => color === e.target.value);
            colorArr.splice(index,1);
        }
        setColorList(colorArr);
    }
    const handelStraps = (e) =>{
        if(e.target.checked === true){
            strapArr.push(e.target.value);
        }else{
            let index = strapArr.findIndex((color) => color === e.target.value);
            strapArr.splice(index,1);
        }
        setstrapList(strapArr);
    }

    let colorFiltered = [];
    let strapFiltered = [];
    const handelFilter = () =>{
        console.log('List màu: ',colorList);
        console.log('List dây: ',strapList);
        if(colorList.length === 0){
            colorFiltered = arr;
        }else{
            colorFiltered = [];
        }

        // Filter Màu
        colorArr.map( item => {
            arr.map( product => {
                if(item === product.Dialcolor){
                    colorFiltered.push(product);
                }
            })
        })
        console.log('Filter màu: ',colorFiltered);
        // Filter Dây
        if(strapList.length === 0){
            strapFiltered = colorFiltered;
        }else{
            strapFiltered = [];
        }
        strapArr.map( item => {
            colorFiltered.map( product => {
                if(item === product.Strap){
                    strapFiltered.push(product); 
                }
            })
        })
        setArrShow(strapFiltered);
        // Đóng slider
        document.getElementById('filter').checked = false;
    }
       
    const handelSort = () =>{
        let value = document.getElementById('sort').value;
        let fakeArr = arrShow;
        switch (value) {
            case 'min':
                fakeArr = fakeArr.sort( (a,b) => a.price - b.price);
                
                break;
            case 'max':
                fakeArr = fakeArr.sort( (a,b) => b.price - a.price);
                break;
            default:
                break;
        }
        setArrShow(fakeArr);
        setIsSort(x => x+1);
    }
    
    return (    
        <div className='container'>
            <div className="sort-filter">
                <div className="filter">
                    <input type="checkbox" name="filter" id="filter" hidden/>
                    <label htmlFor="filter" className='filter-btn'> LỌC <i class="fa-thin fa-filter-list"></i></label>
                    <label htmlFor="filter" className='overlay-sort'></label>
                    <label htmlFor="filter" className='filterContainer'>
                        <p className="filer-container-tilte"> LỌC </p>
                        <label htmlFor="filter" className='exits-filter'><i class="fa-thin fa-xmark"></i></label>
                        <ul className="filter-list">
                            <p className="values-choice-tag">MÀU SẮC: </p>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Đen'/><label htmlFor="">Đen</label></li>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Trắng sữa'/><label htmlFor="">Trắng sữa</label></li>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Hồng'/><label htmlFor="">Hồng</label></li>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Xanh lục'/><label htmlFor="">Xanh lục</label></li>
                        </ul>
                        <ul className="filter-list">
                            <p className="values-choice-tag">DÂY ĐEO: </p>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Dây Link'/><label htmlFor="color">Dây Link</label></li>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Vàng hồng'/><label htmlFor="color">Vàng hồng</label></li>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Dây NATO'/><label htmlFor="color">Dây NATO</label></li>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Dây da'/><label htmlFor="color">Dây da</label></li>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Mắt lưới'/><label htmlFor="color">Mắt lưới</label></li>
                        </ul>
                        <button className="butns-filter" id='sortNow' onClick={handelFilter}>LỌC</button>
                    </label>
                </div>
                <div className="sort">
                    <select name="sort" id="sort" className='sort-btn' onChange={handelSort}>
                        <option value="min"> Sắp xếp theo </option>
                        <option value="min"> Giá thấp đến cao </option>
                        <option value="max"> Giá cao đến thấp</option>
                    </select>
                </div>
            </div>
            {arrShow.length !== 0 && <AllProducts arr={arrShow} sort={isSort} /> }
            {arrShow.length === 0 && <p className='noti'>Không có sản phẩm phù hợp. </p>}
        </div>
    );
};

export default Containershow;