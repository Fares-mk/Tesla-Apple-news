import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">First react</Link> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavAltMarkup ">
                    <div className="navbar-nav  ">
                        <Link className="nav-link text-white" to="/Apple">Apple </Link> 
                        <Link className="nav-link text-white" to="/Tesla">Tesla </Link> 
                        <Link className="nav-link text-white" to="/weather">Weather</Link> 
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;