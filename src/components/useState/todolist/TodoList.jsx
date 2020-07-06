import React , {useState} from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {
   const [todos,setTodos] = useState([])
   function setValue(text) {
      if (text) setTodos([...todos,text])
   }
   return (
      <div>
         <TodoForm listOnSubmit={setValue} />
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
