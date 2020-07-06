import React, { useState } from 'react'
// 定义逻辑复用的hook
const useInputValue = (inputValue) => {
   const [value, setValue] = useState(inputValue)
   return {
      value,
      onChange: e => e.target.value.trim()?setValue(e.target.value):null,
      reSetValue: () => setValue(""),
      onFocus: () => inpRef.current.focus()
   }
}
const inpRef = React.createRef()

export default function TodoForm({ listOnSubmit }) {
   const { reSetValue, onFocus, ...text } = useInputValue('')
   function onSubmitHeader(e) {
      e.preventDefault()
      // 调用父组件方法将新的value加入到todos中
      listOnSubmit(text.value)
      reSetValue()   // 清空输入框
      onFocus()   // 获取焦点
   }
   return (
      <form onSubmit={onSubmitHeader}>
         {/* 受控组件
         <input type="text" value={value}
            onChange={e => setValue(e.target.value)}
         /> */}
         <input type="text" {...text} ref={inpRef} />
         <input type="submit" />
      </form>
   )
}
