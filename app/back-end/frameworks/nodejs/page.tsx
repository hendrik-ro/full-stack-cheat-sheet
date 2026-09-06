import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Page() {
  return (
    <div>
      <h1>Node.js</h1>
      <p>
        <Link
          href="https://nodejs.org/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Node.js
        </Link>{" "}
        is a JavaScript runtime that allows for it to be executed outside of
        browsers.
      </p>
      <NodeREPL />
      <br />
    </div>
  );
}

function NodeREPL() {
  return (
    <div>
      <h2>REPL</h2>
      <p>
        <em>Node</em> come with a built-in REPL that can be started in the
        console with <code>node</code>.
      </p>
      <SyntaxHighlighter language="bash" style={dracula}>{`$ node
Welcome to Node.js v22.22.3.
Type ".help" for more information.
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
console.log(Object.keys(global))

[
  'global',          'clearImmediate',
  'setImmediate',    'clearInterval',
  'clearTimeout',    'setInterval',
  'setTimeout',      'queueMicrotask',
  'structuredClone', 'atob',
  'btoa',            'performance',
  'fetch',           'crypto',
  'navigator',       'sessionStorage'
]
undefined`}</SyntaxHighlighter>
    </div>
  );
}
