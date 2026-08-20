import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PropsPage() {
  return (
    <div>
      <h1>Props</h1>
      <PropsPassing />
      <PropsChildren />
      <PropsDefaultValues />
      <br />
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
      <p>
        Conventionally, functions are named <code>handleEvent</code> and{" "}
        <code>onEvent</code> and passed as props to components like this:
      </p>
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

function PropsChildren() {
  return (
    <div>
      <h2>Children</h2>
      <p>
        Every props object has a property called <code>children</code>.
      </p>
      <p>
        <code>children</code> contains everything between the opening and
        closing tags of a component:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`export default function App() {
  return (
    <div>
    // children are the <li> elements passed between the opening and closing tags of the List component
      <List type="Bands">
        <li>Sodom</li>
        <li>Kreator</li>
      </List>
    </div>
  );
}

function List(props) {
  return (
    <div>
      <h1>Favorite {props.type}</h1>
      <ul>
        {props.children} // renders the <li> elements passed between the opening and closing tags of the List component
      </ul>
    </div>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}

function PropsDefaultValues() {
  return (
    <div>
      <h2>Default Values</h2>
      <p>
        You can use default values for props to avoid passing undefined values.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`function Button(props) {
  const { label = "Click me" } = props;
  return <button>{label}</button>
}`}</SyntaxHighlighter>
      <p>
        Alternatively, you can use destructuring to set default values for
        props.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`function Button({ label = "Click me" }) {
  return <button>{label}</button>
}`}</SyntaxHighlighter>
    </div>
  );
}
