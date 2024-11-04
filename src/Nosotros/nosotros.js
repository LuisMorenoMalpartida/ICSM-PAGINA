import React from "react";
import "./nosotros.css";
import nosotros from "./nosotros.png";
import ingeniero from "./PERFIL DEL EXPOSITOR 1.png";
import tesla from "./teslaApretada.png";
import titan from "./titanApretado.png";
import ContentBlock from "./components/ContentBlock";
//inicio de la funcion nosotros, mostrar los componentes"

function Nosotros() {
  const objMV = [
    {
      claseId : "mision",
      title : "Misión",
      content : "Es impulsar la innovación y sostenibilidad en los diferentes sectores industriales, brindando soluciones científicas y técnicas que promueven un desarrollo sostenible, optimizando procesos y minimizando el impacto ambiental."
    },
    {
      claseId : "vision",
      title : "Visión",
      content : "Nuestra vision es ser reconocidos como una compañía inclusiva e interdisciplinaria que adapte correctamente la tecnología para una industria sostenible. Formaremos científicos que lideren en su área de trabajo, asumiendo responsabilidad ambiental en todas las actividades que realicen."
    },
    {
      claseId : "historia",
      title : "Instituto Científico Sostenible Minero",
      content : "En ICSM,ofrecemos cursos científicos online y presenciales,asesoramiento científico para tesis de pregrado,postgrado y empresarial,ventas de equipos e instrumentos para laboratorios científicos e industrias,análisis y asistencia ambiental. Todo lo que necesitas está aquí,en un solo lugar."
    }
  ]
  return (
    <div>
      <section className="nosotrosimg">
        <img src={nosotros} alt="nosotros" />
      </section>

      <div className="container container-vi-mi">
        {objMV.slice(0, 2).map((obj, index)=>{
          return <ContentBlock claseId={obj.claseId} title={obj.title} content={obj.content}/>
        })}
      </div>

      <ContentBlock claseId={objMV[2].claseId} title={objMV[2].title} content={objMV[2].content}/>

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