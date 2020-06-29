import React,{useState} from 'react'
import Children from './Children';

export const MyContext = React.createContext()

export default function UseContext() {
   const [count, setCount] = useState(0)
   return (
      <MyContext.Provider value={count}>
         <Children />
         <h1>{count}</h1>
         <button onClick={()=>{setCount(count+1)}}>changeCount</button>
      </MyContext.Provider>
   )
}
