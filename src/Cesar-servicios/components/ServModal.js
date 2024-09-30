import "./ServModal.css";

export const ServModal = ({ isVisible, content, onClose, closing }) =>{
  if (!isVisible) return null;

  return (
    <div
      className={`servmodal ${closing ? "fade-out" : ""}`}
      onClick={onClose}
    >
      <div
        className="servmodal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="servmodal-text">
          <h3>{content.title}</h3>
          <p>{content.description}</p>
          <button><a className="button-custom-black" target="_blank" href={'https://wa.me/51930754024?text=' + 
    encodeURIComponent('Hola, estoy interesad@ en los servicios cientificos ICSM')}>Solicitar Servicio</a></button>
        </div>
        
        <div className="servmodal-imgs">
          {content.images.map((imageSrc, index) => (
            <img key={index} className="servmodal-img-pb" src={imageSrc} alt={`${content.title} ${index}`} />
          ))}
        </div>

      </div>
    </div>
  );
};
