import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DocumentPage() {
  return (
    <div id="document">
      <h1>Document</h1>
      <p>
        The <code>document</code> object represents the HTML document itself.
      </p>
      <p>
        To manipulate the document in JavaScript, you can use the{" "}
        <code>document</code> object`s methods and properties.
      </p>
      <DocumentMethods />
      <DocumentMethodsCreate />
      <br />
    </div>
  );
}

function DocumentMethods() {
  return (
    <div id="manipulation-document">
      <h2>Document Methods</h2>
      <h3>document.querySelector()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.querySelector('p');`}</SyntaxHighlighter>
      <p>
        <code>.querySelector()</code> returns the first element that matches the
        specified selector.
      </p>
      <h3>document.querySelectorAll()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.querySelectorAll('p');`}</SyntaxHighlighter>
      <p>
        <code>.querySelectorAll()</code> returns all elements that match the
        specified selector.
      </p>
      <br />
      <h3>document.getElementById()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementById('');`}</SyntaxHighlighter>
      <p>
        <code>.getElementById()</code> returns the element that has the
        specified ID.
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
        <code>.getElementsByClassName()</code> returns <em>all elements</em>{" "}
        that have the specified class name.
      </p>
      <br />
      <h3>document.getElementsByTagName()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.getElementsByTagName('li')[1].innerHTML = '<p>New Product</p>';`}</SyntaxHighlighter>
      <p>
        <code>.getElementsByTagName()</code> returns <em>all elements</em> that
        have the specified tag name.
      </p>
    </div>
  );
}

function DocumentMethodsCreate() {
  return (
    <div id="manipulation-create-insert">
      <h2>Create, Append and Delete</h2>
      <h3>document.createElement()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`let element = document.createElement('div');`}</SyntaxHighlighter>
      <p>
        <code>.createElement()</code> creates a new element with the specified
        tag name.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`element.id = 'new-element';
element.innerHTML = '<p>New paragraph inside the new element</p>';`}</SyntaxHighlighter>
      <p>
        <code>.id</code> sets the <code>id</code> attribute of the new element.
      </p>
      <h3>.appendChild()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.body.appendChild(element);`}</SyntaxHighlighter>
      <p>
        <code>.appendChild()</code> adds the new element to the end of the{" "}
        <code>body</code> element.
      </p>
      <h3>.removeChild()</h3>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`document.body.removeChild(element);`}</SyntaxHighlighter>
      <p>
        <code>.removeChild()</code> removes the new element from the{" "}
        <code>body</code> element.
      </p>
    </div>
  );
}
