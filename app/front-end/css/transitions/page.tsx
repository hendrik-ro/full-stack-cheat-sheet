import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./button.module.css";

export default function TransitionsPage() {
  return (
    <div id="transitions-page">
      <Transitions />
    </div>
  );
}

function Transitions() {
  return (
    <div id="transitions">
      <h2>Transitions</h2>
      <SyntaxHighlighter language="css" style={atomDark}>{`
.button {
     padding: 5px;
     border: 1px solid steelblue;
     border-radius: 5px;
     text-decoration: none;
     box-shadow: 0px 5px;
 }

 .button:hover {
     background-color: #fff;
     cursor: pointer;
     color: lightsalmon;
     transition: color .1s ease-in, background-color .1s ease-in;
 }

 .button:active {
     margin-top: 5px;
     color: lightsalmon;
     box-shadow: 0px 0px;
     font-size: 18px;
     transition: font-size .1s ease-in-out;
 }
}`}</SyntaxHighlighter>
      <button id={styles.button}>Button</button>
      <p></p>
    </div>
  );
}
