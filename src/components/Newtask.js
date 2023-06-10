import React, { useEffect, useState } from "react";
import "./newtask.css";
const Newtask = () => {
  const [currentInput, setCurrentInput] = useState({
    title: "",
    process: "incomplete",
  });
  const [alldata, setAlldata] = useState((localStorage.getItem("alldata"))
  ? JSON.parse(localStorage.getItem("alldata"))
  : []);

  // date
  let getyear = new Date().getFullYear().toString();
  let getdate = new Date().getDate().toString().padStart(2, "0");
  let getmonth = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const currentDate = new Date();
  const options = { hour: "numeric", minute: "numeric" };
  const gettime = currentDate.toLocaleTimeString([], options);
  const fulltime = gettime + "," + getdate + "/" + getmonth + "/" + getyear;
  console.log(fulltime);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("data");
    console.log(dataFromLocalStorage);
    if (dataFromLocalStorage === []){
      setAlldata(JSON.parse(dataFromLocalStorage));
    }else {
      setAlldata(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("data", JSON.stringify(alldata));
  },[alldata])

  const stopadd = () => {
    console.log("close");
    document.getElementById("newtaskcontainer").style.display = "none";
  };

  
  const inputchangehandler = (e) => {
    setCurrentInput({ ...currentInput, [e.target.name]: e.target.value });
    console.log(currentInput);
  };
  const submittoadddata = (e) => {
    if (currentInput.title == "") {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    } else {
      setAlldata([...alldata, currentInput]);
      setCurrentInput({ title: "", process: "" });
      
    
    }
    
  };

  return (
    <>
      <div id="newtaskcontainer">
        <div className="close-icon">
          <div className="close">
            <i className="fa fa-close" onClick={stopadd}></i>
          </div>
        </div>
        <div className="box">
          <h1>Add TODO</h1>
          <h2>Title</h2>
          <input
            type="text"
            name="title"
            value={currentInput.title}
            onChange={inputchangehandler}
          />
          <h2>Status</h2>
          <select
            name="process"
            value={currentInput.process}
            className="process2"
            onChange={inputchangehandler}
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
          </select>
          <div className="multibtn">
            <button className="btn1" onClick={submittoadddata}>
              Add Task
            </button>
            <button className="btn2" onClick={stopadd}>
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
