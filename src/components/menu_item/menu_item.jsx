import React, { useState } from "react";
import "./menu_item.css";
import deleteIcon from "../../assets/trashIcon.svg";

export default function menu({ listOftodos, setTodos }) {
  function eraseTask(event) {
    const result = listOftodos.todos.filter(
      (todo) => todo.id != event.target.id
    );

    setTodos(result);
    return result;
  }

  const completeTask = (event) => {
    console.log("inside", listOftodos.todos);
    for (let i = 0; i < listOftodos.todos.length; i++) {
      if (listOftodos.todos[i].id == event.target.id) {
        listOftodos.todos[i].is_completed = !listOftodos.todos[i].is_completed;
        setTodos(listOftodos.todos, {
          is_completed: !listOftodos.todos[i].is_completed,
        });
      }
    }
    setTodos((prevTodos) => [...prevTodos]);
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

  function Item({}) {
    return <></>;
  }

  console.log("outside", listOftodos.todos);
  return (
    <>
      <section className="menu_items">
        <ul className="menu_list">
          {listOftodos.todos && listOftodos.todos.length > 0 ? (
            listOftodos.todos?.map((todo, index) => (
              <li className={`menu_list_item`} key={index}>
                <label
                  onChange={completeTask}
                  className={`${todo.is_completed ? "greyed-container" : "container"}`}
                >
                  <input type="checkbox" id={todo.id}></input>
                  <span className="checkmark">{todo.title}</span>
                </label>
                <section onClick={eraseTask}>
                  {<img src={deleteIcon} alt="trash icon" id={todo.id} />}
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
