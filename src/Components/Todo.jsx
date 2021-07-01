import { addFavorites, deleteTodo, removeFavorites } from '../Actions';
import { connect } from "react-redux";
import { AiOutlineStar, AiFillStar, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { useDispatach } from 'react-redux';

function Todo({ todo, addFavorites, removeFavorites, deleteTodo }) {
    const [favorite, setFavorite] = useState(false)

    function handleClick(){
        if(!favorite) addFavorites(todo)
        else removeFavorites(todo.id)
        setFavorite(!favorite)
    }

    return (
        <div>
            <h2>{todo.title}</h2>
            <div>
                <AiFillDelete onClick={() => deleteTodo({time:todo.time, id:todo.id})}/>
                {
                    favorite === false
                        ? <AiOutlineStar onClick={handleClick} />
                        : <AiFillStar onClick={handleClick} />
                }
            </div>
            <div>
                <Link to={`/todo/${todo.id}`}>Details</Link>
                <Link to={`/edit/${todo.id}`}>Edit</Link>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addFavorites: (todo) => dispatch(addFavorites(todo)),
        removeFavorites: (id) => dispatch(removeFavorites(id)),
        deleteTodo: (idTime) => dispatch(deleteTodo(idTime))
    }
}

export default connect(null, mapDispatchToProps)(Todo)

