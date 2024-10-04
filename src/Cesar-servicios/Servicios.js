import { useState } from "react";
import { ServBanner } from "./components/ServBanner.js";
import { ServCard } from "./components/ServCard.js";
import { ServModal } from "./components/ServModal.js";
import { ServGallery } from "./components/ServGallery.js"
import imagen1 from "./img-1.png";
import imagen2 from "./img-2.png";
import imagen3 from "./img-3.png";
import imagen4 from "./img-4.png";
import imagen5 from "./img-21.jpeg";
import img9 from "./img-9.jpeg";
import img10 from "./img-10.jpeg";
import img12 from "./img-12.jpeg";
import img13 from "./img-13.jpeg";
import img14 from "./img-14.jpeg";
import img15 from "./img-15.jpeg";
import img16 from "./img-16.jpeg";
import img17 from "./img-17.jpeg";
import img18 from "./img-18.jpeg";
import img19 from "./img-19.jpeg";
import img20 from "./img-20.jpeg";
import img21 from "./img-22.jpeg";
import img22 from "./img-23.jpeg";
import img23 from "./img-24.jpeg";
import "./Servicios.css";

const Servicios = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const [modalContent, setModalContent] = useState({
    src: "",
    title: "",
    description: "",
  });

  const openModal = (images, title, description) => {
    setModalContent({ images, title, description });
    setModalVisible(true);
    setModalClosing(false);
  };

  const closeModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  };

  return (
    <div className="servicios">
      <ServBanner />
      <div className="gallery">
        <ServCard
          imgSrc={imagen1}
          title="Análisis Integral"
          onOpenModal={() => openModal([img15, img17, img16], "Análisis Integral", "Realización de pruebas y análisis en laboratorio para evaluar la capacidad ambiental.")}
        />
        <ServCard
          imgSrc={imagen2}
          title="Diseño de Reactores"
          onOpenModal={() => openModal([img12, img14], "Diseño de Reactores", "Desarrollo de reactores a nivel laboratorio y piloto para el tratamiento de aguas.")}
        />
        <ServCard
          imgSrc={imagen3}
          title="Asesoramiento Científico"
          onOpenModal={() => openModal([img13, img10], "Asesoramiento Científico", "Apoyo especializado para la elaboración de tesinas y tesis de pregrado y postgrado.")}
          
        />
        <ServCard
          imgSrc={imagen4}
          title="Asistencia Ambiental"
          onOpenModal={() => openModal([img23, img19], "Asistencia Ambiental", "Ofrece apoyo y asesoría para cumplir con normativas ambientales y reducir el impacto ecológico, promoviendo prácticas sostenible")}
        />

        <ServCard
          imgSrc={imagen5}
          title="Consultoria"
          onOpenModal={() => openModal([img23, img22], " Consultoria", "Servicio especializado que ofrece asesoramiento experto para ayudar.")}
          
        />
      </div>
      <ServModal
        isVisible={modalVisible}
        content={modalContent}
        onClose={closeModal}
        closing={modalClosing}
      />

      <ServGallery/>
    </div>
  );
};

export default Servicios;
