import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ProductCatalog.css";
import img1 from "./img-1.png";
import img2 from "./img-2.png";
import img3 from "./img-3.png";
import img4 from "./img-4.png";
import img5 from "./img-5.png";
import img6 from "./img-6.png";
import img7 from "./img-7.png";
import img8 from "./img-8.png";

const ProductCatalog = () => {
  const history = useHistory();
  const handleClick = () => history.push("/contacto");
  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  const [products] = useState([
    {
      id: 1,
      name: "Colorímetro DR900",
      description: ["• Monitoreo Ambiental", "• Investigación"],
      img: img2,
      urls: {
        comprar:  'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el COLORÍMETRO DR900'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el COLORÍMETRO DR900'),
      },
      className: "product-item-green-productCatalog",
      imgClassName: "product-img-green-productCatalog",
    },
    {
      id: 2,
      name: "MEDIDOR DE CLORO DIGITAL",
      description: [
        "• Monitoreo Ambiental",
        "• Tratamiento de Aguas",
        "• Investigación",
      ],
      img: img3,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el MEDIDOR DE CLORO DIGITAL'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el MEDIDOR DE CLORO DIGITAL'),
      },
      className: "product-item-purple-productCatalog",
      imgClassName: "product-img-purple-productCatalog",
    },
    {
      id: 3,
      name: "TURBIDIMETRO 2100Q",
      description: [
        "• Monitoreo Ambiental",
        "• Tratamiento de Aguas",
        "• Investigación",
      ],
      img: img7,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el TUBIDIAMETRO 2100Q'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el TUBIDIAMETRO 2100Q'),
      },
      className: "product-item-blue-productCatalog",
      imgClassName: "product-img-blue-productCatalog",
    },
    {
      id: 4,
      name: "GPS GARMIN <br/> MONTANA 650",
      description: ["Georeferenciación en <br /><br /> monitoreo ambiental"],
      img: img4,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el GPS GARMIN MONTANA 650'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el GPS GARMIN MONTANA 650'),
      },
      className: "product-item-orange-productCatalog",
      imgClassName: "product-img-orange-productCatalog",
    },
    {
      id: 5,
      name: "MULTIPARAMETRO <br/> HQ46d",
      description: ["Monitoreo Ambiental"],
      img: img5,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el MULTIPARAMETRO HQ46d'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el MULTIPARAMETRO HQ46d'),
      },
      className: "product-item-marrom-productCatalog",
      imgClassName: "product-img-marrom-productCatalog",
    },
    {
      id: 6,
      name: "Multiparametro 2200",
      description: ["• Monitoreo Ambiental", "• Investigación"],
      img: img6,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en COMPRAR el MULTIPARAMETRO 2200'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@  en ALQUILAR el MULTIPARAMETRO 2200'),
      },
      className: "product-item-crema-productCatalog",
      imgClassName: "product-img-crema-productCatalog",
    },
    {
      id: 7,
      name: "REACTOR DIGITAL<br/>  DRB 200",
      description: ["• Análisis", "• Investigación"],
      img: img8,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@ en COMPRAR el REACTOR DIGITAL DRB 200 '),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@ en ALQUILAR el REACTOR DIGITAL DRB 200 '),
      },
      className: "product-item-celeste-productCatalog",
      imgClassName: "product-img-celeste-productCatalog",
    },
    {
      id: 8,
      name: "PCSTestr 35",
      description: ["Medición a Nivel <br/><br/> Industrial y Laboratorio"],
      img: img1,
      urls: {
        comprar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@ en COMPRAR el PCSTestr 35'),
        alquilar: 'https://wa.me/51930754024?text=' + 
        encodeURIComponent('Hola, estoy interesad@ en ALQUILAR el PCSTestr 35'),
      },
      className: "product-item-red-productCatalog",
      imgClassName: "product-img-red-productCatalog",
    },
  ]);

  return (
    <div>
    <div className="product-catalog container">
      <div className="content-description-products">
        <h2 className="text_CatH2">
          Equipos de vanguardia para análisis exacto
        </h2>
        <p>Compra o alquila ahora y maximiza tus resultados</p>
      </div>

      <div className="products-grid-productCatalog">
        {products.map((product) => (
          <div
            key={product.id}
            className={`product-item-productCatalog ${product.className}`}
          >
            <div className={`product-name-productCatalog name-${product.id}`}>
              <h3 dangerouslySetInnerHTML={{ __html: product.name }} />
            </div>

            <div className="description-container-productCatalog">
              {product.description &&
                product.description.map((desc, index) => (
                  <p
                    key={index}
                    className={`description-item-productCatalog desc-${product.id}-${index}`}
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                ))}
            </div>
            <img
              src={product.img}
              alt={product.name}
              className={product.imgClassName}
            />
            <div className="actions-product-productCatalog">
              {product.id === 7 ? (
                <button
                  className={`button-custom-black button-custom-white action-btn-comprar-${product.id}`}
                  onClick={() =>
                    handleImageClick(product.urls.comprar)
                  }
                >
                  Comprar
                </button>
              ) : product.id === 8 ? (
                <button
                  className={`button-custom-black button-alquilar action-btn-alquilar-${product.id}`}
                  onClick={() =>
                    handleImageClick(product.urls.alquilar)
                  }
                >
                  Alquilar
                </button>
              ) : (
                ["Comprar", "Alquilar"].map((action, index) => {
                  const actionClass =
                    action === "Comprar"
                      ? "button-custom-white"
                      : "button-alquilar";
                  return (
                    <button
                      key={index}
                      className={`button-custom-black ${actionClass} action-btn-${action.toLowerCase()}-${product.id}`}
                      onClick={() =>
                        handleImageClick(product.urls[action.toLowerCase()])
                      }
                    >
                      {action}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="main_contact">
        <h1 className="main_titleCTN">¿En Qué Podemos Ayudarte?</h1>
        <h3 className="text_P">
          ¿Buscas un producto en especial? ¿Tienes alguna pregunta? ¿Necesitas
          una Cotización o más información?
        </h3>
        <div className="button-productCatalog" >
        <button className="button-custom-black" onClick={handleClick}>
          Contáctanos
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
