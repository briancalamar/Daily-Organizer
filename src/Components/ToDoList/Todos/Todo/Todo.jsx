import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
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
            <h4 className="todo-time">{todo.time}</h4>
            <div className="todo-info">
                <h3>{todo.title}</h3>
                <p>{todo.detail}</p>
            </div>
            <div className="todo-edits">
                {/* <div className="t-e-icons"> */}
                    <AiFillDelete onClick={() => dispatch(deleteTodo(todo.id))} />
                    {
                        favorite === false
                            ? <AiOutlineStar onClick={handleClick} />
                            : <AiFillStar onClick={handleClick} />
                    }
                    <Link to={`/edit/${todo.id}`}> <BiEdit/> </Link>
                {/* </div> */}
                {/* <div>
                    <Link to={`/todo/${todo.id}`}>Details</Link>
                </div> */}
            </div>
        </div>
    )
}


