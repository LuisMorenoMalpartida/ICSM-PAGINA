import "./ServGallery.css";
import img5 from "../img-5.png";
import img6 from "../img-6.jpeg";
import img7 from "../img-7.jpeg";
import img8 from "../img-8.jpeg";
import img9 from "../img-9.jpeg";
import img10 from "../img-10.jpeg";
import img11 from "../img-11.jpeg";
import img13 from "../img-13.jpeg";
import img14 from "../img-14.jpeg";
import img15 from "../img-15.jpeg";
import img16 from "../img-16.jpeg";
import img17 from "../img-17.jpeg";
import ImageContainer from "./ImageContainer";

export const ServGallery = () => {
  const imgs = [img6, img11, img8, img9, img7, img15, img10, img5, img14, img13, img16, img17]
  
  return (
    <div className="servgallery">
      {imgs.map((img)=>{
        return <ImageContainer divClass="cont-image" img={img}/>
      })}
    </div>
  );
};
