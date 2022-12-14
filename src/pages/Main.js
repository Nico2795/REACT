import React from "react";
import {NavComponent, WelcomeComponent}  from "../components";
import '../services/Index.css'


const MainPage = () =>{
    return(
        <div>
            <NavComponent/>
            <div class="welcome d-flex align-items-center justify-content-center">
            <WelcomeComponent/>
            </div>
            
        </div>
    )
}

export default MainPage;