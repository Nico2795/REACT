import React from "react";
import BotonComponent from "./Boton";

const WelcomeComponent = () =>{
    return(
        <div class="text-center">
            <h1>Bienvenido!</h1>
            <BotonComponent infoBoton={"Inicia sesión"} />
        </div>
    )
}

export default WelcomeComponent