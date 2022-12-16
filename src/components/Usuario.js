import React, { useState, useEffect } from "react";
import "../services/Index.css";
import BotonComponent from "./Boton";

//Este se crea cuando el formulario quede vacio o si esta vacio o no
const initialUsuario = {
  nombre: "",
  apellido: "",
  nombreUsuario: "",
  correo: "",
  contraseña: "",
};

const UsuarioComponent = ({ userAdd, usuarioEditado, setUsuarioEditado, userEdit }) => {
  const [usuario, setUsuario] = useState(initialUsuario);
  const { nombre, apellido, nombreUsuario, correo, contraseña } = usuario;
  //el hook useEffect siempre esta pendiente de si la variable que tiene dentro de sus corchetes cambia el deberá hacer todo lo que tiene en su funcion dentro
  //CONSIDERACION es que useEffect corre al menos 1 vez cuando la página carga por primera vez. 
  //Este es un hook porque vuelve a hacer cargar, renderiza nuevamente a diferencia del onchange. 
  //So usuario editado nullo quiero agregar, si no agregar
  useEffect(()=>{
    if(usuarioEditado!== null){
        setUsuario(usuarioEditado)
    }else{
        setUsuario(
            {
              nombre: "",
              apellido: "",
              nombreUsuario: "",
              correo: "",
              contraseña: "",
              }
        )
    }
  },[usuarioEditado]);

  //tenemos como parametros una e por defecto con los datos que el input nos entrega
  const handleInputChange = (e) => {
    //esta funcion se llama cada vez que nosotros escribimos algo en algun input de
    //nuestra pagina
    const changedFormValue = {
      //va a mantener todos los datos que tiene usuario de los input que no he tocado
      //pero se va a actualizar el atributo que cambie por su nuevo valor.
      ...usuario,
      [e.target.name]: e.target.value,
    };
    setUsuario(changedFormValue);
  };

  return (
    <div class="container bg-light" id="cUsuario">
      <form>
        {/* Si es distinto a nullo entonces editar usuario, si es nullo ingresar usuario */}
                                            {/* verdadero ---------------falso */}
        {usuarioEditado!==null?  <h1>Editar usuario</h1>   :   <h1>Ingresa tus Datos</h1>  }
        <div class="row g-4 mb-3">
          <div class="col">
            <label for="Nombre" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Nombre"
              aria-label="Nombre"
              id="Nombre"
              //para que mi formulario sea capaz de crear un usuario debemos agregarle a los inputs lo siguiente
              name="nombre"
              value={nombre}
              //cuando cambie algo en mi input y cambia voy a hacer algo.
              onChange={handleInputChange}
            />
          </div>
          <div class="col">
            <label for="Apellido" class="form-label">
              Apellido
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Apellido"
              aria-label="Last name"
              id="Apellido"
              name="apellido"
              value={apellido}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="NombreDeUsuario" class="form-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            class="form-control"
            id="NombreDeUsuario"
            name="nombreUsuario"
            value={nombreUsuario}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="Correo" class="form-label">
            Correo
          </label>
          <input
            type="email"
            class="form-control"
            id="Correo"
            aria-describedby="emailHelp"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="contraseña"
            value={contraseña}
            onChange={handleInputChange}
          />
        </div>
        {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userEdit(usuario)}
          >
            Editar usuario
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success"
            onClick={() => userAdd(usuario)}
          >
            Ingresar usuario
          </button>
        )}
      {usuarioEditado !== null ? (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => setUsuarioEditado(null)}
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}


      </form>
    </div>
  );
};

export default UsuarioComponent;

//Agregamos los names(nombres de cada parametro dentro de nuestra lista), los values(los valores que tendrán estos parametros) y el onChange para que cuando se haga un cambio lo reconozca por el parametro a cambiar. 