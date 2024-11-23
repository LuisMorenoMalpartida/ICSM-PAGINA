import React, { useState } from "react";
import './Navbar.css';
import logo from './logoActu.png';
import { Link } from 'react-router-dom';
import HeaderButton from './components/HeaderButton';

const Navbar = () => {
    const headerButton = ['inicio', 'cursos', 'productos', 'servicios', 'nosotros', 'contacto'];
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const capitalice = str => str[0].toUpperCase() + str.slice(1);

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    {headerButton.map((e, i)=>{
                        if (e == "inicio") var href = "/";
                        else var href = `/${e}`;
                        return <HeaderButton key={i} href={href} classLi={`btn-${e}`} content={capitalice(e)}/>
                    })}
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