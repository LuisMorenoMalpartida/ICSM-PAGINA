import { useState } from "react";
import { ServBanner } from "./components/ServBanner.js";
import { ServCard } from "./components/ServCard.js";
import { ServModal } from "./components/ServModal.js";
import { ServGallery } from "./components/ServGallery.js"
import imagen1 from "./img-1.png";
import imagen2 from "./img-2.png";
import imagen3 from "./img-3.png";
import img9 from "./img-9.jpeg";
import img10 from "./img-10.jpeg";
import img12 from "./img-12.jpeg";
import img13 from "./img-13.jpeg";
import img14 from "./img-14.jpeg";
import img15 from "./img-15.jpeg";
import img16 from "./img-16.jpeg";
import img17 from "./img-17.jpeg";
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
          title="Servicios Integrales de Monitoreo y Ensayos Ambientales"
          onOpenModal={() => openModal([img15, img17, img16], "Servicios Integrales de Monitoreo y Ensayos Ambientales", "Realización de pruebas y análisis en laboratorio para evaluar la capacidad ambiental.")}
        />
        <ServCard
          imgSrc={imagen2}
          title="Diseño de Reactores para Tratamiento de Aguas Residuales"
          onOpenModal={() => openModal([img12, img14], "Diseño de Reactores para Tratamiento de Aguas Residuales", "Desarrollo de reactores a nivel laboratorio y piloto para el tratamiento de aguas.")}
        />
        <ServCard
          imgSrc={imagen3}
          title="Asesoramiento de Trabajos de Investigación y Postgrado"
          onOpenModal={() => openModal([img13, img10], "Asesoramiento de Trabajos de Investigación y Postgrado", "Apoyo especializado para la elaboración de tesinas y tesis de pregrado y postgrado.")}
          
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