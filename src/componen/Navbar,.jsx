import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <div classNameName="header shadow-lg">
                <nav className="navbar navbar-expand-lg bg-body-tertiary rounded">
                    <div className="container-fluid bg-light-brown p-3 kanit-regular fs-4">
                        <a className="navbar-brand kanit-semibold-italic bg-low-brown p-2 rounded color-dark-brown" >HudzStegano</a> <img style={{width:"50px"}} src='src/assets/logo.png' alt="logo" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" to="/">Upload</NavLink>
                                <NavLink className="nav-link" to="/extract">Extract</NavLink>
                                <NavLink className="nav-link" to="/about">About</NavLink>
       
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
}

export default Navbar;
