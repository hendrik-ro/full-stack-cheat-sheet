import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ScriptPage() {
  return (
    <div>
      <h2>Scripts</h2>
      <ScriptsAttributes />
    </div>
  );
}

function ScriptsAttributes() {
  return (
    <div>
      <h2>Attributes</h2>
      <ul>
        <li>
          <p>
            <strong>async</strong> will load the script simutaneously to the
            page:
          </p>
          <SyntaxHighlighter
            language="html"
            style={atomDark}
          >{`<script src="example.js" async></script>`}</SyntaxHighlighter>
          <p>
            This can be used for API calls, timed scripts or continuously
            running scripts.
          </p>
        </li>
        <br />
        <li>
          <p>
            <strong>defer</strong> will load the script after the page is
            loaded:
          </p>
          <SyntaxHighlighter
            language="html"
            style={atomDark}
          >{`<script src="example.js" defer></script>`}</SyntaxHighlighter>
        </li>
      </ul>
    </div>
  );
}
