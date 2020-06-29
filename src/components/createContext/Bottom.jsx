import React, { Component } from 'react'
import {Consumer} from './CreateContext';

export default class Bottom extends Component {
   render() {
      return (
         <div>
            <Consumer>
               {color => {
                  return <h1>{color}</h1>
               }}
            </Consumer>
         </div>
      )
   }
}
