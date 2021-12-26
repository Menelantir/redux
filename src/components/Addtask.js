import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/action"

const Addtask = () =>{

const [text, setText]= useState('')
const dispatch = useDispatch()

  return (
    <div>
      <input 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      ></input>
      <button 
      onClick={()=>{dispatch(addTodo({id: Math.random(), description:text , done:false})); setText("")}}><i className="fas fa-plus-circle"></i></button>
    </div>
  )
}
export default Addtask