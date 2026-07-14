function TodoItem({task, onDeleteTask, onUpdateTask, onToggleStatus}) {
    return ( <>
        <div className='tugas'>
            <input type="checkbox"
                checked={task.status === "1"} 
                onChange={() => onToggleStatus(task.id)}
            />
            <label>{task.task}</label>
            <button onClick={() => {
                const newTask = prompt("Edit task anda", task.task);
                if (newTask !== null) {
                    onUpdateTask(task.id, newTask, task.status);
                }
            }}>
                EDIT
            </button>
            <button onClick={() => onDeleteTask(task.id)}>
                HAPUS
            </button>
        </div>
    </> )
}

export default TodoItem;
