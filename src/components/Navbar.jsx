import React, { Component } from 'react';
import logo from '../img/logo.svg'

import './styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <div className="container-fluid">

                    <a className='Navbar_brand d-flex' href="/">
                        <img src={logo} alt="logo" />
                        <span>Platzi</span>
                        <span>Conf</span>
                    </a>
                </div>

            </div>
        );
    }
}

export default Navbar;