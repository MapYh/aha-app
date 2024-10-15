import React from "react";
import "./form.css";

/* const todo = (props) => {
  return (
    <label className="container ">
      <input
        type="checkbox"
        onClick={() => {
          completeTask();
        }}
      ></input>
      <span className="checkmark">{props.todo}</span>
    </label>
  );
}; */

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const todo = event.target.todo.value;
    console.log(todo);
    console.log(event.target.elements.todo.value);
    console.log(event.target.todo.value);
  }
  return (
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
  );
}
