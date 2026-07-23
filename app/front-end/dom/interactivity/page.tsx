"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useRef } from "react";
import styles from "./button.module.css";

export default function Page() {
  return (
    <div>
      <h1>Interactivity</h1>

      <InteractivityOnClick />
    </div>
  );
}

function InteractivityOnClick() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor =
        buttonRef.current.style.backgroundColor === "blue" ? "" : "blue";
    }
  };
  return (
    <div>
      <h2>.onClick</h2>
      <p>
        The parameter <code>.onClick</code> can be used to add interactivity to
        a component.
      </p>
      <button id={styles.button} ref={buttonRef} onClick={handleClick}>
        Click me
      </button>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let element = document.querySelector('button');
element.onclick = function() {
      element.style.backgroundColor = 'blue'
        };`}</SyntaxHighlighter>
    </div>
  );
}
