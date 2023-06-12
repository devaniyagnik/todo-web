import React, { useState } from "react";

const Todolists = ({ todoList, deleteListItem, status, editListItem ,chechedValue }) => {
    const newtodo = status === "all" ? todoList : todoList.filter((todo) => todo.process === status);

    const handleCheckboxChange = (id) => {
      // alert(`Checkbox with ID ${id} is checked.`);
      chechedValue(id);
      
    };
      return (
    <>
      {newtodo.map((e) => {
        return (
          <>
            <div className="wrap" key={e.id}>
              <div className="left_wrap">
                <input
                  type="checkbox"
                  name="processupdate"
                  className="wrap_checkbox"
                  onChange={() => handleCheckboxChange(e.id)}
                  checked={(e.process==="complete")?true:false}
                />
                <div>
                  <h2 style={{"textDecoration":(e.process === "complete")?"line-through":"none"}}>{e.title}</h2>
                  <p>{e.time}</p>
                </div>
              </div>
              <div className="right_wrap">
                <div className="icon">
                  <i className="fa fa-pencil" onClick={() => editListItem(e.id)}></i>
                </div>
                <div className="icon">
                  <i
                    className="fa fa-trash-o"
                    onClick={() => deleteListItem(e.id)}
                  ></i>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Todolists;
