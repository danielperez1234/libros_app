import React from "react";
import yo from '../images/yo.jpeg'
import '../style/perfil.css'
import NavApp from "../widgets/nav_bar";
function Perfil() {
  return (
    <div>
      <NavApp></NavApp>
      <div className="PerfilBody">
        
        <div className="rowHeader">
          <div className="foto">
            <img src={yo} alt="" />
          </div>
          <div className="data">
            <h1>
              Daniel Pérez Salgado
            </h1>
            <h4>
              Estudiante Ingenieria en software y sistemas computacionales 6to semestre
            </h4>
            <h6>Experiencia en desarrollo de aplicaciones moviles y Web</h6>
          </div>
        </div>
        <div className="Cards">
         <div className="card">
          <h1>Contacto</h1>
          <div className="body">
          <div className="cardRow">
            <h5>Número: </h5>
              
              <p>477 116 10 67</p>

          </div>
          <div className="cardRow">
            <h5>Mail: </h5>
              
              <p>dan.salgado58d@gmail.com</p>

          </div>
          <div className="cardRow">
            <h5>Git: </h5>
              
              <a href="https://github.com/danielperez1234"><p>https://github.com/danielperez1234</p>
              </a>
          </div>
          </div>
          </div> 
         <div className="card">
         <h1>Contacto</h1>
          </div> 
        </div>
      </div>
    </div>
  )
}
export default Perfil