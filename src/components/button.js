import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

export const Button = props => {
  return (
    <button
      style="height:40px;font-weight:bold;"
      id={props.id}
      onClick={props.onClick}
    >
      {props.text || "Hello"}
    </button>
  );
};

registerAsWebComponent(Button, "my-button");
