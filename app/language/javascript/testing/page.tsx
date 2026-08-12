import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h2>Testing</h2>
      <TestingMocha />
      <TestingMochaAssert />
    </div>
  );
}

function TestingMocha() {
  return (
    <div>
      <h3>Mocha</h3>
      <p>
        <Link
          href="https://mochajs.org/"
          rel="noopener noreference"
          target="_blank"
        >
          Mocha
        </Link>{" "}
        is a test framework running on{" "}
        <Link href="/language/javascript/node">Node</Link>.
      </p>
    </div>
  );
}

function TestingMochaAssert() {
  return (
    <div>
      <h4>Asserting outcomes</h4>
      <p>Example test:</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const assert = require('assert');

  describe('+', () => {
    it('returns the sum of two values', () => {
      // Setup
	let expected = [3, 4, 7];
	let sum = [3, 4];

      // Exercise
	sum.push(3 + 4);

      // Verify
    assert.deepStrictEqual(sum, expected);
  });
});`}</SyntaxHighlighter>
      <p>
        <code>assert.deepStrictEqual()</code> compares to objects in depth.
        While <code>assert.strictEqual()</code> only compares to variables just
        like <code>a === b</code>.
      </p>
      <p>
        Similar, <code>assert.notStrictEqual</code> equates to{" "}
        <code>a !== b</code>.
      </p>
    </div>
  );
}
