import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SelectorsPage() {
  return (<div id="selectors-page">
    <Selectors />
  </div>);
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
