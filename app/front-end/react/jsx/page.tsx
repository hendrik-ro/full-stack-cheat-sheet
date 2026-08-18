import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function JSXPage() {
  return (
    <div>
      <h1>JSX</h1>
      <p>
        JSX (JavaScript XML) is a syntax extension for JavaScript that allows
        you to write HTML-like code in your JavaScript files.
      </p>
      <p>It is used in React to define the structure of components.</p>
      <p>
        JSX needs to be compiled into JavaScript before it can be used in a
        browser.
      </p>
      <JSXAttributes />
      <JSXNesting />
      <JSXRendering />
      <JSXInjectingJS />
      <br />
    </div>
  );
}

function JSXAttributes() {
  return (
    <div>
      <h2>Attributes</h2>
      <p>
        JSX elements can have attributes that are passed as props to the
        component.
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`const paragraph = <p id="paragraph">foo</p>;
// or:
const link = <Link href="https://example.com">Example</Link>;`}</SyntaxHighlighter>
      <p>To inject JavaScript variables to JSX attributes, use curly braces:</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`const id = "paragraph";
<p id="{id}">foo</p>`}</SyntaxHighlighter>
      <p>See <a href="/front-end/react/jsx#injectingJS">Injecting regular JavaScript</a></p>
    </div>
  );
}

function JSXNesting() {
  return (
    <div>
      <h2>Nesting</h2>
      <p>
        JSX elements can be nested inside each other to create complex layouts.
      </p>
      <SyntaxHighlighter language="jsx" style={dracula}>{`<div>
  <p>foo</p>
  <p>bar</p>
</div>`}</SyntaxHighlighter>
      <p>
        There has to be a single root element in a JSX component in which all
        other elements are nested.
      </p>
    </div>
  );
}

function JSXRendering() {
  return (
    <div>
      <h2>Rendering</h2>
      <p>
        JSX elements are rendered into the DOM using the ReactDOM`s{" "}
        <code>.render()</code> method.
      </p>
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
      <p>
        The <code>.render()</code> method only updates updates the DOM elements
        that have changed, using the{" "}
        <Link href="../react/vDOM">virtual DOM</Link>.
      </p>
    </div>
  );
}

function JSXInjectingJS() {
  return (
    <div id="injectingJS">
      <h2>Injecting regular JavaScript</h2>
      <p>
        You can inject regular JavaScript expressions into JSX using curly braces.
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`const n = 2;
const m = 3;
root.render(<p>{n + m}</p>); // renders: 5`}</SyntaxHighlighter>
      <p>
        The value inside the curly braces is evaluated as JavaScript and its result is rendered.
      </p>
    </div>
  );
}
