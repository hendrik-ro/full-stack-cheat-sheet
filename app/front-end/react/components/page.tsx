import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Containers and Components</h1>
      <p>Containers and components are the building blocks of React.</p>
      <ul>
        <li><strong>Containers: </strong>are stateful</li>
        <li><strong>Components: </strong>are stateless</li>
      </ul>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
        >{`import React from "react";

export default function Container() {
  // keeps track of the state and updates the UI when it changes
  const [props, setProps] = React.useState([]);

  function handlePropsChange(newProps) {
    setProps(newProps);
  }

  return (
    <div>
      <Component1 props={props} onPropsChange={handlePropsChange} />
      <Component2 props={props} onPropsChange={handlePropsChange} />
    </div>
  );
}

function Component1(props, onPropsChange) {
  // props are passed down from the parent container
  return (
    <div>
      <p>{props}</p>
    </div>
  );
}

function Component2(props, onPropsChange) {
  // props are updated by the parent container
  return (
    <div>
      <p>{props}</p>
    </div>
  );
}`}</SyntaxHighlighter>
      <br />
    </div>
  );
}
