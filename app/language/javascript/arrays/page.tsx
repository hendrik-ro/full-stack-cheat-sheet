import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ArraysPage() {
  return (
    <div>
      <h2>Arrays</h2>
      <Methods />
      <br />
    </div>
  );
}

function Methods() {
  return (
    <div>
      <h3>Methods</h3>
      <MethodsIndexOf />
      <MethodsSort />
    </div>
  );
}

function MethodsSort() {
  return (
    <div>
      <h4>.sort()</h4>
      <p>
        Sorts the elements of an array in place and returns the sorted array.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
      >{`const speciesArray = [
        { speciesName: "shark", numTeeth: 50 },
        { speciesName: "dog", numTeeth: 42 },
        { speciesName: "alligator", numTeeth: 80 },
        { speciesName: "human", numTeeth: 32 },
      ];

      const sortSpeciesByTeeth = (species) => {
        return species.sort((a, b) => a.numTeeth - b.numTeeth); // Sorts ascending if result is negative
      };

      console.log(sortSpeciesByTeeth(speciesArray));

      // Should print:
      // [ { speciesName: 'human', numTeeth: 32 },
      //   { speciesName: 'dog', numTeeth: 42 },
      //   { speciesName: 'shark', numTeeth: 50 },
      //   { speciesName: 'alligator', numTeeth: 80 } ]`}</SyntaxHighlighter>
    </div>
  );
}

function MethodsIndexOf() {
  return (
    <div>
      <h4>.indexOf()</h4>
      <p>
        Returns the first index at which a given element can be found in the
        array, or -1 if it is not present.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={atomDark}
      >{`const findMyKeys = (things) => {
        return things.indexOf("keys");
      };

      const randomStuff = [
        "credit card",
        "screwdriver",
        "receipt",
        "gum",
        "keys",
        "used gum",
        "plastic spoon",
      ];

      console.log(findMyKeys(randomStuff));
      // Should print 4`}</SyntaxHighlighter>
    </div>
  );
}
