import React, { useState } from 'react';
import AllProducts from '../Product/allProduct';
import './containershow.css';

const ContainerJewels = ({arr}) => {

    const [arrShow, setArrShow] = useState(arr);
    const [typeList, setTypeList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [materialList, setMaterialList] = useState([]);
    const [isSort, setIsSort] = useState(0);
    
    let typeArr = typeList;
    let colorArr = colorList;
    let materialArr = materialList;
    const handelTypes = (e) =>{
        if(e.target.checked === true){
            typeArr.push(e.target.value);
        }else{
            let index = typeArr.findIndex((color) => color === e.target.value);
            typeArr.splice(index,1);
        }
        setTypeList(typeArr);
    }
    const handelColors = (e) =>{
        if(e.target.checked === true){
            colorArr.push(e.target.value);
        }else{
            let index = colorArr.findIndex((color) => color === e.target.value);
            colorArr.splice(index,1);
        }
        setColorList(colorArr);
    }
    const handelMaterial = (e) =>{
        if(e.target.checked === true){
            materialArr.push(e.target.value);
        }else{
            let index = materialArr.findIndex((color) => color === e.target.value);
            materialArr.splice(index,1);
        }
        setMaterialList(materialArr);
    }

    let typesFiltered = [];
    let colorFiltered = [];
    let materialFiltered = [];

    const handelFilter = () =>{
        console.log('List loại: ',materialList);
        console.log('List màu: ',colorList);
        console.log('List dây: ',materialList);
        // Filter Loại
        if(typeList.length === 0){
            typesFiltered = arr;
        }else{
            typesFiltered = [];
        }
        typeList.map( item => {
            arr.map( product => {
                if(item === product.type){
                    typesFiltered.push(product);
                }
            })
        })
        console.log('Filter loại: ',typesFiltered);
        // Filter Màu
        if(colorList.length === 0){
            colorFiltered = typesFiltered;
        }else{
            colorFiltered = [];
        }
        colorList.map( item => {
            typesFiltered.map( product => {
                if(item === product.Dialcolor){
                    colorFiltered.push(product); 
                }
            })
        })
        console.log('Filter màu: ',colorFiltered);
        // Filter Material
        if(materialList.length === 0){
            materialFiltered = colorFiltered;
        }else{
            materialFiltered = [];
        }
        materialList.map( item => {
            colorFiltered.map( product => {
                if(item === product.material){
                    materialFiltered.push(product); 
                }
            })
        })
        setArrShow(materialFiltered);
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
                            <p className="values-choice-tag">LOẠI: </p>
                            <li className="filter-item"><input type="checkbox" className='types' onClick={handelTypes} name="types" id="" value='bracelet'/><label htmlFor="">Vòng đeo tay</label></li>
                            <li className="filter-item"><input type="checkbox" className='types' onClick={handelTypes} name="types" id="" value='ring'/><label htmlFor="">Nhẫn</label></li>
                            <li className="filter-item"><input type="checkbox" className='types' onClick={handelTypes} name="types" id="" value='earrings'/><label htmlFor="">Khuyên tai</label></li>
                            <li className="filter-item"><input type="checkbox" className='types' onClick={handelTypes} name="types" id="" value='necklage'/><label htmlFor="">Dây chuyền</label></li>
                        </ul>
                        <ul className="filter-list">
                            <p className="values-choice-tag">MÀU SẮC: </p>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Vàng hồng'/><label htmlFor="">Vàng hồng</label></li>
                            <li className="filter-item"><input type="checkbox" className='colors' onClick={handelColors} name="colors" id="" value='Đen'/><label htmlFor="">Đen</label></li>
                        </ul>
                        <ul className="filter-list">
                            <p className="values-choice-tag">VẬT LIỆU: </p>
                            <li className="filter-item"><input type="checkbox" className='material' onClick={handelMaterial} name="material" id="" value='Thép không gỉ (316L) và mạ vàng hồng'/><label htmlFor="color">Thép không gỉ (316L) và mạ vàng hồng</label></li>
                            <li className="filter-item"><input type="checkbox" className='material' onClick={handelMaterial} name="material" id="" value='Thép không gỉ mạ hai lớp (316L)'/><label htmlFor="color">Thép không gỉ mạ hai lớp (316L)</label></li>
                            <li className="filter-item"><input type="checkbox" className='material' onClick={handelMaterial} name="material" id="" value='Thép không gỉ (316L) với sắc vàng hồng và hoạ tiết gốm sứ'/><label htmlFor="color">Thép vàng hồng và hoạ tiết gốm sứ</label></li>
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

export default ContainerJewels;