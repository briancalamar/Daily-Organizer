import { useState } from 'react'
import { connect } from 'react-redux'

import { IoMdClock, IoMdSend } from 'react-icons/io'
import { BiMessageDetail } from 'react-icons/bi'
import { RiArrowGoBackLine } from 'react-icons/ri'


import './Form.css'
import { createTodo } from '../../../Actions'

function Form({ createTodo }) {
    const [detail, setDetail] = useState(false);
    const [time, setTime] = useState(false);

    const [form, setForm] = useState({
        title: "",
        detail: "",
        time: "No specific time",
    })

    function handleChange(e) {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        createTodo(form)
        setForm({
            title: "",
            detail: "",
            time: "No specific time",
        })
    }

    return (
        <div className="form">
            <h2> INGRESA TU TAREA </h2>
            <form
                className="formInDiv"
                type="submit"
                onSubmit={handleSubmit}>
                <div className="title separator">
                    <h3> Titulo</h3>
                    <input
                        className="input-title"
                        name="title"
                        type="text"
                        placeholder="Ingrese un titulo..."
                        value={form.title}
                        onChange={handleChange} />
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
                                    onClick={() => setTime(!time)}
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
                                {/* <RiArrowGoBackLine
                                    className="btn-minus btn-minus-detail"
                                    onClick={() => setDetail(!detail)}
                                /> */}
                            </div>
                    }
                </div>
                {/* {
                    form.favorite === false
                    ? <AiOutlineStar
                    onClick={() => setForm({ ...form, favorite: !form.favorite })} />
                    : <AiFillStar
                    onClick={() => setForm({ ...form, favorite: !form.favorite })} />
                } */}
                <button
                    className="submit"
                >
                    Enviar  <IoMdSend />
                </button>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        createTodo: (info) => dispatch(createTodo(info)),
    }
}

export default connect(null, mapDispatchToProps)(Form)

