import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ObjectsPage() {
  return (
    <div>
      <h2>Objects</h2>
      <Factory />
    </div>
  );
}

function Factory() {
  return (
    <div>
      <h3>Object Factory</h3>
      <p>Example factory function:</p>
      <SyntaxHighlighter language="javascript" style={atomDark}>{`const dogFactory = (name, breed, weight) => {
        // Type checking
        if (
          typeof name !== "string" ||
          typeof breed !== "string" ||
          typeof weight !== "number"
        ) {
          return null;
        }
        return {
        // Private properties
          _name: name,
          _breed: breed,
          _weight: weight,
        // Public setter and getter methods
          set name(n) {
            typeof n === "string" ? (this._name = n) : null;
          },
          get name() {
            return this._name;
          },
          set breed(b) {
            typeof b === "string" ? (this._breed = b) : null;
          },
          get breed() {
            return this._breed;
          },
          set weight(w) {
            typeof w === "number" ? (this._weight = w) : null;
          },
          get weight() {
            return this._weight;
          },
        // Public methods
          bark() {
            return "ruff! ruff!";
          },
          eatTooManyTreats() {
            this._weight++;
          },
        };
      };`}</SyntaxHighlighter>
    </div>
  );
}
