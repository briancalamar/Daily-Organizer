
import Form from '../Form/Form'
import Todo from '../Todos/Todos'
import './Container.css'

export default function Container() {

    return (
        <div className="todo-container">
                <Form />
                <Todo/>
        </div>
    )
}