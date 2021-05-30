import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../../redux/actions/productActions';
import HeaderMain from '../HeaderMain/HeaderMain';
import HomeTab from '../HomeTab/HomeTab';
import fakeData from "../../fakeData/fakeData.json";
import Feature from '../Feature/Feature';
import Footer from '../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    
    useEffect(() =>{
        AOS.init({duration: 1500});
      }) 

    const products = useSelector(state => state)
    const dispatch = useDispatch();

    const fetchProducts = () => {

        dispatch(setProducts(fakeData))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    console.log("Products:", products);
    return (

        <div>
            <HeaderMain></HeaderMain>
            <div className='container'>
                <HomeTab></HomeTab>
            </div>
            <Feature></Feature>
            <Footer></Footer>

        </div>
    );
};

export default Home;