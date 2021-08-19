import { useDispatch } from "react-redux";
// import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { addFavorites, removeFavorites, deleteTodo } from '../../../../Actions'

import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import './Todo.css'

export default function Todo({ todo }) {
    const [favorite, setFavorite] = useState(false)
    const dispatch = useDispatch()

    function handleClick() {
        if (!favorite) dispatch(addFavorites(todo))
        else dispatch(removeFavorites(todo.id))
        setFavorite(!favorite)
    }

    return (
        <div className="todo">
            <p className="todo-time">{todo.time}</p>
            <div className="todo-info">
                <h3>{todo.title}</h3>
                <p>{todo.detail}</p>
            </div>
            <div className="todo-edits">
                    <AiFillDelete
                    className="t-e-i t-e-delete" 
                    onClick={() => dispatch(deleteTodo(todo.id))} />
                    {
                        favorite === false
                            ? <AiOutlineStar
                                className="t-e-i t-e-favorite"
                                onClick={handleClick} />
                            : <AiFillStar
                                className="t-e-i t-e-favorite"
                                onClick={handleClick} />
                    }
                    <BiEdit className="t-e-i t-e-edit"/>
            </div>
        </div>
    )
}


