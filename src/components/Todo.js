import React from "react";
import "./todo.css";
import Newtask from "./Newtask";
import Todolists from "./Todolists";

const Todo = () => {
  const addtask = () => {
    document.getElementById("newtaskcontainer").style.display = "flex";
  };
  return (
    <>
      <Newtask />
      <div className="container">
        <div className="heading1">TODO LIST</div>
        <div className="main">
          <div className="firstrow">
            <button className="btn" onClick={addtask}>
              Add Task
            </button>
            <select name="process" className="process">
              <option value="all" className="option">
                All
              </option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="secondrow">
            <Todolists />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
