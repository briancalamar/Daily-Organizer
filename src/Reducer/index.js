import {
    CREATE_TODO,
    ADD_FAVORITES,
    DELETE_TODO,
    EDIT_TODO,
    CHANGE_STATUS,
    REMOVE_FAVORITES,
    LOAD_LOCAL_STORAGE
} from '../Actions/actionNames'

const initialState = {
    todos: null,
    favorites: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO: {
            let todos;
            state.todos ? todos = [action.payload, ...state.todos] : todos = [action.payload]

            if (action.payload.time !== "") {
                todos = todos.sort((a, b) =>
                    a.time.localeCompare(b.time)
                );
            }

            return { ...state, todos}
        }
        case DELETE_TODO: {

            let filteredTodos = state.todos.filter(t => t.id !== action.payload)
            let filteredFavorites = state.favorites.filter(t => t.id !== action.payload)

            return {
                ...state,
                favorites: filteredFavorites,
                todos: filteredTodos,
            }
        }
        case EDIT_TODO: {
            let editTodos = state.todos.map(e => e.id === action.payload.id
                ? { ...e, ...action.payload }
                : e
            )

            return {
                ...state,
                todos: editTodos
            }
        }
        case CHANGE_STATUS: {
            let editTodos = state.todos.map(e => e.id === action.payload
                ? { ...e, status: !e.status }
                : e
            )

            return {
                ...state, todos: editTodos
            }
        }
        case ADD_FAVORITES: {

            let todos = state.todos.map( t => t.id === action.payload.id 
                ? {...t, favorite: !t.favorite}
                : t
            )

            return {
                ...state,
                todos,
                // favorites: [...state.favorites, action.payload]
            }
        }
        case REMOVE_FAVORITES: {

            return {
                ...state,
                favorites: state.favorites.filter(e => e.id !== action.payload)
            }
        }
        case LOAD_LOCAL_STORAGE: {
            return {
                ...state,
                todos: action.payload
            }
        }
        default: return state
    }
}