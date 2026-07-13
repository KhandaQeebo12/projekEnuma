function TodoItem({task}) {
    return ( <>
        <div className='tugas'>
            <input type="checkbox"
                checked={task.status === "1"} 
                readOnly/>
            <label>{task.task}</label>
            <button>EDIT</button>
            <button>HAPUS</button>
        </div>
    </> )
}

export default TodoItem;
