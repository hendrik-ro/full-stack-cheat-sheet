import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ReduxReact() {
  return (
    <div>
      <React />
      <ReduxFileStructure />
      <br />
    </div>
  );
}

function React() {
  return (
    <div>
      <h1>Redux in React</h1>
      <h2>store.js</h2>
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

function ReduxFileStructure() {
  return (
    <div>
      <h2>File Structure</h2>
      <SyntaxHighlighter language="bash" style={dracula}>{`src/
|-- index.js
|-- app/
  |-- App.js
  |-- store.js
|-- components/
  |-- componentA.js
  |-- componentB.js
|-- features/
  |-- featureA/
    |-- featureA.js
    |-- featureASlice.js
  |-- featureB/
    |-- featureB.js
    |-- featureBSlice.js`}</SyntaxHighlighter>
    </div>
  );
}
