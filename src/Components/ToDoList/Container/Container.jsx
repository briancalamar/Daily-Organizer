import Form from '../../Form/Form'
import Todos from '../../Todos/Todos'
import './Container.css'

export default function Container() {

    return (
        <div className="todo-container">
                <Form />
                <Todos/>
        </div>
    )
}