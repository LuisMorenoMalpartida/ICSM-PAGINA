import React, { useState } from 'react';
import contimg from './contacto.png';
import './contacto.css';

const Contacto = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '51930754024'; 
    const textMessage = `Hola, mi nombre es ${name}. ${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <div className='container mensaje-inicio'>
        <h2>Comunícate con ICSM</h2>
        <h3>Estamos aquí para ofrecerte toda la información y apoyo que necesites</h3>
      </div>
      <div className='formulario'>
        <div className="contimg">
          <img src={contimg} alt="contactoimg" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <h3>Contáctenos</h3>

            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Nombre..." 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required
            />

            <textarea 
              name="message" 
              id="message" 
              placeholder="Escribe tu mensaje..." 
              cols="30" 
              rows="5" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            />

            <input type="submit" value="Enviar" className='button-custom-black' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
