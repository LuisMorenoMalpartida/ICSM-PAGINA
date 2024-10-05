import React, { useState, useEffect } from 'react';
import './testimonial.css';
import p1 from './img_pers/p1.jpg';
import p2 from './img_pers/p2.jpg';
import p3 from './img_pers/p3.jpg';
import p4 from './img_pers/p4.jpg';
import p5 from './img_pers/p5.jpg';
import p6 from './img_pers/p6.jpg';
import p7 from './img_pers/p7.jpg';
import p8 from './img_pers/p8.jpg';
import p9 from './img_pers/p9.jpg';
import p10 from './img_pers/p10.jpg';

const testimonials = [
  {
    img: p1,
    user: "Ruth Karen Serrano Sumi",
    comment: "El ICSM es una excelente alternativa. Ofrecen programas de formación tanto virtuales como presenciales, con especilidades."
  },
  {
    img: p2,
    user: "Lisely Paredes",
    comment: "El ICSM es una empresa ideal para adquirir conocimientos y desarrollar habilidades en el sector minero."
  },
  {
    img: p3,
    user: "Sherley Rimac",
    comment: "Estoy muy impresionada con el ICSM, hacen un excelente trabajo. Su profesionalismo y compromiso con la sostenibilidad son evidentes en cada proyecto que emprenden."
  },
  {
    img: p4,
    user: "Jorge Alberto Sanchez Cajaleon",
    comment: "El profesionalismo, compromiso y desarrollo del trabajo presentan caracteres de fidelidad con la sostenibilidad y apoyo a la investigación."
  },
  {
    img: p5,
    user: "Rosario Navarro",
    comment: "Es impresionante el trabajo que realiza el ICSM, su dedicación a la investigación y a las buenas prácticas, está logrando un gran trabajo con sus capacitaciones, cursos y voluntariados."
  },
  {
    img: p6,
    user: "Angélica Espinoza",
    comment: "El ICSM es una excelente opción para quienes buscan mejorar su formación profesional. Ofrecen cursos y capacitaciones de alta calidad."
  },
  {
    img: p7,
    user: "Sofia Adriana Mosquera Yturraran",
    comment: "He quedado sorprendida con la gran dedicación a la investigación y el cuidado del agua por parte del ICSM. "
  },
  {
    img: p8,
    user: "Camila Alexandra Falcon Zapata",
    comment: "Recomiendo al ICSM por su valiosa contribución al ámbito académico a través de sus cursos presenciales y virtuales, impartidos de manera clara y accesible."
  },
  {
    img: p9,
    user: "Isabel Sole Gutierrez Huarcaya",
    comment: "ICSM es una empresa que se destaca por su buen ambiente laboral y su compromiso con el desarrollo sostenible y la protección del medio ambiente."
  },
  {
    img: p10,
    user: "Lizzeth Suca Acuta",
    comment: "El ICSM destaca por combinar teoría y práctica, ofreciendo una formación académica y profesional completa gracias a su enfoque dinámico y compromiso con la calidad educativa."
  }
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
          <button
            onClick={() => goToIndex(3)}
            className={`testimonial-btn circle-btn ${currentIndex === 3 ? 'active' : ''}`}
          ></button>
          <button
            onClick={() => goToIndex(4)}
            className={`testimonial-btn circle-btn ${currentIndex === 4 ? 'active' : ''}`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;