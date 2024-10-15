import React from "react";
import "./nav.css";

import { Link } from "react-router-dom";

export default function nav(props) {
  return (
    <nav className="nav_settings">
      <section className="nav_settings-title">
        {props.navSettings.nav_text}
      </section>
    </nav>
  );
}
