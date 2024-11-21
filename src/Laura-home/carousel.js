import React from 'react';
import { Link } from 'react-router-dom';
import slide1 from './carrusel-1b.jpeg';
import slide2 from './carrusel-2b.jpg';
import slide3 from './carrusel-3.jpg';
import slide4 from './imagenes/img10.jpeg';
import slide5 from './imagenes/img11b.jpeg';
import './carousel.css';
import ImageContainer from './components/ImageContainer';
import Button from './components/Button';

const Carousel = () => {
  const images = [slide2, slide3, slide4, slide5];
  const buttonData = [1, 2, 3, 4];

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

        {buttonData.map((i)=>{
          return <Button type="button" target="#carouselExampleCaptions" slide={i} label={`Slide ${i+1}`}/>
        })}
        
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

        {images.map((img)=>{
          return <ImageContainer classDiv="carousel-item" src={img} classImg="d-block w-100"/>
        })}
      </div>
    </div>
  );
};

export default Carousel;
