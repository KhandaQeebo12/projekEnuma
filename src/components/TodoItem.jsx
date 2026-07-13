function TodoItem({task}) {
    return ( <>
        <div className='tugas'>
            <input type="checkbox" />
            <label>{task}</label>
            <button>EDIT</button>
            <button>HAPUS</button>
        </div>
    </> )
}

export default TodoItem;
