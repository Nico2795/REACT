import React from "react";
import BotonComponent from "./Boton";
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';


const AutoComponent = () => {
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    return (
    <div class="contenedor">
      
        <div class="container bg-light" id="cAuto">
            <form>
                <h1>Ingresa los datos de tu auto</h1>
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
            <Switch {...label} defaultChecked color="default" />
            <BotonComponent infoBoton={'Agregar auto'}/>
        </div>

        </div>
      );
}

export default AutoComponent;