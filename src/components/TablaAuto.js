import React from "react";
import '../services/Index.css'

const TablaAutoContent = () => {
    return (
      <div class="container">
        <table class="table">
          <thead>
            <tr class="table-primary">
              <th scope="col">#</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Color</th>
              <th scope="col">Precio</th>
              <th scope="col">Año</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="tablita">
              <th scope="row">1</th>
              <td>Toyota</td>
              <td>Yaris</td>
              <td>Dorado</td>
              <td>50000</td>
              <td>1995</td>
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

  export default TablaAutoContent