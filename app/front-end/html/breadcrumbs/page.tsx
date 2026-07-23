import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BreadcrumbsHTML() {
  return (
    <div id="breadcrumbsHTML">
      <h2>Breadcrumbs</h2>
      <p>
        Breadcrumbs are a navigation aid that shows the user`s current location
        within a website`s hierarchy.
      </p>
      <SyntaxHighlighter
        language="html"
        style={dracula}
      >{`<ul class="breadcrumb">
          <li>
            <a href="shoes.html">Shoes</a>
          </li>
          <li>
            <a href="flats.html">Flats</a>
          </li>
          <li>
            <a href="#">Brown</a>
          </li>
        </ul>`}</SyntaxHighlighter>
    </div>
  );
}
