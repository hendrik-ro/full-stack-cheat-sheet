import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PropsPage() {
  return (
    <div>
      <h1>Props</h1>
      <PropsPassing />
    </div>
  );
}

function PropsPassing() {
  return (
    <div>
      <h2>Passing Props</h2>
      <p>To pass props to a component, you can use the props object.</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`export default function PropsPassing(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Description: {props.description}</p>
      <button onClick={props.onClick}>Click me</button> // props.onClick is a function
    </div>
  );
}`}</SyntaxHighlighter>
      <p>Conventionally, functions are named <code>handleEvent</code> and <code>onEvent</code> and passed as props to components like this:</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`export default function App() {
function handleClick() {
  console.log("Button clicked");
}
  return (
    <div>
      <PropsPassing props={{
        name: "Headline",
        description: "Description",
        onClick: handleClick
      }} />
    </div>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}
