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