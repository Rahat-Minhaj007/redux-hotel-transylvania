import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return (
        <div>
            <div className="container-fluid homeFooter mt-3" id="contact">
                <div className="row ">
                    <div className="col-md-3 ml-5 mt-5 footerLogo text-light">
                        <h3>HOTEL TRANSYLVANIA</h3>
                    </div>
                    <div style={{ color: "white" }} className="col-md-3 mt-3">
                        <p>About Online Food</p>
                        <p>Read Our Blog</p>
                        <p>Sign Up To Deliver</p>
                        <p>Add Your Restaurant</p>
                    </div>
                    <div style={{ color: "white" }} className="col-md-3 mt-3">
                        <p>Get Help</p>
                        <p>Read FAQs</p>
                        <p>View All Cities</p>
                        <p>Restaurants Near Me</p>
                    </div>
                    <div style={{ color: "white" }} className="col-md-3 mt-3">
                        <h5>Contact Us</h5>
                        <hr />
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 286/235 Astoria,USA</p>
                        <p><FontAwesomeIcon icon={faPhone} /> +189-898979<br />+167-765434</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> info@hotel-transylvania.org</p>
                        <h2><FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} /></h2>
                    </div>
                </div>

                <div className="row mt-5 ">
                    <div className="col-md-5 ml-5 mt-5">
                        <small style={{ color: "whiteSmoke" }}>copyrights©HT 2021,all rights reserved</small>
                    </div>
                    <div style={{ color: "white" }} className="col-md-2 mt-5">
                        <p>Private Policy</p>
                    </div>
                    <div style={{ color: "white" }} className="col-md-2 mt-5">
                        <p>Terms Of Use</p>
                    </div>
                    <div style={{ color: "white" }} className="col-md-2 mt-5">
                        <p>Pricing</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;