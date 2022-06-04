import React from "react";
import "../styles/Pantalla.css"
//Componente definido como función flecha.
const Pantalla = (props) => (
    <div className="input">
        {props.input}
    </div>
);

export default Pantalla;