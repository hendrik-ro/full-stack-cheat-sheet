import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ImagesPage() {
  return (
    <div>
      <h2>Images</h2>
      <SyntaxHighlighter language="html" style={atomDark}>{`<div class="image-container">
        <img src="image.jpg" alt="Image" />
      </div>`}</SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={atomDark}>{`.image-container {
        overflow: hidden;
      }

      .image-container img {
        max-width: 100%;
        height: auto;
        display: block;
      }`}</SyntaxHighlighter>
    </div>
  );
}
