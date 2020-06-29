import React,{useState} from 'react'

export default function useStateHook() {

   const [count , setCount] =useState(0)
   const [num , setNum] =useState(10)

   let number = count + num

   return (
      <div>
         <h1>count:{count}</h1>
         <h1>num:{num}</h1>
         <h1>number:{number}</h1>
         <button onClick={()=>{setCount(count+1)}}>点击增加</button>
         <button onClick={()=>{setCount(count-1)}}>点击减少</button>
         <button onClick={()=>{setNum(num+5)}}>点击增加</button>
         <button onClick={()=>{setNum(num-5)}}>点击减少</button>
      </div>
   )
}
