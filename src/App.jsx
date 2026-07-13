import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoItem from './components/TodoItem'
import Todolist from './components/Todolist'
import TodoForm from './components/TodoForm'
import useTask from './Hook/useTask'

function App() {
  const { tasks, addTask, deleteTask, updateTask } = useTask();

  return (
  <>
    <nav>
      <div>INI NAVBAR</div>
      <ul className='nav-list'>
        <li><a href="#home">SATU</a></li>
        <li><a href="#about">DUA</a></li>
        <li><a href="#contact">TIGA</a></li>
      </ul>
    </nav>
    
    <h2>TO DO APP</h2>
    
    
    <TodoForm onAddTask={addTask}/>
    <Todolist />

  </>

    
  )
}

export default App
