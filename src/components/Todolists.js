import React from "react";

const Todolists = ({ todoList, deleteListItem, status }) => {
    const newtodo = status === "all" ? todoList : todoList.filter((todo) => todo.process === status);

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
                />
                <div>
                  <h2>{e.title}</h2>
                  <p>{e.time}</p>
                </div>
              </div>
              <div className="right_wrap">
                <div className="icon">
                  <i className="fa fa-pencil"></i>
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
