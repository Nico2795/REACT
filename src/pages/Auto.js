import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AutoComponent, BotonComponent, NavComponent, TablaAutoContent } from "../components";

const AutoPage = () =>{
    //Vamos a navegar hasta la página que se le indique, en este caso "/" lleva a la página de usuarios. 
    const navigate = useNavigate();
    const handleOnClick = useCallback(()=> navigate("/", {}, [navigate]))
    return(
        <div>
            <NavComponent/>
            <div class="main">
            <AutoComponent/>
            <hr></hr>
            </div>
            <TablaAutoContent/>
            <div class="container mb-3 mt-2">
            <BotonComponent infoBoton={'Ir a usuarios'} handleOnClick={handleOnClick}/>
            </div>
        </div>
    )
}

export default AutoPage;