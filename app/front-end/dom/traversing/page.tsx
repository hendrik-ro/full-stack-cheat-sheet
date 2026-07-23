import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Traversing</h1>
      <Traversing />
      <br />
    </div>
  );
}

function Traversing() {
  return (
    <div id="manipulation-traversing">
      <h2>Traversing</h2>
      <p>With the following HTML:</p>
      <SyntaxHighlighter language="javascript" style={dracula}>{`<ul id='list'>
        <li id='firstItem'>Item 1</li>
        <li id='secondItem'>Item 2</li>
        <li id='thirdItem'>Item 3</li>
      </ul>`}</SyntaxHighlighter>
      <p>
        <code>.parentNode</code> returns the parent node of the element and{" "}
        <code>.children</code> returns a collection of the element`s child
        nodes:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let parentList = document.getElementById('firstItem').parentNode;
let listItems = document.getElementById('list').children;`}</SyntaxHighlighter>
    </div>
  );
}
