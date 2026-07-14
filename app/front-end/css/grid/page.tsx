import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function GridPage() {
  return (<div id="grid-page">
    <Grid />
  </div>);
}

function Grid() {
  return (
    <div id="grid">
      <h2>Grid</h2>
      <Image src="/assets/css_grid_diagram_2.svg" alt="grid diagram" width={800} height={600} />
      <p>Grid is a two-dimensional layout system that allows us to create complex layouts with rows and columns.</p>
      <p>To set up a grid, you need to have both a grid <em>container</em> and grid <em>items</em>.</p>
      <SyntaxHighlighter language='css' style={atomDark}>{`.container {
  display: grid; /* for block-level grid layout or 'inline-grid' for an inline grid layout */
  grid-template-columns: 250px repeat(3, 1fr); /* 250px for the first column, then 1 'fraction' for the rest */
  grid-template-rows: repeat(2, 1fr); /* 1 'fraction' for each row */
  gap: 10px 10px; /* gap between grid items (rows and columns) */
}`}</SyntaxHighlighter>
      <p><em>grid-template</em> is shorthand for <em>grid-template-columns</em> and <em>grid-template-rows</em>.</p>
      <p><em>minmax()</em> is a function that allows you to specify a minimum and maximum size for a grid item.</p>
      <SyntaxHighlighter language='css' style={atomDark}>{`.item {
  grid-column: 100px minmax(100px, 200px) 1fr;
  grid-row: 1fr minmax(50px, 100px) repeat(2, 1fr);
}`}</SyntaxHighlighter>
      <p>The grid needs to have a variable width and/or height for minmax() to work.</p>
      <table>
        <tr>
          <th>Property</th>
          <th>Code example</th>
          <th>Description</th>
        </tr>
        <tr>
          <td><span className='codeSnippet'>grid-row</span></td>
          <td><span className='codeSnippet'>{`grid-row: 4 / 6;`}</span></td>
          <td>Specifies the starting and ending row of a grid item.</td>
        </tr>
        <tr>
          <td><span className='codeSnippet'>grid-column</span></td>
          <td><span className='codeSnippet'>{`grid-column: 1 / span 3;`}</span></td>
          <td>Specifies the starting and span (of 3) of a grid item.</td>
        </tr>
        <tr>
          <td><span className='codeSnippet'>grid-area</span></td>
          <td><span className='codeSnippet'>{`grid-area: 1 / 1 / span 2 / span 3;`}</span></td>
          <td>Specifies grid-row-start, grid-column-start, grid-row-end, and grid-column-end.</td>
        </tr>
      </table>
    </div>
  );
}
