import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BreadcrumbsPage() {
  return (
    <div id="breadcrumbs-page">
      <BreadcrumbCSS />
    </div>
  );
}

function BreadcrumbCSS() {
  return (
    <div id="breadcrumbCSS">
      <h2>Breadcrumbs</h2>
      <p>
        Breadcrumbs are a navigation aid that show the user`s current location
        within the site.
      </p>
      <SyntaxHighlighter language="css" style={dracula}>{`.breadcrumb > li {
          display: inline;

        }

        .breadcrumb li+li::before {
	padding: 10px;
          content: ">";

        }

        .breadcrumb a {
	text-decoration: none;
        }

        .breadcrumb a:hover {
	color: red;
        }`}</SyntaxHighlighter>
    </div>
  );
}
