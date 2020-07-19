import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Navbar extends Component {
    render() {
        return (
            <div className="headbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                        <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                    </a>
                    <Link to="/" className="navbar-brand">MERN-Stack Recipe App</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/indian" className="nav-link">Indian</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/continental" className="nav-link">Continental</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/mexican" className="nav-link">Mexican</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/american" className="nav-link">American</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/south-asia" className="nav-link">Thai/Viet</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/japanese" className="nav-link">Japanese</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <br />
            </div>
        )
    }
}