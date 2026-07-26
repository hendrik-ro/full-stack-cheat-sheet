"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useRef } from "react";
import styles from "./button.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Interactivity</h1>
      <InteractivityOnClick />
      <InteractivityAddEventListener />
      <InteractivityEventObject />
      <InteractivityEventTypes />
      <br />
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
      <section id="onclick">
        <p>
          The parameter <code>.onclick</code> can be used to add interactivity
          to a component.
        </p>
        <button id={styles.button} ref={buttonRef} onClick={handleClick}>
          Click me
        </button>
      </section>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let element = document.querySelector('button');
element.onclick = function() {
      element.style.backgroundColor = 'blue'
        };`}</SyntaxHighlighter>
      <p>
        <strong>Note: </strong>This does not work in React/Next.js. Use element
        property <code>onClick</code> instead:
      </p>
      <SyntaxHighlighter language="jsx" style={dracula}>{`<section id="onclick">
  <p>
    The parameter <code>.onclick</code> can be used to add interactivity to a component.
  </p>
  <button id={styles.button} ref={buttonRef} onClick={handleClick}>
    Click me
  </button>
</section>`}</SyntaxHighlighter>
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
  };

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
          style={{ display: "none" }}
          id={styles.hiddenElement}
        >
          This hidden element is shown after clicking the button.
        </p>
        <button id={styles.button} onClick={showMore}>
          Show hidden element
        </button>
      </section>
      <p>
        To remove the event listener <code>.removeEventListener</code> can be
        used.
      </p>
      <p>
        <strong>Note: </strong>This does not work in React/Next.js. Use{" "}
        <code>useRef</code> instead:
      </p>
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
          style={{ display: "none" }}
          id={styles.hiddenElement}>This hidden element is shown after clicking the button.</p>
        <button
          id={styles.button}
          onClick={showMore}
        >Show hidden element</button>
      </section>`}</SyntaxHighlighter>
    </div>
  );
}

function InteractivityEventObject() {
  return (
    <div>
      <h2>Event Object</h2>
      <p>
        The JavaScript <code>event</code> object has properties that can be
        accessed:
      </p>
      <table>
        <thead>
          <tr>
            <td>Propery</td>
            <td>Example</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>.target</code>
            </td>
            <td>
              <code>{`event.target.style.display = 'none'`}</code>
            </td>
            <td>
              Targets the listeners of <code>event</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>.type</code>
            </td>
            <td>
              <code>{`console.log(event.type)`}</code>
            </td>
            <td>
              Returns the <code>event</code> name
            </td>
          </tr>
          <tr>
            <td>
              <code>.timeStamp</code>
            </td>
            <td>
              <code>{`console.log(event.timeStamp)`}</code>
            </td>
            <td>
              Prints the ms between page load and <code>event</code>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        More properties can be found{" "}
        <Link
          href={"https://developer.mozilla.org/en-US/docs/Web/API/Event"}
          target="_blank"
          rel="noopener norefferer"
        >
          here
        </Link>
      </p>
    </div>
  );
}

function InteractivityEventTypes() {
  return (
    <div>
      <h2>Event Types</h2>
      <p>
        There are numerous events built into the DOM. A full list can be found
        on the{" "}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events"
          target="_blank"
          rel="noopener noreferrence"
        >
          MDN event index
        </Link>
      </p>
      <p>
        Example for <code>mouseover</code>:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let element = document.getElementById('element');

function increaseWidth() {
  itemOne.style.width = '450px';
}

itemOne.addEventListener('mouseover', increaseWidth);`}</SyntaxHighlighter>
    </div>
  );
}
