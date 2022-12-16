import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

const red = "#f54e4e";
const green = "#4aec8c";

//Creamos la funcion timer, se importa el progress bar circualr de https://www.npmjs.com

function Timer() {
  //Context me sirve para darle informacion  sin tener que pasar los props manualmente
  const settingsInfo = useContext(SettingsContext);

  //Creamos el useState para paused, que me va a indicar el boton pause cuando está en play y biceversa.
  const [isPaused, setIsPaused] = useState(true);

  const [mode, setMode] = useState("work"); //work//break//null

  //Use state de segundos restntes el inicial será 0 y lo modificamos en el initTiemr
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current = secondsLeftRef.current - 1;
    setSecondsLeft(secondsLeftRef.current);
  }

  //Creamos la funcion init timer, y a la vez necesitamos saber cuantos minutos y segundos nos quedan por lo que tenemos que crear
  //Un state
  //También necesitamos saber si está en modo de trabajo o en modo de descanso por lo que tenemos que crear otro state
  //Si es tiempo de trabajo que me muestre el tiempo correspondiente y aparte que el color de la barra cambie
  function initTimer() {
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  //Me va a cambiar de trabajo a descanso y al revés
  function switchMode() {
    const nextMode = modeRef.current === "work" ? "break" : "work";
    const nextSeconds =
      (nextMode === "work"
        ? settingsInfo.workMinutes
        : settingsInfo.breakMinutes) * 60;
    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  useEffect(() => {
    initTimer();

    //Se cambia a una const interval, para cuando el intervalo se modifique//acumule  vuelva a correr todo de nuevo, y cuando no, se resetee
    const interval = setInterval(() => {
      if (isPausedRef.current) {
        //Si está pausado no me devuelvas nada, no se pueden usar palabras, solo referencias, se importa el useRef
        return; //Si no le hago un ref, me va a devolver todos los parametros dentro de lo dicho, no se actualizaría dentro del intervalo
      }

      if (secondsLeftRef.current === 0) {
        //Si el contador llega a 0 cambiame el modo
        return switchMode();
      }

      tick(); //Si no es ninguna, es decir si está funcionando restame un segundo al contador
    }, 100); //cada segundo

    return () => clearInterval(interval);
  }, [settingsInfo]); //Me va a funcionar el efecto cada vez que cambie settingsInfo, cada vez que lo modifico que mi inicie el timer
  //Por lo que tendria que crear una nueva funcion initTimer

  //Ahora debemos saber cuanto es el porcentaje correspondiente al 60%
  //Mathround porque queremos redondear los valores de cuantos segundos me quedan del total
  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  //Const para saber cuantos minutos y segundos nos quedan
  const minutes = Math.floor(secondsLeft / 60); //POr si el resultado de esto es un decimal que me lo tire a un entero
  let seconds = secondsLeft % 60;

  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div class="timer">
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: mode === "work" ? red : green,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />

      {/* Le damos un estilo a las distintas vistas que vamos a tener aquí en home, junto con el timer. */}
      <div style={{ marginTop: "20px" }}>
        {/* si está pausado, permite que mi boton play funcione, si no que mi boton pause si  */}
        {isPaused 
        ? <PlayButton onClick={()=> {setIsPaused(false); isPausedRef.current =false}} /> 
        : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current =true}} />}

        <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
      </div>
      <div style={{ marginTop: "20px" }}></div>
    </div>
  );
}

export default Timer;
