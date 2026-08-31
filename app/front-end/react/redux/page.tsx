import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Redux</h1>
      <Redux />
      <ReduxConcepts />
      <ReduxStore />
      <ReduxSyntax />
      <ReduxReact />
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
          <strong>State</strong> - acts as source of truth
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
      <p>
        In <strong>Redux</strong>, functions should be <em>pure</em> and perform{" "}
        <em>immutable</em> updates.
      </p>
      <p>Rather than:</p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`const mutableUpdate = (obj) => {
  obj.ok = !obj.ok;
  return obj;
}`}</SyntaxHighlighter>
      <p>Do this:</p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`const immutableUpdate = (obj) => {
  return {
  ...obj,
  ok: !obj.ok
  }
}`}</SyntaxHighlighter>
    </div>
  );
}

function ReduxStore() {
  return (
    <div>
      <h2>Store</h2>
      <p>
        This is a special <strong>Redux</strong> object that serves as the
        single source of truth.
      </p>
      <p>
        The <strong>store</strong>...
      </p>
      <ol>
        <li>Initializes the default state.</li>
        <li>Displays that state in the user interface.</li>
        <li>User interaction is dispatched to the store.</li>
        <li>The store`s reducer determines the next state.</li>
        <li>The user interface is updated.</li>
      </ol>
    </div>
  );
}

function ReduxSyntax() {
  return (
    <div>
      <h2>Syntax</h2>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}`}</SyntaxHighlighter>
      <p>
        The method <code>.dispatch</code> allows us to alternate the stored
        state:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`const store = createStore(countReducer);

store.dispatch({ type: 'increment' });
console.log(store.getState()); // prints 1
store.dispatch({ type: 'increment' });
console.log(store.getState()); // prints 2
store.dispatch({ type: 'decrement' });
console.log(store.getState()); // prints 1`}</SyntaxHighlighter>
      <p>
        <strong>Action creators</strong> can be used to simplify calling
        actions:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`export const increment = () => {
  return { type: 'increment' };
}

export const decrement = () => {
  return { type: 'decrement' };
  }
store.dispatch(increment());`}</SyntaxHighlighter>
      <h3>Subscription</h3>
      <p>
        The method <code>.subscribe</code> adds event listener and returns an
        unsubscribe function:
      </p>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`// lightSwitchReducer(), toggle(), and store omitted...

        const reactToChange = () => {
          console.log(\`The light was switched \${store.getState()}!\`);
        }
        const unsubscribe = store.subscribe(reactToChange);

        store.dispatch(toggle());
        // reactToChange() is called, printing:
        // 'The light was switched off!'

        store.dispatch(toggle());
        // reactToChange() is called, printing:
        // 'The light was switched on!'

        unsubscribe();
        // reactToChange() is now unsubscribed

        store.dispatch(toggle());
        // no print statement!

        console.log(store.getState()); // Prints 'off'`}</SyntaxHighlighter>
    </div>
  );
}

function ReduxReact() {
  return (
    <div>
      <h2>Redux in React</h2>
      <h3>store.js</h3>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import { createStore } from 'redux';

export function increment() {
  return {type: 'increment'}
}

export function decrement() {
  return {type: 'decrement'}
}

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(countReducer);`}</SyntaxHighlighter>
      <h3>index.js</h3>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { store } from "./store.js";

const root = createRoot(document.getElementById("app"));

const render = () => {
  root.render(<App state={store.getState()} dispatch={store.dispatch} />);
};

render();

store.subscribe(render);`}</SyntaxHighlighter>
      <h3>App.js</h3>
      <SyntaxHighlighter
        language="js"
        style={dracula}
      >{`import React from "react";
import { increment, decrement } from "./store";

export default function App({ state, dispatch }) {
  // Dispatchers:
  const incrementerClicked = () => {
    dispatch(increment());
  };

  const decrementerClicked = () => {
    dispatch(decrement())
  };

  return (
    <main>
      <p id="counter">{state}</p>
      <button id="incrementer" onClick={incrementerClicked}>
        +
      </button>
      <button id="decrementer" onClick={decrementerClicked}>
        -
      </button>
    </main>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}
