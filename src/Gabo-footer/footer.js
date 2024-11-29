import React, {useState} from "react";
import './footer.css';
import logofooter from './image.png';
import { Link } from 'react-router-dom';
import DataContainer from './components/DataContainer';
import Icon from './components/Icon';
import {dates, iconDates} from './utils/contans';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>     
            <footer className="footer">
                <div className="container container-footer">
                    <div className="footer-logo">
                        <img src={logofooter} alt="Logo" className="logo-footer"/>
                    </div>
                    <div className="direccion">
                        <h2>DIRECCION</h2>
                        <iframe 
                        className="map-frame"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18568.66490201489!2d-77.08144791903457!3d-11.934224987361173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d15ee33e794b%3A0x505995b13fc0e5dc!2sICSM%20-%20Instituto%20Cient%C3%ADfico%20Sostenible%20Minero!5e0!3m2!1ses-419!2spe!4v1724271784550!5m2!1ses-419!2spe"
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="soport-legal">
                        {dates.map((e)=>{
                            return <DataContainer title={e.title} dates={e.dates}/>
                        })}
                    </div>
                    <div className="redes">
                        <h2>Redes sociales</h2>
                        <div className="cont-redes">
                            {iconDates.map((e)=>{
                                return <Icon link={e.link} target="_blank" img={e.img} imgClass="red"/>
                            })}                            
                        </div>
                    </div>
                </div>
                <h3>© 2024 Instituto Científico Sostenible Minero - Todos los Derechos Reservados.</h3>
            </footer>
        </div>
    )
}

export default Footer;