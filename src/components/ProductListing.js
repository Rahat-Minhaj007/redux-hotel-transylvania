import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import fakeData from '../fakeData/fakeData.json';



const ProductListing = () => {
    const products= useSelector(state => state)
    const dispatch=useDispatch();

    const fetchProducts=()=>{
       
        dispatch(setProducts(fakeData))
    }

    useEffect(()=>{
        fetchProducts()
    },[])
    console.log("Products:",products);
    return (
        <div className='ui grid container' style={{paddingTop:'4rem'}}>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;