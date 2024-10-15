import React from "react";
import "./template.css";

import smiley from "../../assets/smiley.svg";

function Template() {
  return (
    <div className="template template-styling ">
      <section className="template-title">
        <section className="styling title">Aha!</section>
      </section>

      <section className="template-lower">
        <section className="styling text">A Todo App</section>
        <div>
          <img className="logo" src={smiley} alt="Smiley to the frontpage" />
        </div>
      </section>
    </div>
  );
}

export default Template;
