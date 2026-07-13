import { useState } from "react";

function TodoForm({onAddTask}) {

  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onAddTask(description);
    if (success) {
      setDescription('');
    }
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit} className='todo-form'>

           <input 
              type="text" 
              placeholder='Masukkan To Do'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className ="inputfield" />
            <button type="submit" className="btn-primary">TAMBAH</button>
        </form>
    </div>
  );
}

export default TodoForm;