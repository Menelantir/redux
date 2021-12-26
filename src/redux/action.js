import { ADD, REMOVE,COMPLETE } from "./actionTypes";

export const addTodo =(newTask)=> {
    return {
     type: ADD,
     payload: newTask   
    }
}

export const removeTodo =(id)=> {
    return {
        type: REMOVE,
        payload: id
    }
}

export const completeTodo =(id)=> {
    return {
        type: COMPLETE,
        payload: id
    }
}

