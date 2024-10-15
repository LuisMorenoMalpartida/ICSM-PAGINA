import React from "react";
import "./nosotros.css";
import nosotros from "./nosotros.png";
import ingeniero from "./PERFIL DEL EXPOSITOR 1.png";
import tesla from "./teslaApretada.png";
import titan from "./titanApretado.png";
//inicio de la funcion nosotros, mostrar los componentes
//git add *

function Nosotros() {
  return (
    <div>
      <section className="nosotrosimg">
        <img src={nosotros} alt="nosotros" />
      </section>

      <div className="container container-vi-mi">
        <section id="mision">
          <div className="mision">
            <h2>Misión</h2>
            <p>
            Es impulsar la innovación y sostenibilidad en los diferentes 
            sectores industriales, brindando soluciones científicas y técnicas 
            que promueven un desarrollo sostenible, optimizando procesos y 
            minimizando el impacto ambiental.
            </p>
          </div>
        </section>

        <section id="vision">
          <div className="vision">
            <h2>Visión</h2>
            <p>
            Nuestra vision es ser reconocidos como una compañía 
            inclusiva e interdisciplinaria que adapte correctamente 
            la tecnología para una industria sostenible. Formaremos 
            científicos que lideren en su área de trabajo, asumiendo 
            responsabilidad ambiental en todas las actividades que realicen.
            </p>
          </div>
        </section>
      </div>
      <section id="historia">
        <div className="historia">
          <h2>Historia</h2>
          <p>
            Somos una empresa técnica, profesional y comercial. Comprometida en
            la formación científica mediante la capacitación virtual y
            presencial de cursos, asesorias, consultorias, analisis de
            laboratorio, venta de reactores, equipos e instrumentos científicos.
            Desarrollándonos en las diferentes industrias imprescindibles para
            el futuro de la humanidad; Tratamiento de aguas, química, minera,
            biotecnologica, Inteligencia artificial, energía sostenible y
            agroalimentaria.
          </p>
        </div>
      </section>
      <section id="gerentegeneral">
        <div className="gerentegeneral">
          <h2>Gerente General</h2>
          <img src={ingeniero} alt="gerente general" />
        </div>
      </section>
      <section id="mascotas">
        <div className="container mascotas">
          <div>
            <h2>Conoce a Titán y a Tesla</h2>
            <p>
            En el Instituto Científico Sostenible Minero, Tesla y Titán son los
             rostros amigables de nuestro compromiso con la ciencia y la 
             sostenibilidad. Con su actitud siempre positiva y su enfoque en la 
             investigación científica, estas mascotas nos recuerdan que la 
             ciencia es un esfuerzo colectivo lleno de energía y dedicación.
            </p>
          </div>
          <div className="tesla-titan">
          <img src={tesla} alt="tesla" class="izquierda" />
          <img src={titan} alt="titan" class="derecha" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
