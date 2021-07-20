import Form from "../Form/Form";
import Todos from "../Todos/Todos";
import './ToDoList.css'

export default function ToDoList(){

    return(
        <div className="todolist">
            <Form/>
            <Todos/>
        </div>
    )
}