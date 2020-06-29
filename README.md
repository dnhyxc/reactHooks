# `React Hook`

React Hook 是针对函数式组件没有状态而产生的。hook可以让函数式组件和class类组件一样拥有状态，同时可以拥有部分生命周期函数。

## `useState Hook`

1，useState用法:

``` js
   const [count setCount] = useState(0)
```

## `useEffect Hook`

1，useEffect说明：

`useEffect`相当于class类组件中的三个组件，分别是：

(1) `componentDidMount`

(2) `componentDidUpdate`

(3) `componentWillUnmount`

2，useEffect第二个参数：依赖项数组说明：

(1) 当是空数组时，相当于生命周期函数的：`componentDidMount`。**并且只会在初始化的时候执行一次，之后就不再执行**

(2) 没有依赖项数组时，相当于生命周期的`componentDidMount`和`componentDidUpdate`，**并且每次渲染都会执行**。

(3) [count]，**当依赖项数组不为空时，说明只有依赖项改变的时候才会触发`componentDidMount`**。

``` js
   useEffect(() => {
      effect   `// 此处写副作用`
      return () => {
         cleanup  `// 此处写清除副作用代码`
      }
   }, ['此处写依赖项'])
```

## `useCallback`

1，useCallback中第二个参数依赖项决定了是否允许第一个参数callback执行。

2，如果依赖项发生变化，则允许执行，否则就是不允许执行。

3，第一个参数callback初始化时会执行一次，之后才会判断依赖项是否发生变化。

4，useCallback具体使用：

``` js
   const memoizedCallback = useCallback(
     () => {
       doSomething(a, b);
     },
     [a, b],
   );
```

5，useCallback主要用于防止非必要渲染。对性能进行优化。

## `useReducer`

1，useReducer主要用法：

``` js
   import React,{useReducer} from 'react'

   const initialValue = {count:0}
   function reducer(state,action) {
      switch (action.type) {
         case "increment":
            return {count:state.count+1}
         case "decrement":
            return {count:state.count-1}
         default:
            return state
      }
   }

   export default function UseReducer() {
      const [state,dispatch]=useReducer(reducer,initialValue)
      return (
         <div>
            count:{state.count}
            <br/>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            &nbsp;&nbsp;&nbsp;
            < onClick={() => dispatch({ type: "decrement" })}>-</ button>
         </div>
      )
   }
```

## `useContext`

1，useContext基本使用：

``` js
   // Parent
   import React,{useState} from 'react'
   import Children from './Children';

   export const MyContext = React.createContext()

   export default function UseContext() {
      const [count, setCount] = useState(0)
      return (
         <MyContext.Provider value={count}>
            <Children />
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+1)}}>
               changeCount
            <button>
         </MyContext.Provider>
      )
   }
```

``` js
   // Children
   import React,{useContext} from 'react'
   import { MyContext } from './UseContext'

   export default function Children() {

      const count = useContext(MyContext)

      return (
         <div>
            Count:{count*2}
         </div>
      )
   }
```

## `contextType`

1，contextType基本使用

``` js
   import React, { Component, createContext } from 'react'

   const colorContext= createContext()

   export default class ContextType extends Component {
      state = {
         color:'pink'
      }
      render() {
         const {color} = this.state
         return (
            <div>
               <colorContext.Provider value={color}>
                  <Middle />
               </colorContext.Provider>
            </div>
         )
      }
   }

   class Middle extends Component {
      render() {
         return (
            <div>
               <Bottom/>
            </div>
         )
      }
   }

   class Bottom extends Component {
      static contextType = colorContext
      render() {
         const color = this.context
         return (
            <div>
               <h1>{color}</h1>
            </div>
         )
      }
   }
```
