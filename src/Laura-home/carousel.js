import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from './carrusel-1.jpeg';
import slide2 from './carrusel-2.jpg';
import slide3 from './carrusel-3.jpg';
import './carousel.css';

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="6000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/">
            <img
              src={slide1}
              alt="Bienvenido a ICSM"
              className="d-block w-100"
            />
          </Link>
        </div>
        <div className="carousel-item">
          <img
            src={slide2}
            alt="CIENCIA EN EL CAMPO"
            className="d-block w-100"
          />
        </div>
        <div className="carousel-item">
          <img
            src={slide3}
            alt="Ambiente Sofisticado"
            className="d-block w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
