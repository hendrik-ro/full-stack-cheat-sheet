import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Page() {
  return (<div>
    <div>
      <h1>HTML</h1>
      <p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> is a markup language for structuring web content in browsers.</p>
      <BreadcrumbsHTML />
      <ColumnGridTemplate />
      <Flexbox />
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

function Flexbox() {
  return (<div id="flexbox">
    <h2>Flexbox</h2>
    <FlexboxDisplay />
    <FlexboxJustifyContent />
    <FlexboxFlex />
    <FlexboxFlexWrap />
  </div>
  );
}

function FlexboxDisplay() {
  return (
    <div>
    <h3>Display</h3>
  <p>A div with the declaration display: flex; will remain block level — no other elements will appear on the same line as it.</p>
  <p>However, it will change the behavior of its child elements. Child elements will not begin on new lines.</p>
  <SyntaxHighlighter language='css' style={atomDark}>{`div.container {
    display: flex;
  }`}</SyntaxHighlighter>
  <p>With display property <em>inline-flex</em>, divs will display inline with each other if the page is wide enough.</p>
  <p>The child containers` width will shrink to their parents` container`s width.</p>
  <SyntaxHighlighter language='css' style={atomDark}>{`.container {
    width: 150px;
    border: 1px solid grey;
    display: inline-flex;
  }

  .box {
    background-color: dodgerblue;
    height: 75px;
    width: 75px;
    border: 1px solid turquoise;
  }`}</SyntaxHighlighter>
  <SyntaxHighlighter language='React' style={atomDark}>{`<div className='container-inline-flex'>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
    </div>
    <div className='container-inline-flex'>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
    </div>
</div>`}</SyntaxHighlighter>
  <div className='container-inline-flex'>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
    </div>
    <div className='container-inline-flex'>
      <div className='box'>
        <h3>1</h3>
      </div>
      <div className='box'>
        <h3>2</h3>
      </div>
      <div className='box'>
        <h3>3</h3>
      </div>
  </div>
  <p>With a display value <em>flex</em> or <em>inline-flex</em> of parent containers, all of the child elements (flex items) are moved toward the upper left corner of the parent container.</p>
  <p>To position the items from left to right, we use a property called justify-content.</p>
  <SyntaxHighlighter language='css' style={atomDark}>{`.container {
    display: flex;
    justify-content: flex-end;
  }`}</SyntaxHighlighter>
  <p>This will cause all of the flex items to shift to the right side of the flex container.</p>
  </div>
  );
}

function FlexboxJustifyContent() {
  return (
    <div>
      <h3>Justify-content</h3>
      <p>This property will align items horizontally within the parent container.</p>
      <p>To adjust a flex container`s content, we can use:</p>
      <ul className='leftList'>
        <li><strong>flex-start</strong> — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them. </li>
        <li><strong>flex-end</strong> — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.</li>
        <li><strong>center</strong> — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.</li>
        <li><strong>space-around</strong> — items will be positioned with equal space before and after each item, resulting in double the space between elements.</li>
        <li><strong>space-between</strong> — items will be positioned with equal space between them, but no extra space before the first or after the last elements.</li>
      </ul>
      <h3>Align-items</h3>
      <p>This property will align items vertically within the parent container.</p>
      <ul className='leftList'>
        <li><strong>flex-start</strong> — all elements will be positioned at the top of the parent container.</li>
        <li><strong>flex-end</strong> — all elements will be positioned at the bottom of the parent container.</li>
        <li><strong>center</strong> — the center of all elements will be positioned halfway between the top and bottom of the parent container.</li>
        <li><strong>baseline</strong> — the bottom of the content of all items will be aligned with each other.</li>
        <li><strong>stretch</strong> — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).</li>
      </ul>
    </div>
  );
}

function FlexboxFlex() {
  return (
  <div>
    <h3>Flex-grow</h3>
    <p>Allows child containers to grow into a bigger parent container.</p>
    <SyntaxHighlighter language='css' style={atomDark}>{`.container {
      display: flex;
      width: 500px;
    }

    .side {
      width: 100px;
      flex-grow: 1;
    }

    .center {
      width: 100px;
      flex-grow: 2;
    }`}</SyntaxHighlighter>
    <p>In this example the .center div will stretch twice as much as the .side divs.</p>
    <p>If a max-width is set for an element, it will not grow larger than that even if there is more space for it to absorb.</p>
    <h3>Flex-shrink</h3>
    <p><em>flex-shrink</em> acts the same as above in the opposite direction.</p>
    <h3>Flex-basis</h3>
    <p><em>flex-basis</em> allows us to specify the width of an item before it stretches or shrinks.</p>
    <SyntaxHighlighter language='css' style={atomDark}>{`.container {
      display: flex;
    }

    .side {
      flex-grow: 1;
      flex-basis: 100px;
    }

    .center {
      flex-grow: 2;
      flex-basis: 150px;
    }`}</SyntaxHighlighter>
    <p>In the example above, the .side divs will be 100 pixels wide and the .center div will be 150 pixels wide if the .container div has just the right amount of space (350 pixels, plus a little extra for margins and borders).</p>
    <p>If the .container div is larger, the .center div will absorb twice as much space as the .side divs.</p>
    <h3>Flex</h3>
    <p><em>flex</em> is a shorthand property that allows to set flex-grow, flex-shrink, and flex-basis in one line.</p>
    <p><strong>Note:</strong> The flex property is different from the flex value used for the display property.</p>
    <SyntaxHighlighter language='css' style={atomDark}>{`.big {
      flex: 2 1 150px; /* flex-grow: 2; flex-shrink: 1; flex-basis: 150px; */
    }

    .small {
      flex: 1 2 100px; /* flex-grow: 1; flex-shrink: 2; flex-basis: 100px; */
    }`}</SyntaxHighlighter>
    <p>You can ommit flex-shrink and/or flex-basis, but there is no way to ommit flex-grow.</p>
  </div>
  );
}

function FlexboxFlexWrap() {
  return (
    <div className='leftList'>
      <h3>Flex-Wrap</h3>
      <p>Allows for child containers to wrap around lines rather than shrinking.</p>
      <ul>
        <li><strong>wrap</strong> — child elements of a flex container that don’t fit into a row will move down to the next line</li>
        <li><strong>wrap-reverse</strong> — the same functionality as wrap, but the order of rows within a flex container is reversed (for example, in a 2-row flexbox, the first row from a wrap container will become the second in wrap-reverse and the second row from the wrap container will become the first in wrap-reverse)</li>
        <li><strong>nowrap</strong> — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.</li>
      </ul>
    </div>
  );
}

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
