import React, { useState } from 'react';
import style from './Cursos.module.css';
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import img11 from "./img11.png";
import img12 from "./img12.png";
import img13 from "./img13.png";
import img14 from "./img14.png";
import img15 from "./img15.png";
import img16 from "./img16.png";
import img17 from "./img17.png";
import img18 from "./img18.png";
import img19 from "./img19.jpeg";
import img20 from "./img20.jpeg";
import img21 from "./img21.jpeg";
import img22 from "./img22.jpeg";
//import img23 from "./img23.jpeg";
import img24 from "./img24.jpeg";
import img25 from "./img25.jpeg";
import img26 from "./img26.jpeg";
import img27 from "./img27.jpg";
import img28 from "./img28.jpeg";


//Nelson - Agregando imágenes
import img29 from "./agroalimentaria/img1.jpg";
import img30 from "./agroalimentaria/img2.jpg";
import img31 from "./agroalimentaria/img3.jpg";
import img32 from "./agroalimentaria/img4.jpg";
import img33 from "./agroalimentaria/img5.jpg";
import img34 from "./agua/img1.jpg";
import img35 from "./agua/img2.jpg";
import img36 from "./agua/img3.jpg";
import img37 from "./ia/img1.jpg";
import img38 from "./mineria/img1.jpg";
import img39 from "./mineria/img2.jpg";
import img40 from "./quimica/img1.jpg";
import img41 from "./quimica/img2.jpg";
import img42 from "./quimica/img3.jpg";
import img43 from "./seg_industrial/img1.jpg";
import img44 from "./seg_industrial/img2.jpg";
import img45 from "./seg_industrial/img3.jpg";
import img46 from "./seg_industrial/img4.jpg";
import img47 from "./seg_industrial/img5.jpg";
import img48 from "./tec_ambientales/img1.jpg";
import img49 from "./tec_ambientales/img2.jpg";
import img50 from "./tec_ambientales/img3.jpg";
import img51 from "./tec_ambientales/img4.jpg";
import img52 from "./tec_ambientales/img5.jpg";
import img53 from "./tec_ambientales/img6.jpg";
import img54 from "./tec_ambientales/img7.jpg";
import img55 from "./tec_ambientales/img8.jpg";
import img56 from "./todo/img1.jpeg";
import img57 from "./todo/img2.jpeg";
import img58 from "./todo/img3.jpeg";
import img59 from "./todo/img4.jpeg";
import img60 from "./todo/img5.jpeg";



const cursosData = [
  { img: img1, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO OCUPACIONAL modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img2, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de GESTIÓN Y CÁLCULO HUELLA DE CARBONO modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img3, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de VMA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img4, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de GESTIÓN PARA EL MANEJO DE RESIDUOS SOLIDOS EN LA INDUSTRIA  modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img5, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de HIDROBIOLÓGICAS CONTINENTALES modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img6, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de EVALUACIÓN IMPACTO AMBIENTAL modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img7, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO DE LA CALIDAD DEL AGUA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img8, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de INTERPRETACIÓN DE RESULTADOS ANALISIS DEL AGUA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img9, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de REGLAMENTO DE PROTECCIÓN AMBIENTAL modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img10, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Presencial', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO HIDROBIOLÓGICO modalidad Presencial. ¿Podrían brindarme más información?'),},
  { img: img11, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PLANES DE CIERRE DE MINAS modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img12, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de IGAFOM ARTESANAL Y PEQUEÑA MINERIA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img13, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de EXPLOTACIÓN DE MINERALES GESTIÓN Y MÉTODOS modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img14, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de ESPECTROMETRIA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img15, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Presencial', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO DE CALIDAD DEL AGUA modalidad Presencial. ¿Podrían brindarme más información?'),},
  { img: img16, categoria: 'IA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de RPAS modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img17, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de EXTINTORES LUCHA CONTRA INCENDIOS PRIMERA RESPUESTA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img18, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO DE CALIDAD DEL AIRE modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img19, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de FISCALIZADOS POR SUNAT modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img20, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PRIMEROS AUXILIOS SOPORTE VITAL modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img21, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de SEGURIDAD EN TRABAJOS DE ALTO RIESGO INDUSTRIAL modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img22, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MICROPLÁSTICOS MUESTREO Y ANALISIS modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img24, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PROCESAMIENTO DE MINERALES EN EL SECTOR MINERO modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img25, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de IGA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img26, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de DETERMINACIÓN DE METALES PESADOS modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img28, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de ANÁLISIS DE ORO POR ENSAYO AL FUEGO modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img27, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual', 
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de DETOXIFICACIÓN DE CIANURO EN EFLUENTES MINEROS modalidad Virtual. ¿Podrían brindarme más información?'),},

  //Nelson - Agregando más cursos
  { img: img29, categoria: 'AGROALIMENTARIA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de INTERPRETACIÓN Y FORMACIÓN DE LA TRINORMA modalidad Virtual. ¿Podrían brindarme más información?'),},
  { img: img30, categoria: 'AGROALIMENTARIA', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PLAN HACCP EN INDUSTRIAS ALIMENTARIAS modalidad Presencial. ¿Podrían brindarme más información?'),},
  { img: img31, categoria: 'AGROALIMENTARIA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES PARA EL CUMPLIMIENTO DE LOS VMA modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img32, categoria: 'AGROALIMENTARIA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PISCIGRANJAS DE TRUCHAS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img33, categoria: 'AGROALIMENTARIA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO Y CONTROL DE LA CALIDAD DE SUELOS CONTAMINADOS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img34, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PISCIGRANJAS DE TRUCHAS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img35, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de DETERMINACIÓN DE METALES PESADOS EN EFLUENTES MINEROS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img36, categoria: 'INGENIERIA DEL AGUA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de TECNOLOGÍAS AVANZADAS DE OXIDACIÓN modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img37, categoria: 'IA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de ESPECTOMETRÍA DE REFLECTANCIA DE RAYOS INFRARROJOS EN LAS EXPLORACIONES MINERAS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img38, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de ANÁLISIS DE ORO POR ENSAYO AL FUEGO modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img39, categoria: 'INDUSTRIA MINERA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PLANES DE CIERRE DE MINAS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img40, categoria: 'INDUSTRIA QUIMICA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de ANÁLISIS DE ORO POR ENSAYO AL FUEGO modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img41, categoria: 'INDUSTRIA QUIMICA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de TECNOLOGÍAS AVANZADAS DE OXIDACIÓN modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img42, categoria: 'INDUSTRIA QUIMICA', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de CONTROL DE INSUMOS QUÍMICOS Y BIENES FISCALIZADOS POR SUNAT modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img43, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de INTERPRETACIÓN Y FORMACIÓN DE LA TRINORMAR modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img44, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de GESTIÓN PARA EL MANEJO DE RESIDUOS SÓLIDOS EN LA INDUSTRIA modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img45, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de GESTIÓN Y CÁLCULO HUELLA DE CARBONO modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img46, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de EVALUACIÓN IMPACTO AMBIENTAL modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img47, categoria: 'SEGURIDAD INDUSTRIAL', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de IGA EN INDUSTRIA MANUFACTURERA Y COMERCIO INTERNO modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img48, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de TECNOLOGÍAS AVANZADAS DE OXIDACIÓN modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img49, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de INTERPRETACIÓN DE RESULTADOS DE ANÁLISIS DE AGUA modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img50, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de IGA EN INDUSTRIA MANUFACTURERA Y COMERCIO INTERNO modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img51, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de PISCIGRANJAS DE TRUCHAS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img52, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO DE LA CALIDAD DEL AGUA modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img53, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de TRATAMIENTO DE AGUAS RESIDUALES INDUSTRIALES PARA EL CUMPLIMIENTO DE LOS VMA modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img54, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MÉTODOS DE COLECTA DE COMUNIDADES HIDROBIOLÓGICAS CONTINENTALES modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  { img: img55, categoria: 'MEDIO AMBIENTE', modalidad: 'Virtual',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@  en el curso de MONITOREO Y CONTROL DE LA CALIDAD DE SUELOS CONTAMINADOS modalidad Virtual. ¿Podrían brindarme más información?'),
  },
  {
    img: img56, categoria: '', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@ en el curso de MONITOREO DE LA CALIDAD DEL AGUA (CUSCO - RÍO HUATANAY), modalidad Presencial. ¿Podrían brindarme más información?'),
  },
  {
    img: img57, categoria: '', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@ en el curso de MONITOREO DE LA CALIDAD DEL AGUA (AREQUIPA - RÍO CHILI), modalidad Presencial. ¿Podrían brindarme más información?'),
  },
  {
    img: img58, categoria: '', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@ en el curso de ANÁLISIS DE PARÁMETROS (PUNO - LAGO TITICACA), modalidad Presencial. ¿Podrían brindarme más información?'),
  },
  {
    img: img59, categoria: '', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' +
    encodeURIComponent('Hola, estoy interesad@ en los CURSOS CIENTÍFICOS PRESENCIALES QUE SE DICTARÁN EN CUSCO (18 al 20 de Octubre). ¿Podrían brindarme más información?'),
  },
  {
    img: img60, categoria: '', modalidad: 'Presencial',
    url: 'https://wa.me/51930754024?text=' +
    encodeURIComponent('Hola, estoy interesad@ en los CURSOS CIENTÍFICOS PRESENCIALES QUE SE DICTARÁN EN AREQUIPA (25 al 27 de Octubre). ¿Podrían brindarme más información?'),
  }
];

const Cursos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('TODO');
  const [filtroModalidad, setFiltroModalidad] = useState('TODO');
  const handleFiltroCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const handleFiltroModalidad = (modalidad) => {
    setFiltroModalidad(modalidad);
  };

  const filtrarCursos = () => {
    return cursosData.filter(curso => 
      (filtroCategoria === 'TODO' || curso.categoria === filtroCategoria) &&
      (filtroModalidad === 'TODO' || curso.modalidad === filtroModalidad)
    );
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={style.main_cursos}>
      <div className={style.cont_cursos}>
        <section className={style.heroimage}>
          <div className={style.hero_text}>
            <h1>CONVIÉRTETE EN UN LÍDER INVESTIGADOR</h1>
            <p>Juntos en el aprendizaje</p>
          </div>
        </section>

        {/* Filtros de Categoría */}
        <div className={`${style.filtros} container`}>
          <button
            onClick={() => {
              handleFiltroCategoria('TODO');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'TODO' ? style.active : ''}
          >
            TODO
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('INDUSTRIA MINERA');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'INDUSTRIA MINERA' ? style.active : ''}
          >
            INDUSTRIA MINERA
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('INDUSTRIA QUIMICA');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'INDUSTRIA QUIMICA' ? style.active : ''}
          >
            INDUSTRIA QUIMICA
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('SEGURIDAD INDUSTRIAL');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'SEGURIDAD INDUSTRIAL' ? style.active : ''}
          >
            SEGURIDAD INDUSTRIAL
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('INGENIERIA DEL AGUA');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'INGENIERIA DEL AGUA' ? style.active : ''}
          >
            INGENIERIA DEL AGUA
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('MEDIO AMBIENTE');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'MEDIO AMBIENTE' ? style.active : ''}
          >
            TECNOLOGÍAS AMBIENTALES
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('AGROALIMENTARIA');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'AGROALIMENTARIA' ? style.active : ''}
          >
            INDUSTRIA AGROALIMENTARIA
          </button>
          <button
            onClick={() => {
              handleFiltroCategoria('IA');
              handleFiltroModalidad('TODO');
            }}
            className={filtroCategoria === 'IA' ? style.active : ''}
          >
            INTELIGENCIA ARTIFICIAL
          </button>
        </div>

        {/* Filtros de Modalidad */}
        <div className={`${style.modalidad} container`}>
          <div className={style.buttonWrapper}>
            <button
              className={filtroModalidad === 'Presencial' ? 'button-white' : 'button-black'}
              onClick={() => handleFiltroModalidad('Presencial')}
            >
              Presencial
            </button>
          </div>
          <div className={style.buttonWrapper}>
            <button
              className={filtroModalidad === 'Virtual' ? 'button-white' : 'button-black'}
              onClick={() => handleFiltroModalidad('Virtual')}
            >
              Virtual
            </button>
          </div>
        </div>

        {/* Cursos filtrados */}
        <section className={`${style.cursos} container`}>
          {filtrarCursos().map((curso, index) => (
            <div key={index} className={style.curso_item} onClick={() => handleImageClick(curso.url)}>
              <img src={curso.img} alt={`Curso ${index}`} />
            </div>
          ))}
        </section>
      </div>

      {/* Barra lateral */}
      <div className={style.cont_barra}>
        <div className={style.barra}></div>
      </div>
    </div>
  );
}

export default Cursos;