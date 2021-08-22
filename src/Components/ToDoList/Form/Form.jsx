import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { IoMdClock, IoMdSend } from 'react-icons/io'
import { BiMessageDetail } from 'react-icons/bi'
import { RiArrowGoBackLine } from 'react-icons/ri'


import './Form.css'
import { createTodo } from '../../../Actions'
import { useHistory } from 'react-router-dom'

export default function Form() {
    const dispatch = useDispatch()
    let history = useHistory();
    const [width] = useState(window.innerWidth);
    const [detail, setDetail] = useState(false);
    const [time, setTime] = useState(false);
    const [danger, setDanger] = useState(false)
    const [form, setForm] = useState({
        title: "",
        detail: "",
        time: "",
    })

    function handleChange(e) {
        e.preventDefault()
        if (e.target.name === "title") setDanger(false)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!form.title) setDanger(true)
        else {
            dispatch(createTodo(form))
            setForm({
                title: "",
                detail: "",
                time: "",
            })
            if (width < 1000) history.push("/");
        }
    }

    return (
        <div className="form">
            <h2> INGRESA TU TAREA </h2>
            <form
                className="formInDiv"
                type="submit"
                onSubmit={handleSubmit}>
                <div className="title separator">
                    <h3> Titulo* </h3>
                    <input
                        className="input-title"
                        name="title"
                        type="text"
                        autoComplete="off"
                        placeholder="Ingrese un titulo..."
                        value={form.title}
                        onChange={handleChange} />
                    {
                        danger && <p className="danger">Ingrese un titulo</p>
                    }

                </div>
                <div className="time separator">
                    <h3>Horario</h3>
                    {
                        time === false
                            ?
                            <button
                                type="button"
                                onClick={() => setTime(!time)}
                                className="btn-clock btn"
                            >
                                <IoMdClock />
                            </button>
                            : <div className="task-form-time">
                                <input
                                    type="time"
                                    name="time"
                                    className="input-time"
                                    value={form.time}
                                    onChange={handleChange}
                                />
                                <RiArrowGoBackLine
                                    className="btn-minus btn-minus-time"
                                    onClick={() => {
                                        setTime(!time)
                                        setForm({
                                            ...form, time: "",
                                        })
                                    }}
                                />
                            </div>

                    }
                </div>
                <div className="detail separator">
                    <h3>Detalles</h3>
                    {
                        detail === false
                            ? <button
                                type="button"
                                value="ADD Details"
                                onClick={() => setDetail(!detail)}
                                className="btn-detail btn"
                            >
                                <BiMessageDetail />
                            </button>
                            : <div className="task-form-detail">
                                <textarea
                                    className="input-detail"
                                    name="detail"
                                    value={form.detail}
                                    onChange={handleChange} />
                            </div>
                    }
                </div>
                <button
                    className="submit"
                >
                    Enviar  <IoMdSend />
                </button>
            </form>
        </div>
    )
}

