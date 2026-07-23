import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function GridPage() {
  return (
    <div id="grid-page">
      <Grid />
    </div>
  );
}

function Grid() {
  return (
    <div id="grid">
      <h2>Grid</h2>
      <Image
        style={{ textAlign: "center" }}
        src={process.env.NODE_ENV === 'development' ? "/assets/css_grid_diagram_2.jpg" : "full-stack-cheat-sheet/assets/css_grid_diagram_2.jpg"}
        alt="grid diagram"
        width={800}
        height={600}
      />
      <p>
        Grid is a two-dimensional layout system that allows us to create complex
        layouts with rows and columns.
      </p>
      <p>
        To set up a grid, you need to have both a grid <em>container</em> and
        grid <em>items</em>.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
  display: grid; /* for block-level grid layout or 'inline-grid' for an inline grid layout */
  grid-template-columns: 250px repeat(3, 1fr); /* 250px for the first column, then 1 'fraction' for the rest */
  grid-template-rows: repeat(2, 1fr); /* 1 'fraction' for each row */
  gap: 10px 10px; /* gap between grid items (rows and columns) */
}`}</SyntaxHighlighter>
      <p>
        <em>grid-template</em> is shorthand for <em>grid-template-columns</em>{" "}
        and <em>grid-template-rows</em>.
      </p>
      <p>
        <em>minmax()</em> is a function that allows you to specify a minimum and
        maximum size for a grid item.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.item {
  grid-column: 100px minmax(100px, 200px) 1fr;
  grid-row: 1fr minmax(50px, 100px) repeat(2, 1fr);
}`}</SyntaxHighlighter>
      <p>
        The grid needs to have a variable width and/or height for minmax() to
        work.
      </p>
      <GridTable />
      <GridTemplateAreas />
      <GridAlign />
      <GridAuto />
    </div>
  );
}

function GridTable() {
  return (
    <div>
      <table>
        <tr>
          <th>Property</th>
          <th>Code example</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>
            <span className="codeSnippet">grid-row</span>
          </td>
          <td>
            <span className="codeSnippet">{`grid-row: 4 / 6;`}</span>
          </td>
          <td>Specifies the starting and ending row of a grid item.</td>
        </tr>
        <tr>
          <td>
            <span className="codeSnippet">grid-column</span>
          </td>
          <td>
            <span className="codeSnippet">{`grid-column: 1 / span 3;`}</span>
          </td>
          <td>Specifies the starting and span (of 3) of a grid item.</td>
        </tr>
        <tr>
          <td>
            <span className="codeSnippet">grid-area</span>
          </td>
          <td>
            <span className="codeSnippet">{`grid-area: 1 / 1 / span 2 / span 3;`}</span>
          </td>
          <td>
            Specifies grid-row-start, grid-column-start, grid-row-end, and
            grid-column-end.
          </td>
        </tr>
      </table>
    </div>
  );
}

function GridTemplateAreas() {
  return (
    <div id="gridTemplateAreas">
      <p>
        By defining grid template areas, you can assign grid items to specific
        areas of the grid.
      </p>
      <SyntaxHighlighter
        language="html"
        style={atomDark}
      >{`<div class="container">
      <header>Welcome!</header>
      <nav>Links!</nav>
      <section class="info">Info!</section>
      <section class="services">Services!</section>
      <footer>Contact us!</footer>
    </div>`}</SyntaxHighlighter>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
      display: grid;
      max-width: 900px;
      position: relative;
      margin: auto;
      grid-template-areas: "header header"
                           "nav nav"
                           "info services"
                           "footer footer";
      grid-template-rows: 300px 120px 800px 120px;
      grid-template-columns: 1fr 3fr;
    }

    header {
      grid-area: header;
    }

    nav {
      grid-area: nav;
    }

    .info {
      grid-area: info;
    }

    .services {
      grid-area: services;
    }

    footer {
      grid-area: footer;
    }`}</SyntaxHighlighter>
      <p>
        Alternatively, you can use the grid-area property on individual grid
        items to assign them to areas manually:
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.left {
      background-color: dodgerblue;
      grid-area: 4 / 1 / 9 / 5;
    }

    .right {
      background-color: beige;
      grid-area: 4 / 5 / 9 / 7;
    }

    .overlap {
      background-color: lightcoral;
      grid-area: 6 / 4 / 8 / 6;
      z-index: 5;
    }`}</SyntaxHighlighter>
      <p>This also allows for overlapping areas.</p>
    </div>
  );
}

function GridAlign() {
  return (
    <div id="gridAlign">
      <h3>Justify-Items</h3>
      <p>
        You can align grid items along the inline or row axis using the
        justify-items property.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        justify-items: center;
      }`}</SyntaxHighlighter>
      <ul>
        <li>
          <strong>center</strong> - center the item within its cell
        </li>
        <li>
          <strong>start</strong> - align the item to the start of its cell
        </li>
        <li>
          <strong>end</strong> - align the item to the end of its cell
        </li>
        <li>
          <strong>stretch</strong> - stretch the item to fill its cell
        </li>
      </ul>
      <h3>Justify-Content</h3>
      <p>
        You can position the entire grid along the row axis. This property is
        declared on grid containers.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        justify-content: center;
      }`}</SyntaxHighlighter>
      <ul>
        <li>
          <strong>center</strong> - centers the grid horizontally in the grid
          container
        </li>
        <li>
          <strong>start</strong> - aligns the grid to the left side of the grid
          container
        </li>
        <li>
          <strong>end</strong> - aligns the grid to the right side of the grid
          container
        </li>
        <li>
          <strong>stretch</strong> - stretches the grid items to increase the
          size of the grid to expand horizontally across the container
        </li>
        <li>
          <strong>space-around</strong> - includes an equal amount of space on
          each side of a grid element, resulting in double the amount of space
          between elements as there is before the first and after the last
          element{" "}
        </li>
        <li>
          <strong>space-between</strong> - includes an equal amount of space
          between grid items and no space at either end
        </li>
        <li>
          <strong>space-evenly</strong> - places an even amount of space between
          grid items and at either end
        </li>
      </ul>
      <h3>Align-Items</h3>
      <p>
        You can align grid items along the block or column axis using the
        align-items property.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        align-items: center;
      }`}</SyntaxHighlighter>
      <ul>
        <li>
          <strong>center</strong> - center the item within the grid area
        </li>
        <li>
          <strong>start</strong> - align the item to the top of the grid area
        </li>
        <li>
          <strong>end</strong> - align the item to the bottom of the grid area
        </li>
        <li>
          <strong>stretch</strong> - stretch the item to fill the grid area
        </li>
      </ul>
      <h3>Align-Content</h3>
      <p>
        You can position the entire grid along the row axis. This property is
        declared on grid containers.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        align-content: center;
      }`}</SyntaxHighlighter>
      <ul>
        <li>
          <strong>center</strong> - centers the grid vertically in the grid
          container
        </li>
        <li>
          <strong>start</strong> - aligns the grid to the top side of the grid
          container
        </li>
        <li>
          <strong>end</strong> - aligns the grid to the bottom side of the grid
          container
        </li>
        <li>
          <strong>stretch</strong> - stretches the grid items to increase the
          size of the grid to expand vertically across the container
        </li>
        <li>
          <strong>space-around</strong> - includes an equal amount of space on
          each side of a grid element, resulting in double the amount of space
          between elements as there is before the first and after the last
          element{" "}
        </li>
        <li>
          <strong>space-between</strong> - includes an equal amount of space
          between grid items and no space at either end
        </li>
        <li>
          <strong>space-evenly</strong> - places an even amount of space between
          grid items and at either end
        </li>
      </ul>
      <h3>Justify-self & align-self</h3>
      <p>
        <strong>justify-self</strong> and <strong>align-self</strong> override
        the default alignment of grid items within their cells.
      </p>
    </div>
  );
}

function GridAuto() {
  return (
    <div id="gridAuto">
      <h3>Grid Auto Rows and Columns</h3>
      <p>
        <strong>grid-auto-rows</strong> and <strong>grid-auto-columns</strong>{" "}
        are used to define the size of grid rows and columns when there is no
        explicit grid template defined.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        grid: repeat(2, 100px) / repeat(2, 150px);
        grid-auto-rows: 50px;
      }
`}</SyntaxHighlighter>
      <p>
        After the initial two rows are filled, each {`<div>`} is added as a 50px
        row.
      </p>
      <h3>Grid Auto Flow</h3>
      <p>
        <strong>grid-auto-flow</strong> is used to define how grid items are
        placed when there is no explicit grid template defined.
      </p>
      <SyntaxHighlighter language="css" style={atomDark}>{`.container {
        display: grid;
        grid-auto-flow: row /* row or column or dense */;
      }`}</SyntaxHighlighter>
      <ul>
        <li>
          <strong>row</strong> - grid items are placed in rows (default)
        </li>
        <li>
          <strong>column</strong> - grid items are placed in columns
        </li>
        <li>
          <strong>dense</strong> - grid items are placed in the smallest
          possible space
        </li>
      </ul>
    </div>
  );
}
