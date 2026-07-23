import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PropertiesPage() {
  return (
    <div>
      <h1>Properties</h1>
      <p>
        The <code>document</code>`s properties allow you to access and modify
        the DOM.
      </p>
      <p>
        <code>body</code> refers to the <code>&lt;body&gt;</code> element of the
        document.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let bodyElement = document.body;`}</SyntaxHighlighter>
      <PropertiesInnerHTML />
    </div>
  );
}

function PropertiesInnerHTML() {
  return (
    <div id="manipulation-inner-html">
      <h2>InnerHTML</h2>
      <p>
        The <code>innerHTML</code> property allows you to change the content of
        an element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.body.innerHTML = '<p>New body</p>';`}</SyntaxHighlighter>
      <p>
        This replaces the entire content of the <code>body</code> element with a
        new paragraph.
      </p>
    </div>
  );
}
