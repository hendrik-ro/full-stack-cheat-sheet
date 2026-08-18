import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <div id="react">
        <h1>React</h1>
        <section id="overview">
          <p>
            <Link
              target="_blank"
              href="https://react.dev/"
              rel="noopener norefferer"
            >
              React
            </Link>{" "}
            is a JavaScript library for building user interfaces.
          </p>
          <p>
            It is component-based, allowing developers to create reusable UI
            components.
          </p>
          <p>
            React efficiently updates and renders the right components when data
            changes, using a virtual DOM to improve performance.
          </p>
          <p>
            It is widely used for single-page applications and dynamic web
            interfaces.
          </p>
          <p>
            For faster interactive development, use a{" "}
            <Link href="/front-end/react/frameworks">framework</Link>.
          </p>
        </section>
        <br />
        <section id="syntax">
          <p>
            React uses <Link href="/front-end/react/jsx">JSX</Link> syntax which
            allows you to write HTML-like code in JavaScript.
          </p>
          <SyntaxHighlighter
            language="jsx"
            style={dracula}
          >{`const h1 = <h1>React</h1>;`}</SyntaxHighlighter>
          <p>However, you could write React without JSX:</p>
          <SyntaxHighlighter
            language="javascript"
            style={dracula}
          >{`const h1 = React.createElement("h1", null, "React");`}</SyntaxHighlighter>
        </section>
        <br />
      </div>
    </div>
  );
}
