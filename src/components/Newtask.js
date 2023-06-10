import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./newtask.css";
const Newtask = () => {
  const currentDate = new Date();
  const getyear = currentDate.getFullYear().toString();
  const getdate = currentDate.getDate().toString().padStart(2, "0");
  const getmonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const options = { hour: "numeric", minute: "numeric" };
  const gettime = currentDate.toLocaleTimeString([], options);
  const fulltime = `${gettime},${getdate}/${getmonth}/${getyear}`;
  console.log(fulltime);
  const [currentInput, setCurrentInput] = useState({
    id: uuidv4(),
    title: "",
    process: "incomplete",
    time: fulltime
  });
  const [alldata, setAlldata] = useState(
    JSON.parse(localStorage.getItem("data")) === null
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );
  const [updatedata , setUpdatedata] = useState(
    JSON.parse(localStorage.getItem("data")) === null
      ? []
      : JSON.parse(localStorage.getItem("data"))
  );

  useEffect(() => {
    
    localStorage.setItem("data", [JSON.stringify(updatedata)]);
  }, [updatedata]);

  const stopAdd = () => {
    console.log("close");
    document.getElementById("newtaskcontainer").style.display = "none";
  };

  const inputChangeHandler = (e) => {
    setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
    console.log(currentInput);
  };

  const submitToAddData = () => {
    if (currentInput.title === "") {
      const snackbar = document.getElementById("snackbar");
      snackbar.className = "show";
      setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
      }, 3000);
    } else {
     
      const existingData = JSON.parse(localStorage.getItem("data")) || [];
      setUpdatedata([...existingData, currentInput]);
      console.log(updatedata);
      setAlldata([...alldata, currentInput]);
      setCurrentInput({  id: uuidv4(),
        title: "",
        process: "incomplete",
        time: fulltime });
    }
  };

  return (
    <>
      <div id="newtaskcontainer">
        <div className="close-icon">
          <div className="close">
            <i className="fa fa-close" onClick={stopAdd}></i>
          </div>
        </div>
        <div className="box">
          <h1>Add TODO</h1>
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
            <button className="btn1" onClick={submitToAddData}>
              Add Task
            </button>
            <button className="btn2" onClick={stopAdd}>
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

export default Newtask;
