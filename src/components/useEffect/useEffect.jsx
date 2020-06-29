import React, { useState,useEffect } from 'react'

export default function useEffectHook() {

   const [count, setCount] = useState(0)

   /*
      useEffect相当于三个生命周期，分别是：
         componentDidMount
         componentDidUpdate
         componentWillUnmount
   
   */
   useEffect(() => {
     document.title=count
   })

   return (
      <div>
         {count}
         <button onClick={()=>setCount(count+1)}>点击增加</button>
      </div>
   )
}
