import React , {useState} from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {

   const [todos,setTodos] = useState([])

   function setValue(text) {
      if (text) {
         setTodos([...todos,text])
      }
      console.log(text)
   }

   return (
      <div>
         <TodoForm onSubmit={setValue} />
         <div>
            {
               todos.map((item,index) => {
                  return (
                     <li key={index}>{item}</li>
                  )
               })
            }
         </div>
         <button onClick={()=>{setTodos([])}}>清除内容</button>
      </div>
   )
}
