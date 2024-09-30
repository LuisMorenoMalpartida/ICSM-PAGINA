import React, {useState} from "react";
import './footer.css';
import logofooter from './image.png';
import fb from './facebook.png';
import tt from './Tik tok.png';
import lin from './linkedin.png';
import yt from './youtube.png';
import insta from './instagram.png';
import twi from './twitter.png';
import { Link } from 'react-router-dom';

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
                        <div>
                        <h2>Centro de soporte</h2>
                        <ul>
                            <li>930 754 024</li>
                            <li>954 398 928</li>
                            <li>0164 78101</li>
                        </ul>
                        </div>

                        <div>
                        <h2>Legal</h2>
                        <ul>
                            <li>Política de Privacidad</li>
                            <li>Términos & Condiciones</li>
                        </ul>
                        </div>
                    </div>
                    <div className="redes">
                        <h2>Redes sociales</h2>
                        <div className="cont-redes">                            
                        <a href="https://www.facebook.com/ICSMCIENTIFICO" target="_blank"><img src={fb} alt="Red" className="red"/></a>
                        <a href="https://www.tiktok.com/@icsm_cientifico" target="_blank"><img src={tt} alt="Red" className="red"/></a>
                        <a href="https://www.linkedin.com/company/71868312/admin/" target="_blank"><img src={lin} alt="Red" className="red"/></a>
                        <a href="https://www.youtube.com/channel/UCzRVTsjxtrKqrRCPSNOejpQ" target="_blank"><img src={yt} alt="Red" className="red"/></a>
                        <a href="https://www.instagram.com/icsmcientifico/?hl=es-la" target="_blank"><img src={insta} alt="Red" className="red"/></a>
                        <a href="https://x.com/CientificoIcsm" target="_blank"><img src={twi} alt="Red" className="red"/></a>
                        </div>
                    </div>
                </div>
                <h3>© 2024 Instituto Científico Sostenible Minero - Todos los Derechos Reservados.</h3>
            </footer>
        </div>
    )
}

export default Footer;