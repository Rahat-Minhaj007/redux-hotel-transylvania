/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand  fw-bold fs-4" href="#">HOTEL-TRANSYLVANIA</Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link me-5 active text-dark fw-bold fs-6" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-5 text-dark fw-bold fs-6" href="#food">Foods</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/orders' style={{textDecoration:'none'}}> <a className="nav-link me-5 text-dark fw-bold fs-6" >Orders</a></NavLink>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link me-5 text-dark fw-bold fs-6" href="#contact">Contact Us</a>
                        </li>
                        <li className="nav-item pr-3">
                            <a href='#'><button className="btn btn-brand fw-bold text-light">LOG IN</button></a>
                        </li>
                        

                    </ul>
                   
                </div>
            </div>
            <button className="btn btn-brand fw-bold fixed-bottom ms-auto mb-5 me-5" ><a href="#"><FontAwesomeIcon style={{ color: 'white', width: '30px',fontSize:'30px' }} icon={faAngleUp} /></a></button>
        </nav>
    );
};

export default Header;
