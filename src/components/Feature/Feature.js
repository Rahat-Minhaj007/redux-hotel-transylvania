import React from 'react';
import './Feature.css';
import FeatureDetail from '../FeatureDetail/FeatureDetail';
import featureData from "../../fakeData/fakeData2.json";

const Feature = () => {
    return (
        <div className="container mt-5 " id='review'>
            <div className="featureContent">
                <h1>Why You Choose Us..?</h1>
                <h6>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
                    nulla, sint voluptate a sapiente aliquid incidunt dolore ducimus
                    dolorum qui praesentium!
          </h6>
            </div>
            <div className="row d-flex justify-content-center">
                {featureData.map((ftr) => (
                    <FeatureDetail ftrData={ftr} key={ftr.id}></FeatureDetail>
                ))}
            </div>
        </div>
    );
};

export default Feature;