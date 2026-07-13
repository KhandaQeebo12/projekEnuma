function TodoForm({onAddTask}) {
  return (
    <div className="form">
        <form onSubmit={onAddTask}>
           <input type="text" placeholder='Masukkan To Do' />
            <button>TAMBAH</button>
        </form>
    </div>
  );
}

export default TodoForm;