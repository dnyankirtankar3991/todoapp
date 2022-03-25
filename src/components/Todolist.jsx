import React, { useState } from "react";

export const Todolist = () => {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    setData([...data, todo]);
    setTodo("");
  };
  const handleRemove = (item) => {
    const filtered = data.filter((ele) => ele !== item);
    setData([...filtered]);
  };
  return (
    <div className="sub">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {data.map((item) => (
          <li onClick={() => handleRemove(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
