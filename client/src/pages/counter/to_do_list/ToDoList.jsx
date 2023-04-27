import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
      <div className="todo-list">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              onClick={() => toggleTaskCompletion(index)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
              <button onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;