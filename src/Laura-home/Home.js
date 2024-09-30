import React, { useState } from "react";
import "./home.css"
import "../Deyvis-lab/LabModal.css"
import Carousel from "./carousel";
import About from "./about";
import Modal from "../Deyvis-lab/LabModal"
import Testimonial from "./testimonial";
import Lab from "./lab"

const Home = () => {

  


  return (
    <div>
    <Carousel/>
    <About/>
    <Lab/>
    <Testimonial/>
    </div>
  )
}

export default Home