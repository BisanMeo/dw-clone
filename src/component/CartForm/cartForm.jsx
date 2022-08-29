import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './cartForm.css';
const CartForm = () => {
    let nonTran = localStorage.getItem('sumMoney');
    let money = JSON.parse(nonTran);
    const formik = useFormik({
        initialValues:{
            email: '',
            fisrtName: '',
            lastName: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Đây là thông tin bắt buộc").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Sai định dạng Email"),
            fisrtName: Yup.string().required('Đây là thông tin bắt buộc'),
            lastName: Yup.string().required('Đây là thông tin bắt buộc'),
            phone: Yup.string().required('Đây là thông tin bắt buộc').matches(/^[0-9\-\+]{9,15}$/,"Sai định dạng số điện thoại"),
            address: Yup.string().required('Đây là thông tin bắt buộc'),

        })
    });
    
    const handelClick = () => {
        if(formik.values.fisrtName !== undefined && Object.keys(formik.errors).length === 0){
            document.getElementById('completeBill').checked = true;
        }else{
            window.alert('Bạn chưa nhập thông tin');
        }
        
    };

    return (
        <>
            <p className="form-title"> THÔNG TIN ĐƠN HÀNG </p>
            <form action="" className='cartForm-Box' onSubmit={formik.handleSubmit}>
                <div className="form-item">
                    <legend htmlFor="" className='form-item-title'> Email: </legend>
                    <input type="text" className='form-item-input'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                     <p className='form-item-Msg'>
                        {formik.errors.email && (
                           <span>{formik.errors.email}</span> 
                        )}
                    </p>
                </div>
                <div className="form-item-2">
                    <div className="form-item">
                        <legend htmlFor="" className='form-item-title'> Họ: </legend>
                        <input type="text" className='form-item-input'
                            id='lastName'
                            name='lastName'
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                        />
                         <p className='form-item-Msg'>
                            {formik.errors.lastName && (
                                <span>{formik.errors.lastName}</span> 
                            )}
                        </p>
                    </div>
                    <div className="form-item">
                        <legend htmlFor="" className='form-item-title'> Tên: </legend>
                        <input type="text" className='form-item-input'
                            id='fisrtName'
                            name='fisrtName'
                            onChange={formik.handleChange}
                            value={formik.values.fisrtName}
                        />
                         <p className='form-item-Msg'>
                            {formik.errors.fisrtName && (
                                <span>{formik.errors.fisrtName}</span> 
                            )}
                        </p>
                    </div>
                </div>
                <div className="form-item">
                    <legend htmlFor="" className='form-item-title'> Số điện thoại: </legend>
                    <input type="text" className='form-item-input'
                        id='phone'
                        name='phone'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                     <p className='form-item-Msg'>
                        {formik.errors.phone && (
                           <span>{formik.errors.phone}</span> 
                        )}
                    </p>
                </div>
                <div className="form-item">
                    <legend htmlFor="" className='form-item-title'> Địa chỉ: </legend>
                    <input type="text" className='form-item-input'
                        id='address'
                        name='address'
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                    <p className='form-item-Msg'>
                        {formik.errors.address && (
                           <span>{formik.errors.address}</span> 
                        )}
                    </p>
                </div>
            </form>
            <button type='submit' className="form-link" onClick={handelClick}> Đặt Hàng </button>
            
            <input type="checkbox" id='completeBill' name='completeBill' hidden/>
            <label htmlFor="completeBill" className='overlay'></label>
            <label htmlFor="completeBill" className='completed-cart'>
                <label htmlFor="completeBill" className='exitCompleted'><i class="fa-thin fa-xmark"></i></label>
                <p className="title-completed"> Đặt hàng thành công </p>
                <p className="send-completed"> Cảm ơn bạn đã đặt hàng, {formik.values.lastName} {formik.values.fisrtName}!!!</p>
                <p className="send-completed"> Vui lòng chuẩn bị {money} khi chúng tôi giao hàng!!!</p>
                <a href="/" className="link-completed">Trở về trang chủ</a>
            </label>
        </>
    );
};

export default CartForm;