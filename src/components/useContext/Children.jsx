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
