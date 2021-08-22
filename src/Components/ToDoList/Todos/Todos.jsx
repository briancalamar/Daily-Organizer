import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, loadLocalStorage } from '../../../Actions'
import Todo from './Todo/Todo'

import './Todos.css'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react'

export default function Todos() {

    const dispatch = useDispatch()
    let todos = useSelector(store => store.todos)
    let localTodos = JSON.parse(window.localStorage.getItem("todos"))

    useEffect(() => {
        if (todos || localTodos) {
            if (todos === null) dispatch(loadLocalStorage(localTodos))
            else window.localStorage.setItem("todos", JSON.stringify(todos))
        }
    }, [localTodos, todos, dispatch])

    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null)


    const handleClickOpen = (e) => {
        setId(e)
        setOpen(true);
    };

    const handleDelete = () => {
        dispatch(deleteTodo(id))
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="todos">
            {
                (todos && todos?.length !== 0)
                &&
                todos.map((todo, i) =>
                    <Todo key={i} todo={todo} handleClickOpen={handleClickOpen}/>)
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Estas segur@?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Se eliminara de forma permanente.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose} className="buttons-c cancel-c">
                        Cancelar
                    </button>
                    <button onClick={handleDelete} className="buttons-c delete-c" autoFocus>
                        Confirmar
                    </button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
