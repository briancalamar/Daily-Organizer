import { useDispatch } from "react-redux";
import { useState } from 'react'
import { addFavorites, editTodo } from '../../../../Actions'

import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { GiConfirmed } from 'react-icons/gi';
import { IoCloseCircle } from 'react-icons/io5';
import './Todo.css'

export default function Todo({ todo, handleClickOpen }) {
    const [favorite, setFavorite] = useState(todo.favorite)
    const [edit, setEdit] = useState({
        edit: false,
        todo,
    })
    const dispatch = useDispatch()
    function handleFavorite() {
        dispatch(addFavorites(todo))
        // if (!favorite) dispatch(addFavorites(todo))
        // else dispatch(removeFavorites(todo.id))
        setFavorite(!favorite)
    }

    function handleChange(e) {
        e.preventDefault()
        setEdit({
            ...edit,
            todo: { ...edit.todo, [e.target.name]: e.target.value }

        })
    }

    function handleCancel() {
        setEdit({
            edit: false,
            todo,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!edit.todo.title) setEdit({ ...edit, todo: { ...edit.todo, title: todo.title } })
        setEdit({ ...edit, edit: false })
        dispatch(editTodo(edit.todo))
    }

    return (
        <div className="todo">
            {
                edit.edit
                    ? <input
                        type="time"
                        name="time"
                        className="todo-time todo-i-time"
                        value={edit.todo.time}
                        onChange={handleChange}
                    />
                    : <p className="todo-time">{todo.time}</p>
            }

            <div className="todo-info">
                {
                    edit.edit
                        ? <input
                            className="todo-i todo-i-title"
                            name="title"
                            type="text"
                            autoComplete="off"
                            placeholder="Ingrese un titulo..."
                            value={edit.todo.title}
                            onChange={handleChange} />
                        : <h3>{todo.title}</h3>

                }
                {
                    edit.edit
                        ? <textarea
                            className="todo-i todo-i-detail"
                            name="detail"
                            value={edit.todo.detail}
                            onChange={handleChange} />
                        : <p>{todo.detail}</p>
                }

            </div>
            <div className="todo-edits">
                {
                    !edit.edit
                        ? <AiFillDelete
                            className="t-e-i t-e-delete"
                            onClick={() => handleClickOpen(todo.id)} />
                        : <IoCloseCircle
                            className="t-e-i t-e-delete"
                            onClick={handleCancel} />
                }

                {
                    !favorite
                        ? <AiOutlineStar
                            className="t-e-i t-e-favorite"
                            onClick={handleFavorite} />
                        : <AiFillStar
                            className="t-e-i t-e-favorite"
                            onClick={handleFavorite} />
                }
                {
                    !edit.edit
                        ? <BiEdit
                            className="t-e-i t-e-edit"
                            onClick={() => setEdit({ ...edit, edit: true })} />
                        : <GiConfirmed
                            className="t-e-i t-e-confirm"
                            onClick={handleSubmit} />
                }
            </div>
        </div>
    )
}


