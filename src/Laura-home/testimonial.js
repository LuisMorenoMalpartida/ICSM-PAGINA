import React, { useState, useEffect } from 'react';
import './testimonial.css';

const testimonials = [
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
    user: "Luis Fernández, Químico",
    comment: "El curso presencial fue excelente. Aprendí técnicas prácticas que ya uso en mi trabajo. ¡Muy recomendable!",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
    user: "Ana Arias, Ingeniera Ambiental",
    comment: "Interactuar con los expertos y usar el reactor digital en el curso ha sido invaluable para mi trabajo.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
    user: "Carlos Ruiz, Ingeniero Civil",
    comment: "La capacitación fue completa y práctica. Ahora tengo las habilidades que necesitaba para mi investigación.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
    user: "María López, Biotecnóloga",
    comment: "Los talleres me permitieron probar los productos en acción. La calidad y el soporte fueron excepcionales.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_5.jpeg",
    user: "Javier Soto, Técnico en Laboratorio",
    comment: "El curso fue enriquecedor. Aprendí mucho y ya estoy aplicando los conocimientos.",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_6.jpeg",
    user: "Laura Gómez, Investigadora",
    comment: "Los equipos mejoraron significativamente la eficiencia en nuestro laboratorio. Estamos muy satisfechos.",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isMobile
    ? testimonials.length - 1 
    : Math.floor(testimonials.length / 2) - 1; 
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 12000); 
    return () => clearInterval(interval); 
  }, []);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='testimonial-container'>
      <div className='title-testimonial'>
        <h2>Tú también puedes vivir esta experiencia</h2>
      </div>
      <div className='testimonial-carousel'>
        <div className='testimonial-list'>
          {testimonials
            .slice(currentIndex * (isMobile ? 1 : 2), currentIndex * (isMobile ? 1 : 2) + (isMobile ? 1 : 2))
            .map((testimonial, index) => (
              <div className='testimonial-card' key={index}>
                <img src={testimonial.img} alt={testimonial.user} className='testimonial-img' />
                <div className='testimonial-content'>
                  <h4 className='testimonial-name'>{testimonial.user}</h4>
                  <p className='testimonial-comment'>{testimonial.comment}</p>
                </div>
              </div>
          ))}
        </div>
        <div className='testimonial-controls'>
          <button
            onClick={() => goToIndex(0)}
            className={`testimonial-btn circle-btn ${currentIndex === 0 ? 'active' : ''}`}
          ></button>
          <button
            onClick={() => goToIndex(1)}
            className={`testimonial-btn circle-btn ${currentIndex === 1 ? 'active' : ''}`}
          ></button>
          <button
            onClick={() => goToIndex(2)}
            className={`testimonial-btn circle-btn ${currentIndex === 2 ? 'active' : ''}`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;