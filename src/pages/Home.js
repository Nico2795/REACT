import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UsuarioComponent,
  TablaUsuarioContent,
  BotonComponent,
  NavComponent,
} from "../components";
import "../services/Index.css";
import Timer from "./Timer";
import Settings from "./Settings";
import SettingsContext from "./SettingsContext";

//Mostrar settings del pomodoro



//Se escriben los datos que irán dentro de la tabla con los mismos parametros que esta tenga. 
const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    nombreUsuario: "Eljojo",
    correo: "jo.jo@gmail.com",
    contraseña: "contraseña1",
  },
  {
    nombre: "Josuke",
    apellido: "Higashikata",
    nombreUsuario: "Eljojo2",
    correo: "jojo@gmail.com",
    contraseña: "contraseña2",
  },
  {
    nombre: "Marco",
    apellido: "Povea",
    nombreUsuario: "marcopovea",
    correo: "marco@gmail.com",
    contraseña: "contraseña3",
  },
];

const HomePage = () => {
    //Funcion de mostrar TIMER DE POMODORO, le indicamos que showsettings tenga un valor predeterminado de falso que nos servirá para mostrar el timer 
    //o los settings, linea 116
    //Cuando estamos viendo el timer y apretamos el boton de settins queremos que nos muestre setting mediante el setShowSettings
    const [showSettings, setShowSettings] = useState(false);
    //Como no teniamos algo que nos seteara los minutos creamos un const
    //como ya estan como state ahora puedo referenciarlos por sus nombres sin nada mas
    const[workMinutes, setWorkMinutes] = useState(45);
    const[breakMinutes, setBreakMinutes] = useState(15);

    //función que me permite navegar entre paginas, en este caso le estoy diciendo que el handleonclik que asignaré a un boton me lleve a la ventana de autos.
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));

  //En este momento state vale lo mismo que usuario 1
  //Genera una funcion setteadora que me va a permitir cambiar los datos de usuario 1 sin afectarlo directamente.
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  //creamos una funcion que me borre mi usuario, que va a tomar como parametro el nombre de mi usuario. Si el usuario que yo quiero modificar tiene otro nombre no se afectará
  //Solo el nombre del usuario elegido en ese momento
  const userDelete = (nombreUsuario) => {
    const changeUser = user.filter(
      (usuario) => usuario.nombre != nombreUsuario
    );
    //al momento de ocupar la funcion setState, yo le voy a cambiar el valor temporal a mis usuarios.
    setUser(changeUser);
  };

  //función para agregar usuarios. En vez de aplicar un filter quiero que me tome todo lo que está en usuario, todos los parámetros. 
  const userAdd = (usuario) => {
    const addUsuario = [
      //mantenme los datos que tengo en user y agregame lo que yo te entrego aqui(usuario)
      ...user,
      usuario,
    ];
    //actualizamos o seteamos el state
    setUser(addUsuario);
  };

  const userEdit = (usuarioEditado) => {
    //vamos a verificar que la key del usuario editado corresponde a algunos de los usuaris que estan en la lista
    //Tenemos nuestra lista con los usuarios, vamos a editar lo que tenemos aca, queremos verificar que nuestro usuario con vambie el estado general
    //tomamos el rut o correo y vemos si es que es igual al de ese usuario y si no lo es se queda como está, si encuentra que es igual se edita.
    const editUser = user.map((usuario) =>
      usuario.correo === usuarioEditado.correo ? usuarioEditado : usuario
    );

    setUser(editUser);
  };

  return (
    <div>
      <NavComponent />
      <div class="main justify-items-center">
         {/* En usuario component es donde esta el formulario, por lo que tenemos que importar las funciones de agregar, editar 
         El usuarioEditado me causa dudas porque no lo entiendo muy bien*/}
        <UsuarioComponent
          userAdd={userAdd}
          usuarioEditado={usuarioEditado}
          setUsuarioEditado={setUsuarioEditado}
          userEdit = {userEdit}
        />
        <hr></hr>
      </div>
      {/* <TablaUsuarioContent/> */}

      <div class="container mt-3">
        <TablaUsuarioContent
          usuarios={user}
          deleteUser={userDelete}
          setUsuarioEditado={setUsuarioEditado}
        />
        <BotonComponent
          infoBoton={"Ir a autos"}
          handleOnClick={handleOnClick}
        />
      </div>
      {/* Si es que showsettings es true muestrame los settings y si no muestrame el timer */}
      {/* Con el settingscontext queremos proveer workminutes y break, lo que queremos intetar probar ahora dentro del settings  */}
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        //ahora podemos usar estos dos de abajo tanto en settings como en timer
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>

    </div>
  );
};
export default HomePage;
