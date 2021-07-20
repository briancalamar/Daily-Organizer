import { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../../Actions'

import './Form.css'
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Form({ createTodo }) {
    const [detail, setDetail] = useState(false);
    const [time, setTime] = useState(false);

    const [form, setForm] = useState({
        title: "",
        detail: "",
        time: "No specific time",
    })

    function handleChange(e) {
        // console.log(e.target.name, e.target.value)
        console.log(e.target)
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
            <form
                className="formInDiv"
                type="submit"
                onSubmit={handleSubmit}>
                <input
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={handleChange} />
                {
                    time === false 
                    ? <input
                        type="button"
                        value="Set Time"
                        onClick={() => setTime(!time)} />
                    : <div>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                        />
                        <input
                            type="button"
                            value="-"
                            onClick={() => setTime(!time)} />
                    </div> 
                    
                }
                {
                    detail === false
                        ? <input
                            type="button"
                            value="ADD Details"
                            onClick={() => setDetail(!detail)} />
                        : <div>
                            <input
                                name="detail"
                                type="text"
                                value={form.detail}
                                onChange={handleChange} />
                            <input
                            type="button"
                            value="-"
                            onClick={() => setDetail(!detail)} />
                        </div>
                }
                {/* {
                    form.favorite === false
                        ? <AiOutlineStar
                            onClick={() => setForm({ ...form, favorite: !form.favorite })} />
                        : <AiFillStar
                            onClick={() => setForm({ ...form, favorite: !form.favorite })} />
                } */}
                <button>Enviar</button>
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

