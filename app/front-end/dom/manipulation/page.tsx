import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ManipulationPage() {
  return (
    <div>
      <h1>Manipulation</h1>
      <ManipulationInnerHTML />
      <ManipulationDocument />
      <ManipulationStyle />
      <br />
    </div>
  );
}

function ManipulationInnerHTML() {
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

function ManipulationDocument() {
  return (
    <div id="manipulation-document">
      <h2>Document</h2>
      <h3>document.querySelector()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.querySelector('p');`}</SyntaxHighlighter>
      <p>
        <code>.querySelector</code> returns the first element that matches the
        specified selector.
      </p>
      <h3>document.querySelectorAll()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.querySelectorAll('p');`}</SyntaxHighlighter>
      <p>
        <code>.querySelectorAll</code> returns all elements that match the
        specified selector.
      </p>
      <br />
      <h3>document.getElementById()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementById('');`}</SyntaxHighlighter>
      <p>
        <code>.getElementById</code> returns the element that has the specified
        ID.
      </p>
      <br />
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementById('div1').innerHTML = '<h1>New Main Heading</h1>';`}</SyntaxHighlighter>
      <p>
        Reassign the <code>innerHTML</code> property to change the content of
        the element. In this case, we are replacing the entire content of{" "}
        <code>div1</code> with a new <code>h1</code> element.
      </p>
      <h3>document.getElementsByClassName()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementsByClassName('users')[0].innerHTML = '<p>New User</p>';`}</SyntaxHighlighter>
      <p>
        <code>.getElementsByClassName</code> returns <em>all elements</em> that
        have the specified class name.
      </p>
      <br />
      <h3>document.getElementsByTagName()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementsByTagName('li')[1].innerHTML = '<p>New Product</p>';`}</SyntaxHighlighter>
      <p>
        <code>.getElementsByTagName</code> returns <em>all elements</em> that
        have the specified tag name.
      </p>
      <br />
      <h3>document.createElement()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.createElement('');`}</SyntaxHighlighter>
      <p>
        <code>.createElement</code> creates a new element with the specified tag
        name.
      </p>
    </div>
  );
}

function ManipulationStyle() {
  return (
    <div id="manipulation.style">
      <h2>Style</h2>
      <p>
        The <code>style</code> property allows you to change the style of an
        element.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let firstElement = document.getElementsByClassName('users')[0];
firstElement.style.backgroundColor = 'red';`}</SyntaxHighlighter>
      <p>Or chain the property with a selector:</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementsByClassName('users')[0].style.backgroundColor = 'red';`}</SyntaxHighlighter>
    </div>
  );
}
