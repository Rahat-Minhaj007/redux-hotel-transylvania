import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addFoodToOrders } from '../../redux/actions/productActions';
import './FoodDetails.css';


const FoodDetails = () => {
    const foods = useSelector((state) => state.allProducts.products);
    const { id } = useParams();
    const food = foods.find(fd => fd.id === parseInt(id))
    let [quantity,setQuantity]= useState(1)
    const handleDecrease=()=>{
        if (quantity>1) {
            setQuantity(quantity-1);
        }
    }
    const handleIncrease=()=>{
        setQuantity(quantity+1)
    }

    //add food to oreder
    const orders = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const addFoodToOrder =()=>{
        let newFood={
            ...food,Quantity:quantity
        }
        dispatch(addFoodToOrders(newFood));
        alert("Your Order has been Placed Successfully!!!")
        setQuantity(1)
    }

    return (
        <div className='container-fluid' style={{ marginTop: '100px' }}>
            <div className='row d-flex justify-content-center align-items-center details'>
                <div className='col-md-4 ' data-aos="fade-down">
                    <h1>{food?.name}</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro omnis officia nobis iure architecto dignissimos ratione ipsa illum dicta molestiae ea voluptates autem asperiores adipisci quibusdam accusantium, voluptas sequi animi, vitae quasi? Accusamus est cumque itaque non earum optio amet eligendi atque, et quia dignissimos, sit laborum corrupti, obcaecati soluta modi ut aliquam necessitatibus eius sed voluptate excepturi! Dolorum.</p>
                    <h3 className="fw-bold">$ {food?.price}</h3>
                    <button className='btn btn-brand fw-bold text-light' onClick={handleDecrease}>-</button> {quantity} <button className='btn btn-brand fw-bold text-light' onClick={handleIncrease}>+</button>
                    <br />
                    <br />
                    <button className='btn btn-brand fw-bold text-light'><Link to='/home' style={{textDecoration:'none',color:'white'}}>BACK</Link></button> <button className='btn btn-brand fw-bold text-light ms-5' onClick={addFoodToOrder}>ADD</button>
                </div>
                <div className='col-md-4' data-aos="fade-up">
                    <img style={{ width: '100%' }} src={food?.img} alt="" />
                </div>

            </div>


        </div>
    );
};

export default FoodDetails;