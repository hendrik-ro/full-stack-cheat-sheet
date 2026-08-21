import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h1>Hooks</h1>
      <HooksUseState />
      <HooksSetPrev />
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
    </div>
  );
}

function HooksSetPrev() {
  return (
    <div>
      <h2>Set Previous State</h2>
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
