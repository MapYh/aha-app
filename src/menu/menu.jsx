import React from "react";
import "./menu.css";
import Nav from "../components/nav/nav";
import Background from "../components/background/background";

import Menu_item from "../components/menu_item/menu_item";

const objectNav = {
  classname: "menu-styling menu",
  nav_text: "Ahaa",
};

export default function menu() {
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
            }}
          />
        }
        menu_item_node={<Menu_item />}
      />
    </section>
  );
}
