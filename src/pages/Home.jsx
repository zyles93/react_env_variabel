import React, { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    // console.info(process.env.REACT_APP_SECRETKEY) kalau pake react , karena pake vite maka:

    console.info(import.meta.env.VITE_SECRETKEY)
  },[])

  return (
    <div className='App'>
        <h1>Home Page</h1>
    </div>
  )
}
