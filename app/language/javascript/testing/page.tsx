"use client";

import Link from "next/link";
import { useRef } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./button.module.css";

export default function Page() {
  return (
    <div>
      <h2>Testing</h2>
      <TestingMocha />
      <TestingMochaAssert />
      <br />
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
  const hiddenElement = useRef<HTMLParagraphElement>(null);

  const showMore = () => {
    if (hiddenElement.current) {
      hiddenElement.current.style.display =
        hiddenElement.current.style.display === "none" ? "block" : "none";
    }
  };

  return (
    <div>
      <h4>Asserting outcomes</h4>
      <p>The following test suite test this simple script:</p>
      <button id={styles.button} onClick={showMore}>
        Script
      </button>
      <div ref={hiddenElement} style={{ display: "none" }}>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
        >{`// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return "cock-a-doodle-doo!";
};

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError();
  } else {
    return hour.toString();
  }
};
module.exports = Rooster;`}</SyntaxHighlighter>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //Setup
      const expected = "cock-a-doodle-doo!";

      //Exercise
      const result = Rooster.announceDawn();

      //Verify
      assert.strictEqual(result, expected);
    });
  });
  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      //Setup
      const time = 7;
      const expected = String(7);

      //Exercise
      const result = Rooster.timeAtDawn(time);


      //Verify
      assert.strictEqual(typeof result, typeof expected);
    });
    it("throws an error if passed a number less than 0", () => {
      const hour = -1;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
    it("throws an error if passed anumber greater than 23", () => {
      const hour = 25;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
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
