import React , { useState } from 'react'

// 定义逻辑复用的hook
const useInputValue = (inputValue) => {
   const [value, setValue] = useState(inputValue)
   return {
      value,
      onChange: e => setValue(e.target.value),
      reSetValue:()=>setValue("")
   }
}

export default function TodoForm({ onSubmit }) {

   const {reSetValue,...text} = useInputValue("")
   console.log(text)
   function onSubmitHeader(e) {
      e.preventDefault()
      onSubmit(text.value)
      // 清空输入框
      reSetValue()
   }

   return (
      <form onSubmit={onSubmitHeader}>
         {/* 受控组件
         <input type="text" value={value}
            onChange={e => setValue(e.target.value)}
         /> */}
         <input type="text" {...text} />
         <input type="submit" />
      </form>
   )
}
