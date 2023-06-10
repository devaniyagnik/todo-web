import React,{useState} from "react";
import "./todo.css";
import Newtask from "./Newtask";
import Todolists from "./Todolists";

const Todo = () => {
  
  const addtask = () => {
    document.getElementById("newtaskcontainer").style.display = "flex";
  };

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const updateTodoList = (newTodo) => {
    const updatedTodoList = [...todoList, newTodo];
    setTodoList(updatedTodoList);
    localStorage.setItem("data", JSON.stringify(updatedTodoList));
  };

  const deleteListItem = (taskId) => {
    const updatedTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(updatedTodoList);
    localStorage.setItem("data", JSON.stringify(updatedTodoList));
  };
  
  const [status,setStatus] = useState("all");
  const processchangehandler =(e) =>{
    console.log(e.target.value);
    setStatus(e.target.value);

  }
  return (
    <>
      <Newtask updateTodoList={updateTodoList}/>
      <div className="container">
        <div className="heading1">TODO LIST</div>
        <div className="main">
          <div className="firstrow">
            <button className="btn" onClick={addtask}>
              Add Task
            </button>
            <select name="process" onChange={processchangehandler} className="process">
              <option value="all" className="option">
                All
              </option>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </div>
          <div className="secondrow">
            <Todolists todoList={todoList} deleteListItem={deleteListItem} status={status}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
