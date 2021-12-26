import { useDispatch } from "react-redux"
import { removeTodo, completeTodo } from "../redux/action"

const Task =({Todo})=>{
    const dispatch= useDispatch()
           
    return (

<div>
    <ul className="item">
        <li className={`Todo ${Todo.isCompleted ? "completed" : ""}`}>{Todo.description}</li>
        <button onClick={()=> dispatch(removeTodo(Todo.id)) }><i className="fas fa-minus-circle"></i></button>
        <button onClick={()=> dispatch(completeTodo(Todo.id))}><i className="fas fa-check-circle"></i></button>
    </ul>
</div>
)
}
export default Task