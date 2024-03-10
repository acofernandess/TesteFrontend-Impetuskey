import React, { useState } from 'react';

const NivelMedio = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleAdd = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: newTask, completed: false },
      ]);
      setNewTask('');
    }
  };

  return (
    
    <div Class="bg-black">
      
      <div className="p-4 mx-auto max-w-2xl h-800 rounded bg-white bg-opacity-80">

        <h1 className="text-3xl font-bold mb-4 text-center">CONTROLE DE ATIVIDADES DO DIA</h1>
      <div class="mb-4 flex">
        <input
          type="text"
          placeholder="Descreva sua nova atividade antes de adicionar..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          class="border rounded-l px-2 py-1 flex-grow"
        />
        <button onClick={handleAdd} class="bg-black text-white px-4 py-1 rounded-r hover:bg-green-800 hover:text-white">
          Adicionar
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} class="flex items-center mb-2">
            <input
              type="checkbox"
              id={`task${task.id}`}
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              class="mr-2"
            />
            <label htmlFor={`task${task.id}`} class={task.completed ? 'line-through' : ''}>
              {task.text}
            </label>
            <button onClick={() => handleRemove(task.id)} class="ml-2 text-red-500 underline">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default NivelMedio;
