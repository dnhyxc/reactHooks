import React from 'react'
import { useState, useEffect} from 'react'

const useFetch = (url) => {
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      (async () => {
         const response = await fetch(url)
         const data = await response.json()
         console.log(data)
         setData(data)
         setLoading(false)
      })()
   },[])
   return {data,loading}
}

export default function useEffectHttp() {
   const { data, loading } = useFetch('http://localhost:3100/getuser')
   return (
      <div>
         {loading ? <div>loading...</div> : data.name}
      </div>
   )
}

