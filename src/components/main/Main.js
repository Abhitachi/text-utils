import React, { useState } from "react";
import "./Main.css";

const Main = () => {
  const [text, setText] = useState();

  console.log(text);
  return (
    <div className="main">
      <div>
        <h2>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h2>
      </div>
      <div>
        <label>Enter Your Text Here</label>
        <br />
        <textarea
          cols="150"
          rows="20"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className="text-area"
        ></textarea>
      </div>
      <div className="btns">
        <span onClick={() => setText(text.toUpperCase())}>
          Convert UpperCase
        </span>
        <span onClick={() => setText(text.toLowerCase())}>
          Convert LowerCase
        </span>
        <span onClick={() => setText("")}>Clear Text</span>
        <span onClick={() => window.navigator.clipboard.writeText(text)}>
          Copy to Clipboard
        </span>
        <span onClick={() => setText(text.replace(/\s+/g, " ").trim())}>
          Remove Extra Space
        </span>
      </div>
      <div className="summary">
        <h4>Summary Of Text</h4>
        <span>
          {" "}
          number of Words : {text && text.trim().split(/\s+/).length}
        </span>
        <span> number of Charecters : {text?.length}</span>
        <span id="time">
          Reading Time :
          {text
            ? 0.008 *
              text?.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            : 0}
          :
        </span>
      </div>
      <div>
        <h4>Preview Document</h4>
        <textarea
          className="text-area"
          cols="150"
          rows="5"
          value={text}
          disabled
        ></textarea>
      </div>
    </div>
  );
};

export default Main;
