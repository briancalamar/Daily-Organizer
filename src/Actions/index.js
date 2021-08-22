import { 
    CREATE_TODO, 
    ADD_FAVORITES, 
    DELETE_TODO, 
    EDIT_TODO, 
    CHANGE_STATUS,
    REMOVE_FAVORITES,
    LOAD_LOCAL_STORAGE
} from './actionNames'

export function createTodo(payload){

    let localId = window.localStorage.getItem("id")

    if(!localId) localId = 0;

    localId = ++localId;
    window.localStorage.setItem("id", localId)
    
    return {
        type: CREATE_TODO,
        payload: {
            ...payload,
            id: localId,
            favorite: false,
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

export function loadLocalStorage(payload){
    return {
        type: LOAD_LOCAL_STORAGE,
        payload
    }
}

