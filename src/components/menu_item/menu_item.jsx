import React, { useState } from "react";
import "./menu_item.css";
import deleteIcon from "../../assets/trashIcon.svg";

export default function menu({ listOftodos, setTodos }) {
  const [x, setX] = useState(false);
  function eraseTask() {
    console.log("erase");
  }

  const completeTask = (event) => {
    console.log(event);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = event.target.todo.value;

    setTodos((prevTodos) => [
      ...prevTodos,
      { title: newTodo, id: self.crypto.randomUUID(), is_completed: false },
    ]);
    event.target.reset();
  }

  return (
    <>
      <section className="menu_items">
        <ul className="menu_list">
          {listOftodos.todos && listOftodos.todos.length > 0 ? (
            listOftodos.todos?.map((todo, index) => (
              <li className="menu_list_item" key={index}>
                <label
                  className={` ${listOftodos.todos.is_completed ? "greyed-container" : "container"}`}
                  checked={x}
                  onChange={completeTask}
                >
                  <input type="checkbox"></input>
                  <span className="checkmark">{todo.title}</span>
                </label>
                <section onClick={eraseTask}>
                  {<img src={deleteIcon} alt="trash icon" />}
                </section>
              </li>
            ))
          ) : (
            <p className="menu_list_empty">Add some todos</p>
          )}
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
