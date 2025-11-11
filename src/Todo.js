import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id)
    }
  return (
    <div className="todoItem">
        <label>
            <input type="checkbox" checked={todo.completed} onChange={handleTodoClick}/>
        <span className={todo.completed ? "completed" : ""}>
        {todo.name}
        </span>
        </label>
    </div>
  );
};

export default Todo;
