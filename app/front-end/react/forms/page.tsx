"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface FormsUserInputProps {
  userInput: string;
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Page() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <h1>Forms</h1>
      <p>
        <em>React Forms</em> can reflect the state of the form and update the UI
        accordingly.
      </p>
      <p>
        For example, a form input field can be used to update another
        component`s state while the user is typing:
      </p>
      <FormsUserInput userInput={userInput} handleUserInput={handleUserInput} />
      <br />
    </div>
  );
}

function FormsUserInput({ userInput, handleUserInput }: FormsUserInputProps) {
  return (
    <div>
      <input type="text" onChange={handleUserInput} value={userInput} />
      <p>
        User input: <span>{userInput}</span>
      </p>
      <SyntaxHighlighter
        language="jsx"
        style={dracula}
      >{`export default function FormsUserInput() {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleUserInput} value={userInput}/>
      <p>User input: <span>{userInput}</span></p>
    </div>
  );
}`}</SyntaxHighlighter>
    </div>
  );
}
