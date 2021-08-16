import {
    CREATE_TODO,
    ADD_FAVORITES,
    DELETE_TODO,
    EDIT_TODO,
    CHANGE_STATUS,
    REMOVE_FAVORITES
} from '../Actions/actionNames'

const initialState = {
    todos: [],
    favorites: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO: {
            return {...state ,todos: [...state.todos, action.payload]}
        }
        case DELETE_TODO: {

            let filteredTodos = state.todos.filter( t => t.id !== action.payload)
            let filteredFavorites = state.favorites.filter( t => t.id !== action.payload)

            return {
                ...state,
                favorites: filteredFavorites,
                todos: filteredTodos,
            }
        }
        case EDIT_TODO: {
            let editTodos = state.todos.map(e => e.id === action.payload.id
                ? {...e, ...action.payload}
                : e
            )

            return {
                ...state,
                todos: editTodos
            }
        }
        case CHANGE_STATUS: {
            let editTodos = state.todos.map(e => e.id === action.payload
                ? {...e, status: !e.status}
                : e
            )

            return {
                ...state, todos: editTodos
            }
        }
        case ADD_FAVORITES: {

            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case REMOVE_FAVORITES: {

            return {
                ...state,
                favorites: state.favorites.filter(e => e.id !== action.payload)
            }
        }
        default: return state
    }
}


// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case CREATE_TODO: {
//             let time = action.payload.time;
//             let hour = time;

//             if (time !== "No specific time") {
//                 time = time.split(":")
//                 hour = parseInt(time[1]) < 30 ? `${time[0]}00` : `${time[0]}30`
//             }

//             if (!state.todos.hasOwnProperty(hour)) {
//                 return { ...state, todos: { ...state.todos, [hour]: [action.payload] } }
//             }
//             else return { ...state, todos: { ...state.todos, [hour]: [...state.todos[hour], action.payload] } }
//         }
//         case DELETE_TODO: {
//             let time = action.payload.time;
//             let hour = time;

//             if (time !== "No specific time") {
//                 time = time.split(":")
//                 hour = parseInt(time[1]) < 30 ? `${time[0]}00` : `${time[0]}30`
//             }

//             let newHour = state.todos[hour].filter(e => e.id !== action.payload.id)
//             let todos;
//             if (newHour.length > 0) {
//                 todos = { ...state.todos, [hour]: newHour }
//             } else {
//                 delete state.todos[hour]
//                 todos = { ...state.todos }
//             }

//             let favorites = state.favorites;
//             if (state.favorites.find(e => e.id === action.payload.id)) {
//                 favorites = favorites.filter(e => e.id !== action.payload.id)
//             }

//             return {
//                 ...state,
//                 favorites,
//                 todos
//             }
//         }
//         case EDIT_TODO: {
//             let keys = Object.keys(state.todos)
//             let editTodos = keys.map( e => state.todos[e].map(e => e.id === action.payload.id
//                 ? e = action.payload
//                 : e
//             ))

//             return {
//                 ...state,
//                 todos: editTodos
//             }
//         }
//         case CHANGE_STATUS: {
//             let keys = Object.keys(state.todos)
//             let editTodos = keys.map( e => state.todos[e].map(e => e.id === action.payload
//                 ? {...e, status: !e.status}
//                 : e
//             ))

//             return {
//                 ...state, todos: editTodos
//             }
//         }
//         case ADD_FAVORITES: {

//             return {
//                 ...state,
//                 favorites: [...state.favorites, action.payload]
//             }
//         }
//         case REMOVE_FAVORITES: {

//             return {
//                 ...state,
//                 favorites: state.favorites.filter(e => e.id !== action.payload)
//             }
//         }
//         default: return state
//     }
// }