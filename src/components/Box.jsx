import React from "react";
import { useState } from "react";

const Box = (props) => {
  const [text, setText] = useState("");
  function toggleText() {
    if (text === "") {
      setText(props.currentState);
      props.changeTurn(props.row, props.column);
    }
  }
  return (
    <div className="box" onClick={toggleText}>
      {text}
    </div>
  );
};

export default Box;
