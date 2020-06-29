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
         <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
   )
}
