import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from "./Task"




const ListTask = () => {
    
    const Todos= useSelector(state=> state.Todos)
    
    const [filterCompleted, setFilterCompleted]=useState(false)
    const [filter, setFilter]=useState(false)

    return (
        <div className="all">
            <button onClick={()=>setFilter(false)} >ALL</button>
            <button onClick={()=>{setFilterCompleted(true); setFilter(true)}}>COMPLETED</button>
            <button onClick={()=>{setFilterCompleted(false); setFilter(true)}}>INCOMPLETED</button>
            {
            filterCompleted && filter ? Todos.filter(el=>el.isCompleted).map(Todo=> <Task Todo={Todo} key={Todo.id}></Task>): 
            ! filterCompleted && filter ? Todos.filter(el=>!el.isCompleted).map(Todo=> <Task Todo={Todo} key={Todo.id}></Task>): 
            ! filter ? Todos.map(Todo=> <Task Todo={Todo} key={Todo.id}></Task>) 
        : null}
            </div>
    )
}

export default (ListTask)