import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoapp/action'
import { handleEditSubmit } from '../redux/todoapp/action'
const Form = ({editFormVisibility,editTodo}) => {
     const [todoValue , setTodo] = useState('')
     const dispatch = useDispatch();
     const [editValue,setEditValue] = useState('')


     useEffect(()=>{
          setEditValue(editTodo.todo)
     },[editTodo])
     // HANDLE SUBMIT //
     const handleSubmit = (e) =>{
          e.preventDefault();
          let date = new Date().getTime().toString()
          let todoobj = {
               id:date,
               todo:todoValue,
               completed:false
          }
          setTodo('')
          dispatch(addTodo(todoobj))
     }

     // EDIT SUBMIT HANDLER
     const EditSubmitHandler = (e) =>{
          e.preventDefault();
          let editObj = {
               id:editTodo.id,
               todo:editValue,
               completed:false
          }
          setEditValue('')
          dispatch(handleEditSubmit(editObj))

     }
  return (
     <>
     {!editFormVisibility?(<form className='form-group custom-form' onSubmit={handleSubmit}>
     <label>Add your Items</label>
     <div className="input-and-btn">
         <input type="text"  className='form-control'
         required
         value={todoValue}
         onChange={(e)=>setTodo(e.target.value)}/>
         <button type='submit' className="btn btn-secondary btn-md">Add</button>
     </div>
   </form>):

   (<form className='form-group custom-form' onSubmit={EditSubmitHandler}>
     <label>Edit your Items</label>
     <div className="input-and-btn">
         <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} className='form-control'required/>
         <button type='submit' className="btn btn-secondary btn-md">Edit</button>
     </div>
   </form>)}
     </>
    
  )
}

export default Form
