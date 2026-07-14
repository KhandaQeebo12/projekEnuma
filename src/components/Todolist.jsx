import TodoItem from './TodoItem';

function Todolist({tasks, onDeleteTask, onUpdateTask, onToggleStatus}) {
  return (<>
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  </>
  );
}

export default Todolist;