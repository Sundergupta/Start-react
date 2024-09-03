import React, { useState } from "react";

const initialTasks = [
  { id: 1, name: "Learn React", completed: false },
  { id: 2, name: "Learn Web Development", completed: false },
];

const List = () => {
  const [tasks, setTasks] = useState([...initialTasks]);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value.trim() !== "") {
      setTasks((prevState) => [
        ...prevState,
        {
          id: crypto.randomUUID(),
          name: value,
          completed: false,
        },
      ]);
      setValue("");
    }
  };

  const removeItem = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const checkBox = (id, checked) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: checked } : task
    );
    setTasks(updatedTasks);
  };

  const removeAllItems = () => {
    setTasks([]);
  };

  return (
    <div className="Card">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          className="text-input"
          placeholder="Add a new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add Todo</button>
      </div>
      {tasks.map((item) => (
        <div className="items" key={item.id}>
          <div className="checkbox">
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => checkBox(item.id, e.target.checked)}
            />
          </div>
          <p className="task-name">
            {item.completed ? <del>{item.name}</del> : item.name}
          </p>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>
            &times;
          </button>
        </div>
      ))}
      {tasks.length > 0 && (
        <button className="delete-btn" onClick={removeAllItems}>
          Delete Selected
        </button>
      )}
    </div>
  );
};

export default List;
