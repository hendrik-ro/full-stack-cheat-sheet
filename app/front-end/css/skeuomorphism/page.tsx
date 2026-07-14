import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function SkeuomorphismPage() {
  return (<div id="skeuomorphism-page">
    <Skeuomorphism />
  </div>);
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
