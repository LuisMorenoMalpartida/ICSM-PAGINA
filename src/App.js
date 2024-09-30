import React from "react";
import './App.css';
import Navbar from "./Luis-header/navbar";
import Home from "./Laura-home/Home";
import Footer from "./Gabo-footer/footer";
import 'primeflex/primeflex.css';
import Cursos from "./Cursos/Cursos";
import Servicios from "./Cesar-servicios/Servicios";
import Nosotros from "./Nosotros/nosotros";
import Contacto from "./Contacto/Contacto";
import Productos from "./Productos/Productos";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cursos" component={Cursos} />
          <Route path="/productos" component={Productos} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
        <Footer />
    </Router> 
    </div>
  );
}

export default App;
