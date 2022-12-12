import React from "react";
import '../services/Index.css'

const TablaUsuarioContent = () => {
    return (
      <div class="container">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Nombre de usuario</th>
              <th scope="col">Correo</th>
              <th scope="col">Contraseña</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tablita1">
              <th scope="row">1</th>
              <td>Nico</td>
              <td>Busta</td>
              <td>NIcooo</td>
              <td>nico278945</td>
              <td>******</td>
              <td>
                <input class="btn btn-primary me-2" type="submit" value="Enviar"/>
                <button type="button" class="btn btn-warning me-2">Modificar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
                </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default TablaUsuarioContent