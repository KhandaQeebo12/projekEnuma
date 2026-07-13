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

import project from './pages/project'
import pelatihan from './pages/pelatihan'
import about from './pages/about'

function App() {
  const { tasks, toggleTaskStatus, addTask, deleteTask, updateTask } = useTask();

  return (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/pelatihan" element={<pelatihan />} />
      <Route path="/project" element={<project />} />
      <Route path="/about" element={<about />} />
    </Routes>
    
    <h2>TO DO APP</h2>
    
    
    <TodoForm onAddTask={addTask}/>
    <Todolist
      tasks={tasks}
      onDeleteTask={deleteTask}
      onUpdateTask={updateTask}
      onToggleStatus={toggleTaskStatus}
    />

  </>

    
  )
}

export default App
