import TodoItem from './TodoItem';

function Todolist({tasks}) {
  return (<>
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          />
      ))}
    </div>
  </>
  );
}

export default Todolist;