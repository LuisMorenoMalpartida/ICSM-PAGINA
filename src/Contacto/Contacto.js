import React, { useState } from 'react';
import contimg from './contacto.png';
import './contacto.css';
const Contacto = () => {
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
        <div className=''>
          <form action="https://formsubmit.co/institutocientificosostenible@gmail.com" method="POST" >
            <h3 for="name">Contáctenos</h3>

            {/* <label for="name">Nombre</label> */}
            <input type="text" name="name" id="name" placeholder="Nombre..." required></input>

            {/* <label for="email">Correo electronico</label> */}
            <input type="email" name="email" id="email" placeholder="Correo electrónico..." required></input>

            {/* <label for="coments">Mensaje</label> */}
            <textarea name="coments" id="coments" cols="30" rows="5"></textarea>

            {/* <button className="button-black" type='submit'> */}
              <input type="submit" value="Enviar" className='button-custom-black' ></input>
              {/* <p>Enviar</p>
            </button> */}
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacto