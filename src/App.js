import React from 'react';
import '../src/style.css'
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
}

export default App;
