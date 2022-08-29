import React, { useState } from 'react';
import './containershow.css';
import AllProducts from '../Product/allProduct';

const ContainerGlass = ({arr}) => {
    console.log('Cha truyền xuống: ',arr);
    const [arrShow, setArrShow] = useState(arr);
    const [colorList, setColorList] = useState([]);
    const [strapList, setstrapList] = useState([]);
    const [matirialList, setMatirialList] = useState([]);
    const [isSort, setIsSort] = useState(0);
    
    
    let colorArr = colorList;
    let strapArr = strapList;
    let matirialArr = matirialList;
    const handelColors = (e) =>{
        console.log('Value màu: ',e.target.value);
        if(e.target.checked === true){
            colorArr.push(e.target.value);
        }else{
            let index = colorArr.findIndex((color) => color === e.target.value);
            colorArr.splice(index,1);
        }
        setColorList(colorArr);
    }
    const handelStraps = (e) =>{
        console.log('Value màu gọng: ',e.target.value);
        if(e.target.checked === true){
            strapArr.push(e.target.value);
        }else{
            let index = strapArr.findIndex((color) => color === e.target.value);
            strapArr.splice(index,1);
        }
        setstrapList(strapArr);
    }
    const handelMatirial = (e) =>{
        console.log('Value màu dây: ',e.target.value);
        if(e.target.checked === true){
            matirialArr.push(e.target.value);
        }else{
            let index = matirialArr.findIndex((item) => item === e.target.value);
            matirialArr.splice(index,1);
        }
        setMatirialList(matirialArr);
    }

    let colorFiltered = [];
    let strapFiltered = [];
    let matirialFiltered = [];
    const handelFilter = () =>{
        console.log("List màu: ", colorList);
        console.log("List màu gọng: ", strapList);
        console.log("List vật liệu: ", matirialList);
        // Filter Màu
        if(colorList.length === 0){
            colorFiltered = arr;
        }else{
            colorFiltered = [];
        }
        colorList.map( item => {
            arr.map( product => {
                if(item === product.Dialcolor){
                    colorFiltered.push(product);
                }
            })
        })
        console.log('Filter màu: ',colorFiltered);
        // Filter Màu gọng
        if(strapList.length === 0){
            strapFiltered = colorFiltered;
        }else{
            strapFiltered = [];
        }
        strapArr.map( item => {
            colorFiltered.map( product => {
                if(item === product.Framecolor){
                    strapFiltered.push(product); 
                }
            })
        })
        console.log('Filter màu gọng: ',strapFiltered);
        // Filter Vật liệu
        if(matirialList.length === 0){
            matirialFiltered = strapFiltered;
        }else{
            matirialFiltered = [];
        }
        matirialList.map( item => {
            strapFiltered.map( product => {
                if(item === product.Framematerial){
                    matirialFiltered.push(product); 
                }
            })
        })
        setArrShow(matirialFiltered);
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
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Hổ phách'/><label htmlFor="">Hổ phách</label></li>
                        </ul>
                        <ul className="filter-list">
                            <p className="values-choice-tag">MÀU GỌNG: </p>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Nâu demi'/><label htmlFor="color">Nâu demi</label></li>
                            <li className="filter-item"><input type="checkbox" className='straps' onClick={handelStraps} name="straps" id="" value='Hoa hồng vàng'/><label htmlFor="color">Hoa hồng vàng</label></li>
                        </ul>
                        <ul className="filter-list">
                            <p className="values-choice-tag">CHẤT LIỆU GỌNG: </p>
                            <li className="filter-item"><input type="checkbox" className='material' onClick={handelMatirial} name="material" id="" value='Thép không gỉ nhẹ (304)'/><label htmlFor="color">Thép không gỉ nhẹ (304)</label></li>
                            <li className="filter-item"><input type="checkbox" className='material' onClick={handelMatirial} name="material" id="" value='Acetate sinh học nhẹ'/><label htmlFor="color">Acetate sinh học nhẹ</label></li>
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

export default ContainerGlass;