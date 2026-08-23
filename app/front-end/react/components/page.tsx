import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Containers and Components</h1>
      <p>Containers and components are the building blocks of React.</p>
      <ul>
        <li>
          <strong>Containers: </strong>are <em>stateful</em> and hold the
          different states of the application
        </li>
        <li>
          <strong>Components: </strong>are <em>stateless</em> and hold the UI
          logic such as HTML-like JSX
        </li>
      </ul>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React from "react";
import { useState } from "react";

export default function Container() {
  const [value, setValue] = useState([]);

  function handleValueChange(newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Component1 value={value} onValueChange={handleValueChange} />
      <Component2 value={value} onValueChange={handleValueChange} />
    </div>
  );
}

function Component1({ value, onValueChange }) {
  const handleChange = (e) => {
    const newValue = [...value, e.target.value]
    onValueChange(newValue);
  };

  return (
    <div>
      <p>{JSON.stringify(value)}</p>
      <form onSubmit={(e) => { e.preventDefault(); handleChange(e); }}>
        <input type="text"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function Component2({ value, onValueChange }) {
  return (
    <div>
      <p>{JSON.stringify(value)}</p>
    </div>
  );
}`}</SyntaxHighlighter>
      <p>
        The above container handles the state of <code>value</code>, whilst{" "}
        <code>Component1</code> and <code>Component2</code> are stateless.
      </p>
      <p>
        When <code>value</code> changes, <code>Component1</code> and{" "}
        <code>Component2</code> are updated with the new value.
      </p>
      <br />
    </div>
  );
}
