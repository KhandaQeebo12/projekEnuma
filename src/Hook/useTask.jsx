import { useEffect, useState } from "react";

function useTask() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    
    const showFlash = (type, message) => {
        if (type === "error") {
            setError(message);
            setSuccess("");
        } else {
            setSuccess(message);
            setError("");
        }
        const timer = setTimeout(() => {
            setError("");
            setSuccess("");
        }, 3000)
        return () => clearTimeout(timer);
    };

    const addTask = (description) => {
        setError("");
        setSuccess("");

        if (!description) {
            showFlash("error", "Task description cannot be empty.");
            return false;
        }
        if (description.length < 5) {
            showFlash("error", "Task description cannot be empty.");
            return false;
        }
        
        const newTask = {
            id: +new Date(),
            task: description.trim(),
            status: "0"
        };
        
        setTasks((prevTasks) => [...prevTasks, newTask]);
        showFlash("success", "Task added successfully.");
        return true;
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        showFlash("success", "Task deleted successfully.");
    };

    const updateTask = ( id, updatedDesc, updatedStatus) => {
        setError("");
        setSuccess("");

        if(!updatedDesc || updatedDesc.trim().length < 5) {
            showFlash("error", "Task description must be at least 5 characters long.");
            return false;
        }

        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, task: updatedDesc.trim(), status: updatedStatus } : task
            )
        );
        showFlash("success", "Task updated successfully.");
        return true;
    };

    const toggleTaskStatus = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, status: task.status === "0" ? "1" : "0" } : task
            )
        );
        showFlash("success", "Task status updated successfully.");
    }

    return { tasks, error, success, addTask, deleteTask, updateTask, toggleTaskStatus };
}

export default useTask;