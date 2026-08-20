import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Hooks</h1>
      <HooksUseState />
    </div>
  );
}

function HooksUseState() {
  return (
    <div>
      <h2>useState</h2>
      <p>
        <code>useState(initialState)</code> can be used to declare a state
        variable within a component:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    if (count > 10) {
      setCount(0);
    } else {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleChange}>+</button>
    </div>
  );
}`}</SyntaxHighlighter>
      <p>
        <strong>Note: </strong> it is safer to use{" "}
        <code>setCount(prevCount =&gt; prevCount + 1)</code> when updating state
        based on the previous value.
      </p>
    </div>
  );
}
