import React, { useState } from "react";
import './Navbar.css';
import logo from './logoActu.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a href="/" className="btn-nav ">Inicio</a>
                        </li>
                        <li>
                            <a href="/cursos" className="btn-curso">Cursos</a>
                        </li>
                        <li>
                            <a href="/productos" className="btn-productos">Productos</a>
                        </li>
                        <li>
                            <a href="/servicios" className="btn-servicios">Servicios</a>
                        </li>
                        <li>
                            <a href="/nosotros" className="btn-nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a href="/contacto" className="btn-contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
