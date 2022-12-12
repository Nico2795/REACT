import React from "react";



const AutoComponent = () => {
    return (
    <div class="contenedor">
        <div class="container bg-light" id="cAuto">
            <form>
                <h1>Ingresa los datos de tu Auto</h1>
              <div class="mb-3">
                <label for="Marca" class="form-label">Marca</label>
                <input type="text" class="form-control" id="Marca" />
              </div>
              <div class="mb-3">
                <label for="exampleInputModelo" class="form-label">Modelo</label>
                <input type="text" class="form-control" id="exampleInputModelo"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputColor" class="form-label">Color</label>
                <input type="text" class="form-control" id="exampleInputColor" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPrecio" class="form-label">Precio</label>
                <input type="number" class="form-control" id="exampleInputPrecio" />
              </div>
              <div class="mb-3">
                <label for="exampleInputAño" class="form-label">Año</label>
                <input type="date" class="form-control" id="exampleInputAño" />
              </div>
            </form>
        </div>
        </div>
      );
}

export default AutoComponent;