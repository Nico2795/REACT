import { useContext } from "react"
import ReactSlider from "react-slider"
import BackButton from "./BackButton"
import SettingsContext from "./SettingsContext"
import './slider.css'

function Settings(){
    //creamos la const de settings info que usará la funcion de usecontext, que me otorgará los datos que le proveemos desde el home
    const settingsInfo = useContext(SettingsContext)
    //Dentro de la funcion settings, vamos a crear los labels que nos indicarán el tiempo de trabajo y de descanso.
    //Le hacemos un break para que quede uno arriba del otro
    //Y ahora importamos el react-slider, primero lo tenemos que instalar con npm install react-slider
    return(
        <div class="labelSettings" style={{textAlign:'left'}}>
            <label>work minutes: {settingsInfo.workMinutes}:00 </label>
            <br></br>

            {/* Utilizamos el react slider, le agregamos clases, los nombres respectivos y por el momento le dajamos un value de 45(min), min 1 y max 120 */}
            {/* Ahora creamos un css slider */}
            {/* Una vez creado el css lo importamos  */}
            {/* Una vez listo el settings info necesitamos el Onchange */}
            <ReactSlider
            className={'slider'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.workMinutes}
            onChange={newValue=> settingsInfo.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />


            <label>break minutes: {settingsInfo.breakMinutes}:00</label>
            {/* creamos el otro slider que tenga otro color en el css
            ahora queremos utilizar los valores que les dimos asi que creamos
            un nuevo archivo de SettingsContext */}
            <ReactSlider
            className={'slider green'}
            thumbClassName={'thumb'}
            trackClassName={'track'}
            value={settingsInfo.breakMinutes}
            onChange={newValue=> settingsInfo.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div style={{textAlign:"center", marginTop:"20px", alignContent:"center", alignItems:"center"}}>
            <BackButton onClick ={()=> settingsInfo.setShowSettings(false)} />
            </div>

        </div>
    )
}

export default Settings