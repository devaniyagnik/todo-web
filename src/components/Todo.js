import React from "react";
import "./todo.css";
import Newtask from "./Newtask";
const Todo = () => {
  const addtask = ()=>{
    document.getElementById("newtaskcontainer").style.display="flex";
  }
  return (
    <>
        <Newtask/>
      <div className="container">
        <div className="heading1">TODO LIST</div>
        <div className="main">
          <div className="firstrow">
            <button className="btn" onClick={addtask}>Add Task</button>
            <select name="process" className="process">
              <option value="all" className="option">
                All
              </option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="secondrow">
            <div className="wrap">
              <div className="left_wrap">
                <input
                  type="checkbox"
                  name="processupdate"
                  className="wrap_checkbox"
                />
                <div>
                  <h2>dfgh</h2>
                  <p>12:43 PM, 06/08/2023</p>
                </div>
              </div>
              <div className="right_wrap">
                
                <div className="icon">
                  <i className="fa fa-pencil"></i>
                </div>
                <div className="icon">
                  <i className="fa fa-trash-o"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
