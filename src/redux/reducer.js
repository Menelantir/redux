import { ADD, REMOVE, COMPLETE } from "./actionTypes";

const initialState = {
    Todos: []
}
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {...state, Todos: [...state.Todos, action.payload]}
        
        case REMOVE:
            return {...state, Todos: state.Todos.filter(el=>el.id !== action.payload)}
        
        case COMPLETE:
            return {...state, Todos: state.Todos.map(el=> el.id === action.payload ? {...el, isCompleted: !el.isCompleted} : el )}

            default:
            return state
    }
}

export default Reducer