import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function NodeModules() {
  return (
    <div>
      <h1>Modules</h1>
      <NodeConsole />
      <NodeProcess />
      <br />
    </div>
  );
}

function NodeConsole() {
  return (
    <div>
      <h2>Console</h2>
      <SyntaxHighlighter language="bash" style={dracula}>{`$ node
Welcome to Node.js v26.8.1.
Type ".help" for more information.
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const cars = ['bmw', 'porsche', 'volkswagen'];
console.log(cars);
console.table(cars);
console.assert(cars.length === 4);

// Ctrl + D returns:
[ 'bmw', 'porsche', 'volkswagen' ]
┌─────────┬──────────────┐
│ (index) │ Values       │
├─────────┼──────────────┤
│ 0       │ 'bmw'        │
│ 1       │ 'porsche'    │
│ 2       │ 'volkswagen' │
└─────────┴──────────────┘
Assertion failed
undefined`}</SyntaxHighlighter>
    </div>
  );
}

function NodeProcess() {
  return (
    <div>
      <h2>Process</h2>
    </div>
  );
}
