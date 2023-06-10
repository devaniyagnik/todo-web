import React, { useEffect, useState } from "react";

const Todolists = () => {
  const [getdata, setGetdata] = useState([]);
  useEffect(() => {
    setGetdata(JSON.parse(localStorage.getItem("data")));
  }, [getdata]);
  const deleteListItem = (e) => {
    alert("delete item " + e.id);
    const deletedata = getdata.filter((ef) => ef.id !== e.id);
    setGetdata(deletedata);

    setTimeout(() => {
      localStorage.setItem("data", JSON.stringify(deletedata));
    }, 100);
  };
  return (
    <>
      {getdata.map((e) => {
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
                    onClick={() => deleteListItem(e)}
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
