import React, { useState } from "react";
import LabModal from "../Deyvis-lab/LabModal";  
import "../Deyvis-lab/LabModal.css";           
import "./lab.css";
import "./../Deyvis-lab/LabModal.css"
import imageSrc from './lab.png';

const Lab = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="content-lab">
      <div className="container">
        <div className="content lab-content">
          <img src={imageSrc} alt="Lab" className="image-lab" />
          <div className="text-content-lab">
            <h1 className="title title-lab">Donde la Ciencia Toma Vida</h1>
            <p className="p-lab">
              Descubre un laboratorio equipado para que te desarrolles de manera práctica y efectiva. Sumérgete en un ambiente dinámico donde la práctica y la teoría se unen, despertando tu espíritu científico con nosotros.
            </p>
            <div className="button-lab">
            <button onClick={toggleModal} className="button-custom-black">
              Laboratorio Científico
            </button>
            </div>
            {/* LabModal with YouTube video */}
            <LabModal show={showModal} onClose={toggleModal} title="Laboratorio Científico">
              <h3 className="modal-lab-text" >Descubre el entorno donde la teoría se transforma en práctica</h3>
              <div className="video-container">
                <iframe
                  width="660"
                  height="415"
                  src="https://www.youtube.com/embed/3i82Fzpyq98?si=gmBDVmcPOd0V5TZ2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </LabModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;
