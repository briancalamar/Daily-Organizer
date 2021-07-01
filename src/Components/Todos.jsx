import { connect } from 'react-redux'
import Todo from './Todo'

function Todos({ todos }) {
    return (
        <div>
            {
                Object.keys(todos).length !== 0
                &&
                Object.keys(todos).map((hour, i) =>
                <div key={i}>
                    <h1>{hour}</h1>
                    {
                        todos[hour].map((e, i) => <Todo key={i} todo={e} />)
                    }
                </div>)
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}


export default connect(mapStateToProps)(Todos)

