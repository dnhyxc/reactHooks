import React, { useState, useCallback } from 'react'

let sum = 0

export default function Usecallback() {
   const [count, setCount] = useState(0)
   const [count1, setCount1] = useState(0)

   function CountSum(a, b) {
      console.log('CountSum执行了')
      return sum = a + b
   }

   const increment = useCallback(
      () => {
         console.log("useCallback执行了······")
         setCount1(count1+1)
         CountSum(count1, count)
      },
      [count]
   )
   return (
      <div>
         <p>count:{count}</p>
         <button onClick={()=>{setCount(count+1)}}>changeCount</button>
         <p>count1:{count1}</p>
         <p>sum:{sum}</p>
         <button onClick={increment}>changeCount</button>
      </div>
   )
}
