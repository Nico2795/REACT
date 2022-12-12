import React from "react";
import {UsuarioComponent, TablaUsuarioContent} from "../components";
import '../services/Index.css'

const HomePage = () =>{
    return(
        <div>
            <div class="main">
            <UsuarioComponent/>

            </div>

            <TablaUsuarioContent/>

        </div>
    )
}

export default HomePage;