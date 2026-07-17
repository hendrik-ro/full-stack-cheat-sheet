import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ImagesPage() {
  return (
    <div>
      <h2>Images</h2>
      <h3>Image Container</h3>
      <p>Basic image container using CSS overflow and max-width:</p>
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
      <h3>Scaling Background Images</h3>
      <SyntaxHighlighter language="css" style={atomDark}>{`body {
        background-image: url('#');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }`}</SyntaxHighlighter>
      <p><strong>background-size:</strong> The image will cover the entire background of the element, all while keeping the image in proportion. If the dimensions of the image exceed the dimensions of the container then only a portion of the image will display.</p>
      <br />
    </div>
  );
}
