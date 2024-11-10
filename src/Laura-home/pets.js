import tesla from "./pets/teslaApretada.png";
import titan from "./pets/titanApretado.png";
import "./pets.css";

function Pets(){
    return (
        <section id="mascotas-inicio">
            <div className="container-inicio mascotas-inicio">
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
                <div className="tesla-titan-inicio">
                    <img src={tesla} alt="tesla" class="izquierda-inicio" />
                    <img src={titan} alt="titan" class="derecha-inicio" />
                </div>
            </div>
        </section>
    );
}

export default Pets;