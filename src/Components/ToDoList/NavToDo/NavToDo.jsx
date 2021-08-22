import './NavToDo.css'

import { NavLink, useLocation } from 'react-router-dom'

export default function NavToDo(){

    const location = useLocation().pathname

    return(
        <div className="navToDo">
            <NavLink className={`${location === "/" ? "locStyle ntd-link" : "ntd-link"}`} to="/"> TAREAS </NavLink>
            <NavLink className={`${location === "/tareas/crear" ? "locStyle ntd-link" : "ntd-link"}`} to="/tareas/crear"> CREAR TAREA </NavLink>
        </div>
    )
}