// import { useDispatch } from "react-redux";
// import { useState } from 'react'
// import { addFavorites, editTodo } from '../../../../Actions'

// import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
// import { BiEdit } from 'react-icons/bi';
// import { GiConfirmed } from 'react-icons/gi';
// import { IoCloseCircle } from 'react-icons/io5';
// import './Todo.css'
// import { useEffect } from "react";

// export default function Todo({ todo, handleClickOpen }) {
//     const [favorite, setFavorite] = useState(todo.favorite)
//     const [edit, setEdit] = useState({
//         edit: false,
//         todo,
//     })

//     useEffect(() => {
//         setEdit({
//             edit: false,
//             todo,
//         })
//     }, [todo])

//     const dispatch = useDispatch()
//     function handleFavorite() {
//         dispatch(addFavorites(todo))
//         // if (!favorite) dispatch(addFavorites(todo))
//         // else dispatch(removeFavorites(todo.id))
//         setFavorite(!favorite)
//     }

//     function handleChange(e) {
//         e.preventDefault()
//         setEdit({
//             ...edit,
//             todo: { ...edit.todo, [e.target.name]: e.target.value }

//         })
//     }

//     function handleCancel() {
//         setEdit({
//             edit: false,
//             todo,
//         })
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         if (!edit.todo.title) setEdit({ ...edit, todo: { ...edit.todo, title: todo.title } })
//         setEdit({ ...edit, edit: false })
//         dispatch(editTodo(edit.todo))
//     }

//     return (
//         <div className="todo">
//             {
//                 edit.edit
//                     ? <input
//                         type="time"
//                         name="time"
//                         className="todo-time todo-i-time"
//                         value={edit.todo.time}
//                         onChange={handleChange}
//                     />
//                     : <p className="todo-time">{todo.time}</p>
//             }

//             <div className="todo-info">
//                 {
//                     edit.edit
//                         ? <input
//                             className="todo-i todo-i-title"
//                             name="title"
//                             type="text"
//                             autoComplete="off"
//                             placeholder="Ingrese un titulo..."
//                             value={edit.todo.title}
//                             onChange={handleChange} />
//                         : <h3>{todo.title}</h3>

//                 }
//                 {
//                     edit.edit
//                         ? <textarea
//                             className="todo-i todo-i-detail"
//                             name="detail"
//                             value={edit.todo.detail}
//                             onChange={handleChange} />
//                         : <p>{todo.detail}</p>
//                 }

//             </div>
//             <div className="todo-edits">
//                 {
//                     !edit.edit
//                         ? <AiFillDelete
//                             className="t-e-i t-e-delete"
//                             onClick={() => handleClickOpen(todo.id)} />
//                         : <IoCloseCircle
//                             className="t-e-i t-e-delete"
//                             onClick={handleCancel} />
//                 }

//                 {
//                     !favorite
//                         ? <AiOutlineStar
//                             className="t-e-i t-e-favorite"
//                             onClick={handleFavorite} />
//                         : <AiFillStar
//                             className="t-e-i t-e-favorite"
//                             onClick={handleFavorite} />
//                 }
//                 {
//                     !edit.edit
//                         ? <BiEdit
//                             className="t-e-i t-e-edit"
//                             onClick={() => setEdit({ ...edit, edit: true })} />
//                         : <GiConfirmed
//                             className="t-e-i t-e-confirm"
//                             onClick={handleSubmit} />
//                 }
//             </div>
//         </div>
//     )
// }


import { useDispatch } from "react-redux";
import { useState } from 'react'
import { addFavorites, editTodo } from '../../../../Actions'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import './Todo.css'
import { useEffect } from "react";

export default function Todo({ todo, handleClickOpen }) {
    const [favorite, setFavorite] = useState(todo.favorite)
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(todo)

    useEffect(() => {

        // if(edit === null ) setEdit(todo)
        setEdit(todo)
        return () => {
            setEdit(null)
        }
    }, [todo])

    const dispatch = useDispatch()

    function handleFavorite() {
        dispatch(addFavorites(todo))
        // if (!favorite) dispatch(addFavorites(todo))
        // else dispatch(removeFavorites(todo.id))
        setFavorite(!favorite)
    }

    // edit


    const handleChange = (e) => {
        e.preventDefault()
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = (e) => {
        e.preventDefault()
        if (!edit.title) setEdit({ ...edit, title: todo.title })
        dispatch(editTodo(edit))
        setOpen(false);
    }

    const handleCloseEdit = () => {
        setEdit(todo)
        setOpen(false);
    };

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
                    onClick={() => handleClickOpen(todo.id)} />
                {

                    !favorite
                        ? <AiOutlineStar
                            className="t-e-i t-e-favorite"
                            onClick={handleFavorite} />
                        : <AiFillStar
                            className="t-e-i t-e-favorite"
                            onClick={handleFavorite} />
                }
                <BiEdit
                    className="t-e-i t-e-edit"
                    onClick={() => setOpen(true)} />
            </div>

            {/* edit */}
            <Dialog
                open={open}
                onClose={handleCloseEdit}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth="sm"
            >
                <DialogTitle id="alert-dialog-title">{"Edicion de tarea"}</DialogTitle>
                <DialogContent>
                    <form className="formInDiv">
                        <div className="title separator">
                            <h3> Titulo* </h3>
                            <input
                                className="input-title"
                                name="title"
                                type="text"
                                autoComplete="off"
                                placeholder="Ingrese un titulo..."
                                value={edit.title}
                                onChange={handleChange} />
                        </div>
                        <div className="time separator">
                            <h3>Horario</h3>
                            <div className="task-form-time">
                                <input
                                    type="time"
                                    name="time"
                                    className="input-time"
                                    value={edit.time}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="detail separator">
                            <h3>Detalles</h3>
                            <div className="task-form-detail">
                                <textarea
                                    className="input-detail"
                                    name="detail"
                                    value={edit.detail}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleCloseEdit} className="buttons-c cancel-c">
                        Cancelar
                    </button>
                    <button onClick={handleEdit} className="buttons-c delete-c" autoFocus>
                        Confirmar
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


