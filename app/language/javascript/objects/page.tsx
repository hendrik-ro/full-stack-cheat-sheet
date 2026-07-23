import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ObjectsPage() {
  return (
    <div>
      <h2>Objects</h2>
      <ObjectsFactory />
      <ObjectsMethods />
      <br />
    </div>
  );
}

function ObjectsFactory() {
  return (
    <div>
      <h3>Object Factory</h3>
      <p>Example factory function:</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const dogFactory = (name, breed, weight) => {
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

function ObjectsMethods() {
  return (
    <div>
      <h3>Built-in Object Methods</h3>
      <p>
        Example object method <em>bark</em>:
      </p>
      <ObjectsKeys />
      <ObjectsValues />
    </div>
  );
}

function ObjectsKeys() {
  return (
    <div>
      <h4>.keys()</h4>
      <p>
        Example object method <em>keys</em>:
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>{`const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        color: 'blue',
      };
      console.log(Object.keys(car));
      // Prints: ['make', 'model', 'year', 'color']`}</SyntaxHighlighter>
    </div>
  );
}

function ObjectsValues() {
  return (
    <div>
      <h4>.values()</h4>
      <p>
        Example object method <em>values</em>:
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>{`const car = {
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        color: 'blue',
      };
      console.log(Object.values(car));
      // Prints: ['Toyota', 'Camry', 2020, 'blue']`}</SyntaxHighlighter>
    </div>
  );
}
