import React, { useState } from "react";
import "./todo.css";
import Newtask from "./Newtask";
import Edittask from "./Edittask";
import Todolists from "./Todolists";

const Todo = () => {
  const addtask = () => {
    document.getElementById("newtaskcontainer").style.display = "flex";
  };

  const [editid, setEditid] = useState("");
  const editListItem = (taskId) => {
    document.getElementById("edittaskcontainer").style.display = "flex";

    setEditid(taskId);
  };
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const updateTodoList = (newTodo) => {
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    localStorage.setItem("data", JSON.stringify(updatedTodoList));
  };

  const editTodoList = (newTodo) => {
    // const updatedTodoList = [...todoList, newTodo];
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === newTodo.id) {
        return {
          ...todo,
          title: newTodo.title,
          process: newTodo.process,
          time: newTodo.time,
        };
      }
      return todo;
    });

    setTodoList(updatedTodoList);
    localStorage.setItem("data", JSON.stringify(updatedTodoList));
  };

  const deleteListItem = (taskId) => {
    const updatedTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(updatedTodoList);
    localStorage.setItem("data", JSON.stringify(updatedTodoList));
  };

  const [status, setStatus] = useState("all");
  const processchangehandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  const chechedValue = (id) => {
    const updatedTodoListStatus = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          process: (todo.process === "complete") ? "incomplete" : "complete",
        };
      }
      return todo;
    });
    setTodoList(updatedTodoListStatus);
  };
  return (
    <>
      <Newtask updateTodoList={updateTodoList} />
      <Edittask
        editListItem={editListItem}
        todoList={todoList}
        editid={editid}
        editTodoList={editTodoList}
      />
      <div className="container">
        <div className="heading1">TODO LIST</div>
        <div className="main">
          <div className="firstrow">
            <button className="btn" onClick={addtask}>
              Add Task
            </button>
            <select
              name="process"
              onChange={processchangehandler}
              className="process"
            >
              <option value="all" className="option">
                All
              </option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="secondrow">
            <Todolists
              todoList={todoList}
              deleteListItem={deleteListItem}
              editListItem={editListItem}
              chechedValue={chechedValue}
              status={status}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
