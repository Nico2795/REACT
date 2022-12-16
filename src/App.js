import React from "react";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import { HomePage, AutoPage, MainPage , LoginPage} from "./pages";
import Timer from "./pages/Timer";

//Rutas correspondientes a las vistas
const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/Auto" element={<AutoPage/>} />
        <Route path = "/Main" element={<MainPage/>} />
        <Route path = "/Login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;