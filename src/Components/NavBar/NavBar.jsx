import './NavBar.css'

import { CgMenuGridO } from 'react-icons/cg'

export default function NavBar(){

    function handleAlert() {
        alert("Proximamente nuevas funcionalidades!")
    }
    return(
        <div className="navBar">
            <CgMenuGridO className="nb-icon" onClick={handleAlert}/>
        </div>
    )
}