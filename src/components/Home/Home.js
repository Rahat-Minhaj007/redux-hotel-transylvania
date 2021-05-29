import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import HomeTab from '../HomeTab/HomeTab';

const Home = () => {
    return (
        <div>
            <HeaderMain></HeaderMain>
            <div className='container'>
                <HomeTab></HomeTab>
            </div>

        </div>
    );
};

export default Home;