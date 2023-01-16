import React from 'react'
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  )
}
