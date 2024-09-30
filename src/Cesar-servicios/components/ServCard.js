import "./ServCard.css";

export const ServCard = ({ imgSrc, title, description, onOpenModal }) => {
  return (
    <section className="container servcard">
    <img src={imgSrc} alt={title} className="modal-btn" />
    <div className="servcard-info">
      <h3>{title}</h3>
      <button
        className="servcard-btn button-white"
        onClick={() => onOpenModal(imgSrc, title, description)}
      >
        Más Información
      </button>
    </div>
    </section>
  )
};


