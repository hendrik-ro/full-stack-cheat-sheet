import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (<div>
    <div id="head">
      <h1>HTML</h1>
      <p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> is a markup language for structuring web content in browsers.</p>
      <BreadcrumbsHTML />
      <ColumnGridTemplate />
      <Head />
      <Tables />
    </div>)
  </div>
  );
}


function BreadcrumbsHTML() {
  return (
    <div id="breadcrumbsHTML">
      <h2>Breadcrumbs</h2>
      <p>Breadcrumbs are a navigation aid that shows the user`s current location within a website`s hierarchy.</p>
      <SyntaxHighlighter language="html" style={atomDark}>{`<ul class="breadcrumb">
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

function ColumnGridTemplate() {
  return (<div id="column-grid">
    <h2>Column Grid</h2>
    <p>Column grid is a standard design pattern to design websites.</p>
    <p>It divides a page into vertical columns, providing a structured framework for organizing and aligning content.</p>
    <p>Column grids ensure consistency, improve readability.</p>
    <SyntaxHighlighter language='React' style={atomDark}>{`<div className="column-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="column-item">
          Column {index + 1}
        </div>
      ))}
    </div>`}</SyntaxHighlighter>
    <SyntaxHighlighter language='css' style={atomDark}>{`.column-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      padding: 1rem;
    }

    .column-item {
      background-color: #f3f4f6;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }

    @media (min-width: 640px) {
      .column-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 768px) {
      .column-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .column-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    @media (min-width: 1280px) {
      .column-grid {
        grid-template-columns: repeat(5, 1fr);
      }
    }`}</SyntaxHighlighter>
    <p>Renders as:</p>
    <div className="column-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="column-item">
          Column {index + 1}
        </div>
      ))}
    </div>
    <p>Try resizing the window to see how the grid realigns.</p>
  </div>
  );
};

function Head() {
  return (
    <div id="head">
      <h2>Head</h2>
      <table>
        <thead>
          <th>Tag</th>
          <th>Name</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td><span className="codeSnippet">&lt;link&gt;</span></td>
            <td>Link</td>
            <td>Links a reference sheet to the html document.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Tables() {
  return (
    <div id="tables">
      <h2>Tables</h2>
      <h3>Table Tags</h3>
      <table>
        <thead>
          <th>Tag</th>
          <th>Name</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td><span className="codeSnippet">&lt;table&gt;</span></td>
            <td>Table</td>
            <td>The wrapper element for all HTML tables.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">&lt;thead&gt;</span></td>
            <td>Table Head</td>
            <td>The set of rows defining the column headers in a table.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">&lt;tbody&gt;</span></td>
            <td>Table Body</td>
            <td>The set of rows containing the actual table data.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">&lt;tr&gt;</span></td>
            <td>Table Row</td>
            <td>The table row container.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">&lt;td&gt;</span></td>
            <td>Table Data</td>
            <td>The table data container.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">&lt;tfoot&gt;</span></td>
            <td>Table Foot</td>
            <td>The set of rows defining the footer of a table.</td>
          </tr>
        </tbody>
      </table>
      <h3>Table Attributes</h3>
      <table>
        <thead>
          <th>Attribute</th>
          <th>Name</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td><span className="codeSnippet">colspan</span></td>
            <td>Column Span</td>
            <td>Defines how many columns a td element should span.</td>
          </tr>
          <tr>
            <td><span className="codeSnippet">rowspan</span></td>
            <td>Row Span</td>
            <td>Defines how many rows a td element should span.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
