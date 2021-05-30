import React from 'react';

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FeatureDetail = (props) => {
    const {img,name,description,icon} = props.ftrData
    return (
        <div className="mt-5 feature team ml-5 mb-4 col-md-3" data-aos="zoom-in">
        <Card
          style={{ width: "21rem", border: "none", background: "none" }}
        >
          <Card.Body
            className="featureBody"
           
          >
            <Card.Img
              style={{ width: "100%" }}
              variant="top"
              src={img}
            />
            <Card.Title className="mt-3">
            <img style={{width:"35px"}} src={icon} alt=""></img> {name}
            </Card.Title>
            <div className="mt-3">
              <h6 style={{ color: "black",textAlign:"justify" }}>$ {description}</h6>
            </div>
            <Link style={{textDecoration:"none",fontWeight:"600"}}  to="#">See More <FontAwesomeIcon   icon={faArrowRight} /></Link>
          </Card.Body>
        </Card>
      </div>
    );
};

export default FeatureDetail;