import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoItem from './components/TodoItem'
import Todolist from './components/Todolist'
import TodoForm from './components/TodoForm'
import useTask from './Hook/useTask'
import Navbar from './components/Navbar'

function App() {
  const { tasks, toggleTaskStatus, addTask, deleteTask, updateTask } = useTask();

  return (
  <>
    <Navbar />
    
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
