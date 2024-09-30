import React, { useState } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import img1 from './cursos.png';
import img2 from './productos.png';
import img3 from './servicios.png';

const About = () => {
  const [floatingText, setFloatingText] = useState({
    text1: '⛏️ Industria Minera ⚒️',
    text2: '💧 Ingenieria del Agua 💧',
    text3: '🌿 Agroalimentaria 🌿',
    text4: '🌍 Medio Ambiente 🌍'
  });

  const [activeCard, setActiveCard] = useState('cursos');
  const [buttonText, setButtonText] = useState('Conoce todos nuestros cursos');
  const [buttonLink, setButtonLink] = useState('/cursos');

  const handleCardClick = (type) => {
    setActiveCard(type);

    switch (type) {
      case 'cursos':
        setFloatingText({
          text1: '⛏️ Industria Minera ⚒️',
          text2: '💧 Ingenieria del Agua 💧',
          text3: '🌿 Agroalimentaria 🌿',
          text4: '🌍 Medio Ambiente 🌍'
        });
        setButtonText('Conoce todos nuestros cursos');
        setButtonLink('/cursos');
        break;
      case 'productos':
        setFloatingText({
          text1: '🔬 Colorímetro DR900 🔬',
          text2: '💧 Tubidímetro 2100Q 💧',
          text3: '📊 Multiparámetro 2200 📊',
          text4: '🌐 GPS Garmin 🌐'
        });
        setButtonText('Conoce todos nuestros productos');
        setButtonLink('/productos');
        break;
      case 'servicios':
        setFloatingText({
          text1: '🔍 Consultoría 🔍',
          text2: '🧪 Diseño de Reactores 🧪',
          text3: '🌱 Ensayo Ambiental 🌱',
          text4: '📝 Asesoramiento 📝'
        });
        setButtonText('Conoce todos nuestros servicios');
        setButtonLink('/servicios');
        break;
      default:
        setFloatingText({
          text1: '⛏️ Industria Minera ⚒️',
          text2: '💧 Ingenieria del Agua 💧',
          text3: '🌿 Agroalimentaria 🌿',
          text4: '🌍 Medio Ambiente 🌍'
        });
        setButtonText('Conoce todos nuestros cursos');
        setButtonLink('/cursos');
    }
  };

  return (
    <div className="container container-about">
      <h1>Instituto Científico Sostenible Minero</h1>
      <p>
        En ICSM, ofrecemos cursos científicos online y presenciales, talleres
        especializados, productos, y servicios diseñados específicamente para
        científicos estudiantes del área de Ciencias Ambientales e Ingeniería
        Aplicada.
        <br /><br />
        Todo lo que necesitas está aquí, en un solo lugar.
      </p>

      <div className="container-cards-about">
        <div className="col-md-4 text-center cards-about">
          <div
            className={`card cursos-card ${activeCard === 'cursos' ? '' : 'inactive'}`}
            onClick={() => handleCardClick('cursos')}
          >
            <img src={img1} className="card-img-top icon" alt="Cursos" />
            <div className="card-body-about">
              <h3 className="card-title-about">Cursos</h3>
              <p className="card-text-about">
                Aprende de expertos con cursos virtuales y presenciales.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center cards-about">
          <div
            className={`card productos-card ${activeCard === 'productos' ? '' : 'inactive'}`}
            onClick={() => handleCardClick('productos')}
          >
            <img src={img2} className="card-img-top icon" alt="Productos" />
            <div className="card-body-about">
              <h3 className="card-title-about">Productos</h3>
              <p className="card-text-about">
                Herramientas de calidad para comprar o alquilar.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 text-center cards-about">
          <div
            className={`card servicios-card ${activeCard === 'servicios' ? '' : 'inactive'}`}
            onClick={() => handleCardClick('servicios')}
          >
            <img src={img3} className="card-img-top icon" alt="Servicios" />
            <div className="card-body-about">
              <h3 className="card-title-about">Servicios</h3>
              <p className="card-text-about">
                Asesoría en investigación, laboratorio y campo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Textos flotantes y botón */}
      <div className="button-text-container">
        <div className="text-group">
          <div className="text-float text-float1">{floatingText.text1}</div>
          <div className="text-float text-float2">{floatingText.text2}</div>
        </div>

        <div className="button-container-about1">
          <Link to={buttonLink}>
            <button className="button-white">{buttonText}</button>
          </Link>
        </div>

        <div className="text-group">
          <div className="text-float text-float3">{floatingText.text3}</div>
          <div className="text-float text-float4">{floatingText.text4}</div>
        </div>

      </div>

      <div className="button-container-about2">
          <Link to={buttonLink}>
            <button className="button-white">{buttonText}</button>
          </Link>
        </div>
    </div>
  );
};

export default About;
