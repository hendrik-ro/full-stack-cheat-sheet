import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ManipulationPage() {
  return (
    <div>
      <h1>Manipulation</h1>
      <ManipulationDocument />
      <ManipulationDocumentStyle />
      <br />
    </div>
  );
}

function ManipulationDocument() {
  return (
    <div id="manipulation-document">
      <h2>Document</h2>
      <h3>document.querySelector()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.querySelector('p');`}</SyntaxHighlighter>
      <p><strong>.querySelector</strong> returns the first element that matches the specified selector.</p>
      <h3>document.querySelectorAll()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.querySelectorAll('p');`}</SyntaxHighlighter>
      <p><strong>.querySelectorAll</strong> returns all elements that match the specified selector.</p>
      <br />
      <h3>document.getElementById()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.getElementById('');`}</SyntaxHighlighter>
      <p><strong>.getElementById</strong> returns the element that has the specified ID.</p>
      <br />
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.getElementById('div1').innerHTML = '<h1>New Main Heading</h1>';`}</SyntaxHighlighter>
      <p>Reassign the <strong>innerHTML</strong> property to change the content of the element. In this case, we are replacing the entire content of <strong>div1</strong> with a new <strong>h1</strong> element.</p>
      <h3>document.getElementsByClassName()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.getElementsByClassName('users')[0].innerHTML = '<p>New User</p>';`}</SyntaxHighlighter>
      <p><strong>.getElementsByClassName</strong> returns <em>all elements</em> that have the specified class name.</p>
      <br />
      <h3>document.getElementsByTagName()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.getElementsByTagName('li')[1].innerHTML = '<p>New Product</p>';`}</SyntaxHighlighter>
      <p><strong>.getElementsByTagName</strong> returns <em>all elements</em> that have the specified tag name.</p>
      <br />
      <h3>document.createElement()</h3>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`document.createElement('');`}</SyntaxHighlighter>
      <p><strong>.createElement</strong> creates a new element with the specified tag name.</p>
    </div>
  );
}

function ManipulationDocumentStyle() {
  return (
    <div>
      <h2>Document Style</h2>
      <p>The <strong>style</strong> property allows you to change the style of an element.</p>
    </div>
  );
}
