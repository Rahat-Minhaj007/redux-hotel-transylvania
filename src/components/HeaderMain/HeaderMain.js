import React from 'react';
import './HeaderMain.css';
import Typical from 'react-typical'
import banner from '../../components/images/banner/banner.png';

const HeaderMain = () => {
    return (
        <div id='headerMain' className='container-fluid  headerMain offset-sm-1'>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-4 text-uppercase' data-aos="fade-down">
                    <h1>Welcome To <br />hotel transylvania</h1>
                    <h3>
                    <Typical
                        steps={[
                             
                            'Best Food Waiting For Your Belly', 5000,
                            'Best Environment Waiting For Your Eyes',5000,
                            'Best Moment Waiting For Your Beloved One',5000,
                            
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    </h3>
                </div>
                <div className='col-md-7' data-aos="fade-up">
                    <img style={{width:'100%'}} src={banner} alt="" />
                </div>

            </div>

            
        </div>
    );
};

export default HeaderMain;