import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <div id="vite">
        <h1>Vite</h1>
        <p>
          <a target="_blank" href="https://vitejs.dev/">
            Vite
          </a>{" "}
          is a build tool for <a href="/front-end/react">React</a>.
        </p>
      </div>
      <div>
        <h2>Setup</h2>
        <p>
          If not done yet, install <em>pnpm</em> globally:
        </p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ npm install -g pnpm
        </SyntaxHighlighter>
        <p>1. Create a new Vite app:</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ pnpm create vite
        </SyntaxHighlighter>
        <p>Or use template flags:</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ pnpm create vite test-project --template react-ts
        </SyntaxHighlighter>
        <p>2. Customize settings in the interactive prompts.</p>
        <h3>Run development server locally</h3>
        <p>Install the project`s dependencies if needed:</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ pnpm i
        </SyntaxHighlighter>
        <p>Start development server on localhost:3000:</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ pnpm dev
        </SyntaxHighlighter>
        <p>
          Open{" "}
          <a target="_blank" href="http://localhost:3000">
            http://localhost:3000
          </a>
        </p>
      </div>
    </div>
  );
}
