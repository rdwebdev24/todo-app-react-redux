import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RemoveTodo } from '../redux/todoapp/action'
import { handleCheckbox } from '../redux/todoapp/action'
const TodoList = ({handleEditForm}) => {
     const todos = useSelector((state)=>state.operationReducer)
     const dispatch = useDispatch()
  return (
    <div className='todowrapper'>
      {todos.map((item)=>{
          const {id,todo,completed} = item
          return (
               <div key={id} className='todo-box'>
                    <div className="content">
                         <input onChange={()=>dispatch(handleCheckbox(id))} className='checkbox' checked={completed} type="checkbox"/>
                         <p style={completed?{textDecoration:'line-through'}:{}}>{todo}</p>
                    </div>
                    <div className="action-box">
                         <button onClick={()=>handleEditForm(item)} className="btn btn-info">edit</button>
                         <button onClick={()=>dispatch(RemoveTodo(id))} className="btn btn-info">delete</button>
                    </div>
               </div>
          )
      })}
    </div>
  )
}

export default TodoList
