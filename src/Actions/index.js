import { 
    CREATE_TODO, 
    ADD_FAVORITES, 
    DELETE_TODO, 
    EDIT_TODO, 
    CHANGE_STATUS,
    REMOVE_FAVORITES
} from './actionNames'

let id = 0;

export function createTodo(payload){
    
    return {
        type: CREATE_TODO,
        payload: {
            ...payload,
            id: ++id,
            status: false,
        },
    };
};

export function deleteTodo(payload){
    return {
        type: DELETE_TODO,
        payload,
    }
}

export function editTodo(payload){
    return {
        type: EDIT_TODO,
        payload,
    }
}

export function changeStatus(payload){
    return {
        type: CHANGE_STATUS,
        payload,
    }
}

export function addFavorites(payload){
    return {
        type: ADD_FAVORITES,
        payload,
    }
}

export function removeFavorites(payload){
    return {
        type: REMOVE_FAVORITES,
        payload,
    }
}

