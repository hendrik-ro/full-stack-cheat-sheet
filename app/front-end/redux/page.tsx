import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Redux</h1>
      <Redux />
      <ReduxSetup />
      <br />
    </div>
  );
}

function Redux() {
  return (
    <>
      <p>
        <Link
          href="https://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </Link>{" "}
        is a state management framework for React which provides patterns and
        tools to make it easier to understand when, where, why, and how the
        state of an application is being updated, and how your application logic
        will behave when those changes occur.
      </p>
      <p>
        It helps separating <em>state</em>, <em>view</em>, and <em>actions</em>{" "}
        by requiring the state to be managed by a single source of truth.
      </p>
    </>
  );
}

function ReduxSetup() {
  return (
    <div>
      <h2>Prerequisits</h2>
      <p>
        Install <strong>Redux</strong> and its toolkit:
      </p>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
      >{`npm install react-redux @reduxjs/toolkit`}</SyntaxHighlighter>
      <p>
        <Link href="/front-end/react/redux_toolkit">Redux Toolkit</Link> has
        built-in TS type definitions.
      </p>
    </div>
  );
}
