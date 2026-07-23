import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <div id="nextjs">
        <h1>NextJS</h1>
        <p>
          <a target="_blank" href="https://nextjs.org/">
            NextJS
          </a>{" "}
          is a framework for <a href="/front-end/react">React</a>.
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
        <p>1. Create a new NextJS app:</p>
        <SyntaxHighlighter language="bash" style={dracula}>
          $ npx create-next-app@latest project-name
        </SyntaxHighlighter>
        <p style={{ fontSize: "15px" }}>
          Where <em>project-name</em> is your project`s name.
        </p>
        <p>2. Customize settings or use defaults:</p>
        <SyntaxHighlighter
          language="bash"
          style={dracula}
        >{`? Would you like to use the recommended Next.js defaults? › - Use arrow-keys. Return to submit.
❯   Yes, use recommended defaults
// TypeScript, ESLint, No React Compiler, Tailwind CSS, No src/ directory, App
// Router, AGENTS.md
No, reuse previous settings
No, customize settings`}</SyntaxHighlighter>
        <h3>Run development server locally</h3>
        <p>Install the project`s dependencies:</p>
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
