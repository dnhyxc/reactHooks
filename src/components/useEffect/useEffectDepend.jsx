import React, { useState, useEffect } from 'react'

let index = 0

export default function useEffectDepend() {
   const [count, setCount] = useState(0)
   const [name, setName] = useState([])
   const names = ['zzz', 'mmm', 'sss', 'nnn']

   if (index > 3) {
      index = 0
   }

   /*
      useEffect第二个参数：依赖项数组说明
      1，[]：当是空数组时，相当于生命周期函数的：componentDidMount。
      并且只会在初始化的时候执行一次，之后就不再执行
      2，没有依赖项时，相当于生命周期的componentDidMount和componentDidUpdate。
      并且每次渲染都会执行。
      3，[count]，当依赖项数组不为空时，
      说明只有依赖项改变的时候才会触发componentDidMount。
   */
   useEffect(() => {
      console.log("执行了")
      document.title = count+name
   },[count])

   return (
      <div>
         <p>count:{count}</p>
         <button onClick={() => { setCount(count + 1) }}>changeCount</button>
         <p>name:{name}</p>
         <button onClick={() => setName(name.concat(names[index++]))}>changeName</button>
      </div>
   )
}
