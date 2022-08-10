import React from 'react'
import Form from './Form'
import './Todo.css'
import TodoList from './TodoList'
import { useDispatch ,useSelector} from 'react-redux'
import { deleteAll } from '../redux/todoapp/action'
import { useState } from 'react'

const Todo = () => {
 const dispatch = useDispatch()
 const todos = useSelector((state)=>state.operationReducer)
 const [editFormVisibility,setEditFormVisibility] = useState(false)
 const [editTodo,setEditTodo] = useState('')
 

 const handleEditForm = (todo) =>{
     setEditFormVisibility(true)
     setEditTodo(todo)
 }

 
  return (
    <div>
      <div className="wrapper">
          <br />
          <h1 className='text-center'>TODO-APP</h1>
          <Form editTodo={editTodo} editFormVisibility={editFormVisibility}/>
          <TodoList handleEditForm={handleEditForm} editFormVisibility={editFormVisibility}/>
          {todos.length>1&&
          <div className='text-center'>
               <button onClick={()=>dispatch(deleteAll())} className="btn btn-danger deleteAll w-100">Delete All</button>
          </div>
          }
      </div>
    </div>
  )
}

export default Todo
