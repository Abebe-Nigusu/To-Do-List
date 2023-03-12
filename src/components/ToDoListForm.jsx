import React, { useState } from "react";

const ToDoListForm = (props) => {
  const [toDo, setToDo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToDo = { toDo, completed: false };
    props.addToDo(newToDo);
    setToDo("");
  };

  return (
    <div>
      <legend>Add To Do</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label>To Do</label>
          <input
            type="text"
            name="toDo"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
        </div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoListForm;
