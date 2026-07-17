import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <h2>Measurements</h2>
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
      <p><strong>em</strong> represents the font-size of the current element or the default base font-size set by the browser if none is given.</p>
      <p><strong>rem</strong> represents the font-size of the root element (usually the <code>&lt;html&gt;</code> element).</p>
      <p><strong>Percentage (%)</strong> can be used to size elements relative to their parent elements.</p>
      <p>They can also be used to set padding and margins.</p>
      <p>Minimum and maximum height and width can be set using <code>min-height</code>, <code>max-height</code>, <code>min-width</code>, <code>max-width</code>:</p>
      <SyntaxHighlighter language="css" style={atomDark}>{`p {
        min-width: 300px;
        max-width: 600px;
      }`}</SyntaxHighlighter>
    </div>
  );
}
