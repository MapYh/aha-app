import React from "react";
import Background from "../components/background/background";
import Template from "../components/landing-template/template";

import "../landing/landing.css";

const objectBackground = {
  classname: "background-styling background",
};

const Loading = () => {
  return (
    <div>
      <Background
        settings={{
          classname: `${objectBackground.classname}`,
        }}
        landing_node={<Template />}
      />
    </div>
  );
};
export default Loading;
