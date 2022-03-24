import React, { useState } from "react";

export const Tasklist = () => {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(["Breakfast"]);
  const handleRemove = (index) => {
    const filtered = tasks.filter((item, i) => i !== index);
    setTasks([...filtered]);
  };
  return (
    <div className="sub">
      <h1>Task List</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setTasks([...tasks, name])}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li onClick={() => handleRemove(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
