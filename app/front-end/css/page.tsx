import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (<div>
  <div id="css">
      <h1>CSS</h1>
      <p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Cascading Style Sheets</a> are used to specify the presentation and styling of a document written in a markup language such as HTML.</p>
    </div>
    <BreadcrumbCSS />
    <Properties />
    <Selectors />
    <Skeuomorphism />
    <Transitions />
  </div>
    )
}


function BreadcrumbCSS() {
    return (
      <div id="breadcrumbCSS">
        <h2>Breadcrumbs</h2>
        <p>Breadcrumbs are a navigation aid that show the user`s current location within the site.</p>
        <SyntaxHighlighter language="css" style={atomDark}>{`.breadcrumb > li {
          display: inline;

        }

        .breadcrumb li+li::before {
	padding: 10px;
          content: ">";

        }

        .breadcrumb a {
	text-decoration: none;
        }

        .breadcrumb a:hover {
	color: red;
        }`}</SyntaxHighlighter>
      </div>
    );
}

function Transitions() {
    return (
      <div id="transitions">
          <h2>Transitions</h2>
          <SyntaxHighlighter language="css" style={atomDark}>{`
.button {
     padding: 5px;
     border: 1px solid steelblue;
     border-radius: 5px;
     text-decoration: none;
     box-shadow: 0px 5px;
 }

 .button:hover {
     background-color: #fff;
     cursor: pointer;
     color: lightsalmon;
     transition: color .1s ease-in, background-color .1s ease-in;
 }

 .button:active {
     margin-top: 5px;
     color: lightsalmon;
     box-shadow: 0px 0px;
     font-size: 18px;
     transition: font-size .1s ease-in-out;
 }
}`}</SyntaxHighlighter>
          <button id="button2">Button</button>
          <p></p>
      </div>
    );
}

function Skeuomorphism() {
    return (
      <div id="skeuomorphism">
          <h2>Skeuomorphism</h2>
          <p>Skeuomorphic design imitates real life. This lowers the user`s learning curve and allows for intuitive design.</p>
          <SyntaxHighlighter language="css" style={atomDark}>{`button {
     padding: 5px;
     border: 1px solid steelblue;
     border-radius: 5px;
     text-decoration: none;
     box-shadow: 0px 5px;
 }

 button:hover {
     cursor: pointer;
     color: lightsalmon;
 }

 button:active {
     margin-top: 5px;
     color: lightsalmon;
     box-shadow: 0px 0px;
 }
}`}</SyntaxHighlighter>
          <p>The CSS above renders the following button.</p>
          <button id="button">Button</button>
      </div>
    );
}

function Properties() {
  return (
    <div id="properties">
  <h2>Properties</h2>
  <table>
      <thead>
          <th>Property</th>
          <th>Code example</th>
          <th>Description</th>
      </thead>
      <tbody>
          <tr>
              <td><span className="codeSnippet">color</span></td>
              <td><SyntaxHighlighter language="css" style={atomDark}>{`a {
color: blue;
}`}</SyntaxHighlighter></td>
              <td>Sets foreground color of anchors to blue.</td>
          </tr>
      </tbody>
  </table>
    </div>
  );
}

function Selectors() {
  return (
    <div id="selectors">
    <h2>Selectors</h2>
    <table>
        <thead>
            <th>Selector</th>
            <th>Code example</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td><span className="codeSnippet">a</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`a {
color: blue;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all anchor elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">div p</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`div p {
border: 1px solid white;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all paragraph elements within div elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">h1, h2, h3</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`h1, h2, h3 {
text-transform: capitalize;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all listed elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">.class</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`
.class {
  background-color: lightblue;
}
}`}</SyntaxHighlighter></td>
                <td>Defines style for all elements of a class.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">#id</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`#id {
text-align: center;
}`}</SyntaxHighlighter></td>
                <td>Defines style for an element with a unique id.</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}
