import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function NodeModules() {
  return (
    <div>
      <h1>Modules</h1>
      <NodeConsole />
      <NodeProcess />
      <NodeOS />
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
      <p>
        The <code>process</code> module contains several properties that touch
        on Node`s process run by the OS:
      </p>
      <table>
        <thead>
          <td>Property</td>
          <td>Output</td>
          <td>Description</td>
        </thead>
        <tbody>
          <tr>
            <td>process.argv</td>
            <td>
              <SyntaxHighlighter language="javascript" style={dracula}>{`[
  '/usr/bin/node',
  '/path/to/file/app.js',
  'arg2',
  'arg3',
  'arg4'
  (...)
]`}</SyntaxHighlighter>
            </td>
            <td>
              arg1 - Node`s path
              <br />
              arg2 - application path
              <br />
              arg2...n - launch arguments
            </td>
          </tr>
          <tr>
            <td>process.env</td>
            <td>
              <SyntaxHighlighter
                language="bash"
                style={dracula}
              >{`let env = process.env;
env.NODE_ENV = 'development';
console.log(env.NODE_ENV);

// prints:
development`}</SyntaxHighlighter>
            </td>
            <td>
              <code>process.env</code> returns an object with several
              environment properties. <br />
              Custom properties such as <code>NODE_ENV</code> can be assigned.
            </td>
          </tr>
          <tr>
            <td>process.memoryUsage()</td>
            <td>
              <SyntaxHighlighter
                language="bash"
                style={dracula}
              >{`console.log(process.memoryUsage())

// prints:
{
  rss: 63975424,
  heapTotal: 7475200,
  heapUsed: 6685136,
  external: 2611926,
  arrayBuffers: 203153
}`}</SyntaxHighlighter>
            </td>
            <td>Holds information on memory usage.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function NodeOS() {
  return (
    <div>
      <h2>OS</h2>
      <p>
        The <code>os</code> module is not global and needs to be imported:{" "}
        <code>const os = require(`os`);</code>
      </p>
      <ul>
        <li>
          <code>type</code> - returns computer`s operating system
        </li>
        <li>
          <code>arch</code> - returns CPU architecture
        </li>
        <li>
          <code>networkInterfaces</code> - returns network info such as IP and
          MAC address
        </li>
        <li>
          <code>homedir</code> - returns user`s home directory
        </li>
        <li>
          <code>hostname</code> - returns hostname of the OS
        </li>
        <li>
          <code>uptime</code> - returns system uptime in seconds
        </li>
      </ul>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const os = require('os');
const local = {
'home': os.homedir(),
'os': os.type(),
'uptime': os.uptime(),
}
console.log(local)

// prints:
{ home: '/home/user', os: 'Linux', uptime: 6992.08 }`}</SyntaxHighlighter>
    </div>
  );
}
