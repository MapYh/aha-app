import React, { useState } from "react";
import "./menu_item.css";
import deleteIcon from "../../assets/trashIcon.svg";

export default function menu(props) {
  const [formData, setFormData] = useState(["test", "test two"]);
  function completeTask() {}
  function deleteTask() {}
  let id = 3;
  function handleSubmit(event) {
    event.preventDefault();
    const text = event.target.todo.value;
    setFormData(...formData, text);
    console.log(text);
  }
  console.log(formData);
  return (
    <>
      <section className="menu_items">
        <ul className="menu_list">
          <li className="menu_list_item" key={id++}>
            <label className="container ">
              <input
                type="checkbox"
                onClick={() => {
                  completeTask();
                }}
              ></input>
              <span className="checkmark">{formData}</span>
            </label>

            <section>
              {<img src={deleteIcon} alt="trash icon" onClick={deleteTask()} />}
            </section>
          </li>
        </ul>
      </section>
      <div className="form-footer">
        <form className="form" onSubmit={handleSubmit}>
          <label className="form-label">
            <input
              className="form-label-input"
              type="text"
              name="todo"
              placeholder="Add a new task"
            />
          </label>
          <input className="form-label-btn" type="submit" value="+" />
        </form>
      </div>
    </>
  );
}
