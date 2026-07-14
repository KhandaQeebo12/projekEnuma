import { useState } from "react";
import Navbar from "../components/Navbar";
import useTask from "../Hook/useTask";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";
import Todolist from "../components/Todolist";

function Home () {
    const { tasks, toggleTaskStatus, addTask, deleteTask, updateTask } = useTask();
    return(
    <>
        <h2>TO DO LIST!</h2>

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

export default Home;