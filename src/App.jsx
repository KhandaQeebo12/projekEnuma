import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoItem from './components/TodoItem'
import Todolist from './components/Todolist'
import TodoForm from './components/TodoForm'
import useTask from './Hook/useTask'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/home'
import Project from './pages/project'
import Pelatihan from './pages/pelatihan'
import About from './pages/about'

function App() {
  const { tasks, toggleTaskStatus, addTask, deleteTask, updateTask } = useTask();

  return (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pelatihan" element={<Pelatihan />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
    </Routes>

  </>

    
  )
}

export default App
