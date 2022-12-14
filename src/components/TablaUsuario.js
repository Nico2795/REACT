import React from "react";
import "../services/Index.css";


//Se importa usuarios. deleteUser, y setUsusarioEditado, qus son las funciones que debemos ocupar en la tabla, es decir, eliminar y modificar los usuarios. 
const TablaUsuarioContent = ({ usuarios, deleteUser, setUsuarioEditado}) => {
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
          {/* hacemos un mapeo de usuario, que recorrera todos los elementos dentro de los td, y los asignará a su lugar correspondiente dentro de la tabla.  */}
          {usuarios.map((usuario) => (
            <tr class="tablita1">
              <th scope="row">1</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellido}</td>
              <td>{usuario.nombreUsuario}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.contraseña}</td>
              <td>

                {/* Botones que me permitiran modificar el usuario ingresado, y también eliminar el usuario por el nombre dado. El editar usuario dado hay que darle el parametro de usuario ya que quiero cambiar todo lo que se encuentre en él */}
                <input
                  class="btn btn-primary me-2"
                  type="submit"
                  value="Enviar"
                />
                <button type="button" class="btn btn-warning me-2 " onClick={()=>{
                  setUsuarioEditado(usuario)
                }}>
                  Modificar
                </button>
                <button type="button" class="btn btn-danger" onClick={() =>{
                  deleteUser(usuario.nombre);
                }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaUsuarioContent;
