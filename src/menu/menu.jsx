import React, { useState } from "react";
import "./menu.css";
import Nav from "../components/nav/nav";
import Background from "../components/background/background";

import Menu_item from "../components/menu_item/menu_item";

const objectNav = {
  classname: "menu-styling menu",
  nav_text: "Aha",
  nav_styling: "nav_styling",
};

export default function menu() {
  const [todos, setTodos] = React.useState([
    {
      title: "Some task",
      id: self.crypto.randomUUID(),
      is_completed: false,
    },
    {
      title: "Some other task",
      id: self.crypto.randomUUID(),
      is_completed: false,
    },
    {
      title: "last task",
      id: self.crypto.randomUUID(),
      is_completed: false,
    },
  ]);

  return (
    <section className="menu">
      <Background
        settings={{
          classname: `${objectNav.classname}`,
        }}
        node_nav={
          <Nav
            navSettings={{
              nav_text: `${objectNav.nav_text}`,
              nav_styling: `${objectNav.nav_styling}`,
            }}
          />
        }
        menu_item_node={
          <Menu_item
            listOftodos={{ todos }}
            setTodos={setTodos}
            isDone={todos}
          />
        }
      />
    </section>
  );
}
