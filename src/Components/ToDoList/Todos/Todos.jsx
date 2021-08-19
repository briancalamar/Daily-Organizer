import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadLocalStorage } from '../../../Actions'
import Todo from './Todo/Todo'

import './Todos.css'

export default function Todos() {

    const dispatch = useDispatch()
    let todos = useSelector(store => store.todos)
    let localTodos = JSON.parse(window.localStorage.getItem("todos"))

    useEffect(()=> {
        if(todos || localTodos){
            console.log("entro al if del useEffect")
            if(todos === null) dispatch(loadLocalStorage(localTodos))
            else window.localStorage.setItem("todos" ,JSON.stringify(todos))
        }
    },[localTodos, todos, dispatch])



    return (
        <div className="todos">
            {
                (todos && todos?.length !== 0)
                &&
                todos.map((todo, i) =>
                    <Todo key={i} todo={todo} />)
            }
        </div>
    )
}
