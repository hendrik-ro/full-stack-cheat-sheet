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
      <InteractivityAddEventListener />
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

function InteractivityAddEventListener() {
  const hiddenElement = useRef<HTMLParagraphElement>(null);

  const showMore = () => {
    if (hiddenElement.current) {
      hiddenElement.current.style.display =
        hiddenElement.current.style.display === "none" ? "block" : "none";
    }
  }

  return (
    <div>
      <h2>.addEventListener</h2>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let buttonShow = document.getElementById("button-show");
let hiddenElement = document.getElementById("hidden-element");

const showMore = () => {
  hiddenElement.style.display = "block";
};

buttonShow.addEventListener('click', showMore);`}</SyntaxHighlighter>
      <section id="event-hidden">
        <p
          ref={hiddenElement}
          id={styles.hiddenElement}>This hidden element is shown after clicking the button.</p>
        <button
          id={styles.button}
          onClick={showMore}
        >Show hidden element</button>
      </section>
      <p><strong>Note: </strong>This does not work in React/Next.js. Use <em>useRef</em> instead:</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`const hiddenElement = useRef<HTMLParagraphElement>(null);

const showMore = () => {
  if (hiddenElement.current) {
    hiddenElement.current.style.display =
      hiddenElement.current.style.display === "none" ? "block" : "none";
  }
}`}</SyntaxHighlighter>
      <SyntaxHighlighter
        language="react"
        style={dracula}
      >{`<section id="event-hidden">
        <p
          ref={hiddenElement}
          id={styles.hiddenElement}>This hidden element is shown after clicking the button.</p>
        <button
          id={styles.button}
          onClick={showMore}
        >Show hidden element</button>
      </section>`}</SyntaxHighlighter>
    </div>
  )
}
