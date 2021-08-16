import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo/Todo'

import './Todos.css'

export default function Todos() {

    let todos = useSelector(store => store.todos)

    useEffect(()=> {
        console.log(todos)
    })

    return (
        <div className="todos">
            {
                todos.length !== 0
                &&
                todos.map((todo, i) =>
                    <Todo key={i} todo={todo} />)
            }
        </div>
    )
}
