import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Redux</h1>
      <Redux />
      <ReduxConcepts />
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

function ReduxConcepts() {
  return (
    <div>
      <h2>Core concepts</h2>
      <ul>
        <li>
          <strong>State</strong> - acts as centralized source of truth
        </li>
        <li>
          <strong>Actions</strong> - represented as a plain object
        </li>
        <li>
          <strong>Reducers</strong> - function that defines are actions create a
          new state
        </li>
      </ul>
      <SyntaxHighlighter language="js" style={dracula}>{`// Reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "clean/addTask": {
      return [...state, action.payload];
    }
    case "clean/removeTask": {
      return state.filter(task => task !== action.payload);
    }
    case "clean/removeAll": {
      return [];
    }
    default: {
      return state;
    }
  }
}

// State
const initialState = [ 'bathroom', 'bedroom', 'kitchen' ];

// Actions
const addNewTask = {
  type: 'clean/addTask',
    payload: 'living room'
  };

const removeTask = {
  type: 'clean/removeTask',
    payload: 'bathroom'
  };

const removeAll = {
  type: 'clean/removeAll'
}`}</SyntaxHighlighter>
      <h3>Rules of Reducers</h3>
      <ol>
        <li>
          Reducers should only calculate the new state value based on the{" "}
          <code>state</code> and <code>action</code> arguments.
        </li>
        <li>
          They are not allowed to modify the existing state - rather return a
          copy of its values.
        </li>
        <li>No asynchronous logic or side effects.</li>
      </ol>
    </div>
  );
}
