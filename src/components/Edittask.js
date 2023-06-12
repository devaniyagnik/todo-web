import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./edittask.css";
const Edittask = ({ editid, todoList, editTodoList }) => {
  const currentDate = new Date();
  const getyear = currentDate.getFullYear().toString();
  const getdate = currentDate.getDate().toString().padStart(2, "0");
  const getmonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const options = { hour: "numeric", minute: "numeric" };
  const gettime = currentDate.toLocaleTimeString([], options);
  const fulltime = `${gettime},${getdate}/${getmonth}/${getyear}`;
 
 
  const userdata=todoList.filter(todo => todo.id === editid);
   
  const [currentInput, setCurrentInput] = useState({
    id: "",
    title: "",
    process: "incomplete",
    time: fulltime,
  });
  
  useEffect(() => {
    const userdata = todoList.filter((todo) => todo.id === editid);
    if (userdata.length > 0) {
      setCurrentInput({
        id: userdata[0].id,
        title: userdata[0].title,
        process: userdata[0].process,
        time: fulltime,
      });
    }
  }, [editid, todoList]);
  const stopEdit = () => {
    
    document.getElementById("edittaskcontainer").style.display = "none";
  };

  const inputChangeHandler = (e) => {
    setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
    
  };

  const submitToEditData = () => {
    if (currentInput.title === "") {
      const snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
      }, 3000);
    } else {
      editTodoList(currentInput);
      setCurrentInput({ id: userdata[0].id,
        title: userdata[0].title,
        process: userdata[0].process,
        time: fulltime,});
        document.getElementById("edittaskcontainer").style.display = "none";
    }
  };

  return (
    <>
      <div id="edittaskcontainer">
        <div className="close-icon">
          <div className="close">
            <i className="fa fa-close" onClick={stopEdit}></i>
          </div>
        </div>
        <div className="box">
          <h1>Edit TODO</h1>
          <h2>Title</h2>
          <input
            type="text"
            name="title"
            value={currentInput.title}
            onChange={inputChangeHandler}
          />
          <h2>Status</h2>
          <select
            name="process"
            value={currentInput.process || "incomplete"}
            className="process2"
            onChange={inputChangeHandler}
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
          <div className="multibtn">
            <button className="btn1" onClick={submitToEditData}>
              Edit Task
            </button>
            <button className="btn2" onClick={stopEdit}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div id="snackbar" style={{ fontSize: "1.2rem" }}>
        <i
          className="fa fa-times-circle-o"
          style={{ color: "red", marginRight: "10px" }}
          aria-hidden="true"
        ></i>
        Please Enter Title
      </div>
    </>
  );
};

export default Edittask;
