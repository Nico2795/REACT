import React from "react";
import '../services/Index.css'

const UsuarioComponent = () => {
    return (
        <div class="container bg-light" id="cUsuario">
            <form>
            <h1>Ingresa tus Datos</h1>
            <div class="row g-4 mb-3">
              <div class="col">
                <label for="Nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" id="Nombre"/>
              </div>
              <div class="col">
                <label for="Apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name" id="Apellido"/>
              </div>
            </div>
              <div class="mb-3">
                <label for="NombreDeUsuario" class="form-label">Nombre de usuario</label>
                <input type="text" class="form-control" id="NombreDeUsuario" />
              </div>
              <div class="mb-3">
                <label for="Correo" class="form-label">Correo</label>
                <input type="email" class="form-control" id="Correo" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
            </form>
        </div>
        
      );
}

export default UsuarioComponent;