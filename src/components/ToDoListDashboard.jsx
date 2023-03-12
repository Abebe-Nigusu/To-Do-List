import React from "react";

const ToDoListDashboard = (props) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.toDoList.map((eachToDo, idx) => (
            <tr
              key={idx}
              style={
                eachToDo.completed
                  ? { textDecoration: "line-through" }
                  : { color: "blue" }
              }
            >
              <td>{eachToDo.toDo}</td>
              <td>
                <input
                  type="checkbox"
                  checked={eachToDo.completed}
                  onChange={(e) => props.onUpdateToDo(idx, e.target.checked)}
                />
              </td>
              <td>
                <button onClick={() => props.onDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoListDashboard;
