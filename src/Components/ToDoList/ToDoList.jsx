import { useEffect } from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import Form from "../Form/Form";
import Todos from "../Todos/Todos";
import Container from "./Container/Container";
import NavToDo from "./NavToDo/NavToDo";
import './ToDoList.css'

export default function ToDoList() {

    const [width, setWidth] = useState(window.innerWidth);

    const listenerWidth = () => {
        setWidth(window.innerWidth)
        console.log(width)
    }

    useEffect(() => {
        window.addEventListener("resize", listenerWidth);

        return () => {
            window.removeEventListener("resize", listenerWidth)
        }
    })

    return (
        <div className="todolist">
            {
                width > 1000 ? 
                <Route path="/tareas" component={Container}/>
                :
                <>
                <Route path="/tareas" component={NavToDo}/>
                <Route exact path="/tareas" component={Todos}/>
                <Route exact path="/tareas/crear" component={Form}/>
                </>
            }
        </div>
    )
}