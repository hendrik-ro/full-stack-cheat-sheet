import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Hooks</h1>
      <p>
        <Link
          href="https://react.dev/reference/react/hooks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hooks
        </Link>{" "}
        are functions that let you use state and other React features without
        writing a class.
      </p>
      <p>There are two rules to follow when using hooks:</p>
      <ol>
        <li>Only call hooks at the top level of a component.</li>
        <li>Only call hooks from React function components.</li>
      </ol>
      <p>
        Never call hooks from inside of loops, conditions, or nested functions.
        Instead, start with <code>useEffect</code> or similar hooks:
      </p>
      <SyntaxHighlighter language="jsx" style={dracula}>{`useEffect(() => {
  if (userName === '') {
    setUserName('guest');
  }
}, [userName]);`}</SyntaxHighlighter>
      <HooksUseState />
      <HooksUseEffect />
      <br />
    </div>
  );
}

function HooksUseState() {
  return (
    <div>
      <h2>useState</h2>
      <p>
        <code>useState(initialState)</code> can be used to declare a state
        variable within a component:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    if (count > 10) {
      setCount(0);
    } else {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleChange}>+</button>
    </div>
  );
}`}</SyntaxHighlighter>
      <p>
        <strong>Note: </strong> it is safer to use{" "}
        <code>setCount(prevCount =&gt; prevCount + 1)</code> when updating state
        based on the previous value.
      </p>
      <StateSetPrev />
      <StateArraysInState />
      <StateObjInState />
    </div>
  );
}

function StateSetPrev() {
  return (
    <div>
      <h3>Set Previous State</h3>
      <p>
        In this example, <code>setQuestionIndex</code> is called with a function
        that takes the previous value and returns the updated value.
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React, { useState } from "react";

export default function NavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  const goBack = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
  };
  const goToNext = () => {
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
  };

  const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}>
          Go Back
        </button>
        <button onClick={goToNext} disabled={onLastQuestion}>
          Next Question
        </button>
      </div>
    </nav>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}

function StateArraysInState() {
  return (
    <div>
      <h3>Arrays in State</h3>
      <p>
        The following example demonstrates how to manipulate arrays in state:
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React, { useState } from "react";
import ItemList from "./ItemList";
import { items } from "./storeItems";

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => (prev = [item, ...prev]));
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Items</h2>
      <ItemList items={items} onItemClick={addItem} />
    </div>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}

function StateObjInState() {
  return (
    <div>
      <h3>Objects in State</h3>
      <p>Similarly, you can use objects in state to store structured data:</p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`export default function ObjectInState() {
  const [object, setObject] = useState({});
  const handleChange = ({ target }) => {
    const { property, value } = target;
    setObject((prev) => ({
      ...prev,
      [property]: value,
    }));
  };
}`}</SyntaxHighlighter>
    </div>
  );
}

function HooksUseEffect() {
  return (
    <div>
      <h2>useEffect</h2>
      <p>
        <code>useEffect()</code> allows for fetching of data from an API and
        updating the component state.
      </p>
      <p>
        The effect hook can be used at three different points in the component
        lifecycle:
      </p>
      <ul>
        <li>
          <em>Mounting</em>: the effect is called after the component is mounted
          to the DOM.
        </li>
        <li>
          <em>Updating</em>: the effect is called after the component is
          updated.
        </li>
        <li>
          <em>Unmounting</em>: the effect is called before the component is
          unmounted from the DOM.
        </li>
      </ul>
      <EffectCleanup />
      <EffectDependencyArray />
    </div>
  );
}

function EffectCleanup() {
  return (
    <div>
      <h3>Effect Cleanup</h3>
      <p>
        When the component is unmounted, the effect cleanup function is called
        to clean up any resources used by the effect.
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.addEventListener("mousedown", increment);
    return () => {
      document.removeEventListener("mousedown", increment);
    };
  });

  return <h1>Clicks: {count}</h1>;
}`}</SyntaxHighlighter>
    </div>
  );
}

function EffectDependencyArray() {
  return (
    <div>
      <h3>Effect Dependency Array</h3>
      <p>
        <code>useEffect()</code> can be used with a dependency array to only run
        the effect when a specific value changes.
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // pass an empty array to run the effect only once

  return (
    <>
      <h1>Time: {time}</h1>
    </>
  );
}`}</SyntaxHighlighter>
      <p>
        Here, the effect runs only once when the component mounts, and the
        cleanup function is called when the component unmounts.
      </p>
      <p>
        To run the effect on every render, pass a dependency array with the
        value to watch:
      </p>
      <SyntaxHighlighter language="jsx" style={dracula}>{`useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]); // Only re-run the effect if the value stored by count changes`}</SyntaxHighlighter>
    </div>
  );
}
