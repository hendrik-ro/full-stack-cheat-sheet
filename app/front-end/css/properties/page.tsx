import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function PropertiesPage() {
  return (<div id="properties-page">
    <Properties />
  </div>);
}

function Properties() {
  return (
    <div id="properties">
  <h2>Properties</h2>
  <table>
      <tr>
          <td>Property</td>
          <td>Code example</td>
          <td>Description</td>
      </tr>
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
