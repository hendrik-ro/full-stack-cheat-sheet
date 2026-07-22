import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h2>Measurements</h2>
      <Units />
      <Viewport />
      <MediaQueries />
    </div>
  );
}

function MediaQueries() {
  return (
    <div id="mediaQueries">
      <h3>Media Queries</h3>
      <SyntaxHighlighter
        language="css"
        style={atomDark}
      >{`@media only screen and (max-width: 480px) {
        body {
          font-size: 12px;
        }
      }`}</SyntaxHighlighter>
      <p>
        <strong>only screen</strong> restricts the query to apply only to screen
        devices (opposed to <strong>print</strong> and <strong>speech</strong>).
      </p>
      <p>
        <strong>(max-width: 480px)</strong> restricts the query to apply only to
        devices with a maximum width of 480 pixels.
      </p>
      <SyntaxHighlighter
        language="css"
        style={atomDark}
      >{`@media only screen and (min-width: 320px) {
          /* ruleset for >= 320px */
      }


      @media only screen and (min-width: 480px) {
          /* ruleset for >= 480px */
      }`}</SyntaxHighlighter>
      <SyntaxHighlighter
        language="css"
        style={atomDark}
      >{`@media only screen and (min-resolution: 300dpi) {
          /* CSS for high resolution screens */
      }`}</SyntaxHighlighter>
    </div>
  );
}

function Units() {
  return (
    <div id="units">
      <h3>Units</h3>
      <p>CSS supports absolute and relative measurements.</p>
      <ul>
        <li>Absolute measurements:</li>
        <ul>
          <li>Pixels (px)</li>
        </ul>
        <li>Relative measurements:</li>
        <ul>
          <li>Percentage (%)</li>
          <li>Viewport width (vw)</li>
          <li>Viewport height (vh)</li>
          <li>Font size (em)</li>
          <li>Root font size (rem)</li>
        </ul>
      </ul>
      <p>
        <strong>em</strong> represents the font-size of the current element or
        the default base font-size set by the browser if none is given.
      </p>
      <p>
        <strong>rem</strong> represents the font-size of the root element
        (usually the <code>&lt;html&gt;</code> element).
      </p>
      <p>
        <strong>Percentage (%)</strong> can be used to size elements relative to
        their parent elements.
      </p>
      <p>They can also be used to set padding and margins.</p>
      <p>
        Minimum and maximum height and width can be set using{" "}
        <code>min-height</code>, <code>max-height</code>, <code>min-width</code>
        , <code>max-width</code>:
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`p {
        min-width: 300px;
        max-width: 600px;
      }`}</SyntaxHighlighter>
    </div>
  );
}

function Viewport() {
  return (
    <div id="viewport">
      <h3>Viewport</h3>
      <SyntaxHighlighter language="css" style={atomDark}>{`<!DOCTYPE html>
      <html lang="en">
        <head>
          ...
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ...
        </head>`}</SyntaxHighlighter>
    </div>
  );
}
