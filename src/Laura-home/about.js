import React, { useState } from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import img1 from './cursos.png';
import img2 from './productos.png';
import img3 from './servicios.png';
import SubSection from './components/SubSection';

const About = () => {
  const [floatingText, setFloatingText] = useState({
    text1: '⛏️⚒️ Industria Minera',
    text2: '🏭 Industria Química',
    text3: '🦺 Seguridad Industrial',
    text4: '💧 Ingenieria del Agua',
    text5: '🛰️ Tecnologías Ambientales',
    text6: '🍇 Industria Agroalimentaria',
    text7: '🤖 Inteligencia Artificial'
  });

  const [activeCard, setActiveCard] = useState('cursos');
  const [buttonText, setButtonText] = useState('Conoce todos nuestros cursos');
  const [buttonLink, setButtonLink] = useState('/cursos');

  const handleCardClick = (type) => {
    setActiveCard(type);

    switch (type) {
      case 'cursos':
        setFloatingText({
          text1: '⛏️⚒️ Industria Minera',
          text2: '🏭 Industria Química',
          text3: '🦺 Seguridad Industrial',
          text4: '💧 Ingenieria del Agua',
          text5: '🛰️ Tecnologías Ambientales',
          text6: '🍇 Industria Agroalimentaria',
          text7: '🤖 Inteligencia Artificial'
        });
        setButtonText('Conoce todos nuestros cursos');
        setButtonLink('/cursos');
        break;
      case 'productos':
        setFloatingText({
          text1: '🔬 Colorímetro DR900 🔬',
          text2: '💧 Tubidímetro 2100Q 💧',
          text3: '📊 Multiparámetro 2200 📊',
          text4: '🌐 PCSTESTR 35 🌐',
        });
        setButtonText('Conoce todos nuestros productos');
        setButtonLink('/productos');
        break;
      case 'servicios':
        setFloatingText({
          text1: '🧪 Análisis Integral 🧪',
          text2: '🤖 Diseño de Reactores🤖',
          text3: '👨🏻‍🚀 Asesoramiento Científico 👩‍🚀',
          text4: '🌱 Asistencia Ambiental 🌱',
          text5: '🔍 Consultoría 🔍'
        });
        setButtonText('Conoce todos nuestros servicios');
        setButtonLink('/servicios');
        break;
      default:
        setFloatingText({
          text1: '⛏️ Servicios Integrales de Monitoreo y Ensayos Ambientales ⚒️',
          text2: '💧 Diseño de Reactores para Tratamiento de Aguas Residuales 💧',
          text3: '🌿 Asesoramiento de Trabajos de Investigación y Postgrado 🌿',
        });
        setButtonText('Conoce todos nuestros cursos');
        setButtonLink('/cursos');
    }
  };

  const sections = [{
    title: 'Cursos Científicos',
    content: 'Aprende de ingenieros e investigadores científicos con cursos virtuales y presenciales'
  },{
    title: 'Productos de Calidad',
    content: 'Implementación de laboratorios con instrumentos científicos para comprar o alquilar.'
  },{
    title: 'Servicios Eficientes',
    content: 'Asesoría Científica Empresarial, Laboratorio y Campo.'
  }]

  return (
    <div className="container container-about">
      <h1>Instituto Científico Sostenible Minero</h1>
      <p>
        En ICSM, ofrecemos cursos científicos online y presenciales, asesoramiento científico para tesis de pregrado, postgrado y empresarial, ventas de equipos e instrumentos para laboratorios científicos e industrias, análisis y asistencia ambiental. 
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
            <SubSection divClass="card-body-about" titleClass="card-title-about" contentClass="card-text-about" title={sections[0].title} content={sections[0].content}/>
          </div>
        </div>

        <div className="col-md-4 text-center cards-about">
          <div
            className={`card productos-card ${activeCard === 'productos' ? '' : 'inactive'}`}
            onClick={() => handleCardClick('productos')}
          >
            <img src={img2} className="card-img-top icon" alt="Productos" />
            <SubSection divClass="card-body-about" titleClass="card-title-about" contentClass="card-text-about" title={sections[1].title} content={sections[1].content}/>
          </div>
        </div>

        <div className="col-md-4 text-center cards-about">
          <div
            className={`card servicios-card ${activeCard === 'servicios' ? '' : 'inactive'}`}
            onClick={() => handleCardClick('servicios')}
          >
            <img src={img3} className="card-img-top icon" alt="Servicios" />
            <SubSection divClass="card-body-about" titleClass="card-title-about" contentClass="card-text-about" title={sections[2].title} content={sections[2].content}/>
          </div>
        </div>
      </div>

      {/* Textos flotantes y botón */}
      <div className="button-text-container">
        <div className="text-group">
          <div className="text-float text-float1">{floatingText.text1}</div>
          <div className="text-float text-float3">{floatingText.text3}</div>
          <div className="text-float text-float5">{floatingText.text5}</div>
          <div className="text-float text-float7">{floatingText.text7}</div>
        </div>

        <div className="button-container-about1">
          <Link to={buttonLink}>
            <button className="button-white">{buttonText}</button>
          </Link>
        </div>

        <div className="text-group">
        <div className="text-float text-float2">{floatingText.text2}</div>
          <div className="text-float text-float4">{floatingText.text4}</div>
          <div className="text-float text-float6">{floatingText.text6}</div>
          <div className="text-float text-float8">{floatingText.text8}</div>
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
