import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos(prev => [...prev, { id: uuidv4(), name, completed: false }]);
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter(todo => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <h1 className="title">To Do List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>
        <input type='text' ref={todoNameRef} placeholder="Add a new task..." />
        <button onClick={handleAddTodo}>Add Task</button>
        <button onClick={handleClear}>Delete Completed Task</button>
      </div>
      <div>
        Remaining Tasks: {todos.filter(todo => !todo.completed).length}
      </div>
    </div>
  );
}

export default App;
