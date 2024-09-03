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
    console.log(id, checked)
    const updatTask = tasks.map((task) => {
      if (task.id === id) {
        task.completed = checked
      }
      return task
    })
    setTasks(updatTask);

  }
  const removeAllitems = () => {
    setTasks([]);
  };

  return (
    <>
      <div className="container">
        <p>Tasks</p>
        <div className="input-container">
          <input className="text-input" value={value} onChange={(e) => setValue(e.target.value)} />
          <button id="addTask" onClick={addTask}><i class="material-icons">+</i></button>
        </div>
        {tasks.map((item) => (
          <div className="items" key={item.id}>
            <div className="checkbox" >
              <input type="checkbox" checked={item.completed} onChange={(e) => {
                checkBox(item.id, e.target.checked)
              }} />
            </div>
            <p>
              {
                item.completed ? <del>{item.name}</del> : item.name
              }

            </p>
            <i onClick={() => removeItem(item.id)} className="fa fa-trash-o"></i>
          </div>
        ))}
      </div>
      <div>
        {
          tasks.length > 0 ?
            <button className="button" onClick={removeAllitems}><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">Delete All</path></svg></button>
            : <> </>
        }
      </div>
    </>
  );
};

export default List;