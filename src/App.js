import React from "react";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import { HomePage, AutoPage } from "./pages";


const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/Auto" element={<AutoPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;