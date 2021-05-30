import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './FoodDetails.css';


const FoodDetails = () => {
    const foods = useSelector((state) => state.allProducts.products);
    const { id } = useParams();
    const food = foods.find(fd => fd.id === parseInt(id))

    return (
        <div className='container-fluid' style={{ marginTop: '100px' }}>
            <div className='row d-flex justify-content-center align-items-center details'>
                <div className='col-md-4 ' data-aos="fade-down">
                    <h1>{food?.name}</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore porro omnis officia nobis iure architecto dignissimos ratione ipsa illum dicta molestiae ea voluptates autem asperiores adipisci quibusdam accusantium, voluptas sequi animi, vitae quasi? Accusamus est cumque itaque non earum optio amet eligendi atque, et quia dignissimos, sit laborum corrupti, obcaecati soluta modi ut aliquam necessitatibus eius sed voluptate excepturi! Dolorum.</p>
                    <h3 className="fw-bold">$ {food?.price}</h3>
                    <button className='btn btn-brand fw-bold text-light'>-</button> 1 <button className='btn btn-brand fw-bold text-light'>+</button>
                    <br />
                    <br />
                    <button className='btn btn-brand fw-bold text-light'><Link to='/home' style={{textDecoration:'none',color:'white'}}>BACK</Link></button> <button className='btn btn-brand fw-bold text-light ms-5'>ADD</button>
                </div>
                <div className='col-md-4' data-aos="fade-up">
                    <img style={{ width: '100%' }} src={food?.img} alt="" />
                </div>

            </div>


        </div>
    );
};

export default FoodDetails;