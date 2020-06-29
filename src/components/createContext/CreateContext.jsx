import React, { Component, createContext } from 'react'
import Middle from './Middle';

export const {Provider,Consumer} = createContext()

export default class ContextType extends Component {
   state = {
      color:'pink'
   }
   render() {
      const {color} = this.state
      return (
         <div>
            <Provider value={color}>
               <Middle />
            </Provider>
         </div>
      )
   }
}


// class Middle extends Component {
//    render() {
//       return (
//          <div>
//             <Bottom/>
//          </div>
//       )
//    }
// }

// class Bottom extends Component {
//    render() {
//       return (
//          <div>
//             <Consumer>
//                {
//                   color => <h1>{color}</h1>
//                }
//             </Consumer>
//          </div>
//       )
//    }
// }

