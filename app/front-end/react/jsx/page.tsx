import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JSXPage() {
  return (
    <div>
      <h1>JSX</h1>
      <p>JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.</p>
      <p>It is used in React to define the structure of components.</p>
      <p>JSX needs to be compiled into JavaScript before it can be used in a browser.</p>
      <JSXAttribues />
      <JSXNesting />
      <JSXRendering />
      <br />
    </div>
  );
}

function JSXAttribues() {
  return (
    <div>
      <h2>Attributes</h2>
      <p>JSX elements can have attributes that are passed as props to the component.</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`const paragraph = <p id="paragraph">foo</p>;
// or:
const link = <Link href="https://example.com">Example</Link>;`}</SyntaxHighlighter>
    </div>
  );
}

function JSXNesting() {
  return (
    <div>
      <h2>Nesting</h2>
      <p>JSX elements can be nested inside each other to create complex layouts.</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`<div>
  <p>foo</p>
  <p>bar</p>
</div>`}</SyntaxHighlighter>
      <p>There has to be a single root element in a JSX component in which all other elements are nested.</p>
    </div>
  );
}

function JSXRendering() {
  return (
    <div>
      <h2>Rendering</h2>
      <p>JSX elements are rendered into the DOM using the ReactDOM`s <code>.render()</code> method.</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("container");
// the 'document' object represents our web page
const root = createRoot(container);
// the 'root' object represents our React app or here 'container'
const element = <h1>Hello world</h1>;
root.render(element);`}</SyntaxHighlighter>
      <p>The <code>.render()</code> method only updates updates the DOM elements that have changed, using the <Link href="../react/vDOM">virtual DOM</Link>.</p>
    </div>
  );
}
