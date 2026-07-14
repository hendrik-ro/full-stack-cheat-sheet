import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function Page() {
  return (<div>
  <div id="css">
      <h1>CSS</h1>
      <p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Cascading Style Sheets</a> are used to specify the presentation and styling of a document written in a markup language such as HTML.</p>
    </div>
    <BreadcrumbCSS />
    <Flexbox />
    <Grid />
    <Properties />
    <Selectors />
    <Skeuomorphism />
    <Transitions />
  </div>
    )
}


function BreadcrumbCSS() {
    return (
      <div id="breadcrumbCSS">
        <h2>Breadcrumbs</h2>
        <p>Breadcrumbs are a navigation aid that show the user`s current location within the site.</p>
        <SyntaxHighlighter language="css" style={atomDark}>{`.breadcrumb > li {
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

function Flexbox() {
  return (<div id="flexbox">
    <h2>Flexbox</h2>
    <FlexboxDisplay />
    <FlexboxJustifyContent />
    <FlexboxAlignItems />
    <FlexboxFlex />
    <FlexboxFlexWrap />
    <FlexboxAlignContent />
    <FlexboxFlexDirection />
    <FlexboxFlexFlow />
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
      <p>This property will align items along the main axis within the parent container.</p>
      <p>To adjust a flex container`s content, we can use:</p>
      <ul className='leftList'>
        <li><strong>flex-start</strong> — all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them. </li>
        <li><strong>flex-end</strong> — all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.</li>
        <li><strong>center</strong> — all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.</li>
        <li><strong>space-around</strong> — items will be positioned with equal space before and after each item, resulting in double the space between elements.</li>
        <li><strong>space-between</strong> — items will be positioned with equal space between them, but no extra space before the first or after the last elements.</li>
      </ul>
    </div>
  );
}

function FlexboxAlignItems() {
  return (
    <div>
      <h3>Align-items</h3>
      <p>This property is used to align items within a single row or column along the cross axis.</p>
      <ul className='leftList'>
        <li><strong>flex-start</strong> — all elements will be positioned at the top of the parent container.</li>
        <li><strong>flex-end</strong> — all elements will be positioned at the bottom of the parent container.</li>
        <li><strong>center</strong> — the center of all elements will be positioned halfway between the top and bottom of the parent container.</li>
        <li><strong>baseline</strong> — the bottom of the content of all items will be aligned with each other.</li>
        <li><strong>stretch</strong> — if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).</li>
      </ul>    </div>
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
    <div>
      <h3>Flex-Wrap</h3>
      <p>Allows for child containers to wrap around lines rather than shrinking.</p>
      <ul className='leftList'>
        <li><strong>wrap</strong> — child elements of a flex container that don’t fit into a row will move down to the next line</li>
        <li><strong>wrap-reverse</strong> — the same functionality as wrap, but the order of rows within a flex container is reversed (for example, in a 2-row flexbox, the first row from a wrap container will become the second in wrap-reverse and the second row from the wrap container will become the first in wrap-reverse)</li>
        <li><strong>nowrap</strong> — prevents items from wrapping; this is the default value and is only necessary to override a wrap value set by a different CSS rule.</li>
      </ul>
      <p><strong>Note:</strong> Pairing with <em>justify-content: space-around</em> can serve as a solid baseline for a flexbox layout.</p>
    </div>
  );
}

function FlexboxAlignContent() {
  return (
    <div>
      <h3>Align-content</h3>
      <p>This property will align items along the cross axis within the parent container.</p>
      <p>align-items is for aligning elements within a single row. If a flex container has multiple rows of content, we can use align-content to space the rows from top to bottom.</p>
      <ul className='leftList'>
        <li><strong>flex-start</strong> — all rows of elements will be positioned at the top of the parent container with no extra space between.</li>
        <li><strong>flex-end</strong> — all rows of elements will be positioned at the bottom of the parent container with no extra space between.</li>
        <li><strong>center</strong> — all rows of elements will be positioned at the center of the parent element with no extra space between.</li>
        <li><strong>space-between</strong> — all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.</li>
        <li><strong>space-around</strong> — all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.</li>
        <li><strong>stretch</strong> — if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).</li>
      </ul>
    </div>
  )
}

function FlexboxFlexDirection() {
  return (
    <div>
      <h3>Flex-direction</h3>
      <p>flex-direction determines the direction in which flex items are placed within a flex container. By default, it is set to <strong>row</strong>, which places items horizontally from left to right. However, we can change it to <strong>column</strong> to place items vertically from top to bottom, or to <strong>row-reverse</strong> or <strong>column-reverse</strong> to reverse the order of items.</p>
      <ul className='leftList'>
        <li><strong>row</strong> — items are placed horizontally from left to right (default value).</li>
        <li><strong>column</strong> — items are placed vertically from top to bottom.</li>
        <li><strong>row-reverse</strong> — items are placed horizontally from right to left.</li>
        <li><strong>column-reverse</strong> — items are placed vertically from bottom to top.</li>
      </ul>
    </div>
  );
}

function FlexboxFlexFlow() {
  return (
    <div>
      <h3>Flex-flow</h3>
      <p>flex-flow is a shorthand property that combines flex-direction and flex-wrap. It allows us to specify the direction in which flex items are placed within a flex container, as well as whether they should wrap onto multiple lines if there is not enough space.</p>
      <ul className='leftList'>
        <li><strong>flex-direction</strong> — specifies the direction in which flex items are placed within a flex container.</li>
        <li><strong>flex-wrap</strong> — specifies whether flex items should wrap onto multiple lines if there is not enough space.</li>
      </ul>
      <SyntaxHighlighter language='css' style={atomDark}>{`.container {
  flex-flow: column wrap; /* flex-direction: column; flex-wrap: wrap; */
}`}</SyntaxHighlighter>
    </div>
  );
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
    </div>
  );
}

function Transitions() {
    return (
      <div id="transitions">
          <h2>Transitions</h2>
          <SyntaxHighlighter language="css" style={atomDark}>{`
.button {
     padding: 5px;
     border: 1px solid steelblue;
     border-radius: 5px;
     text-decoration: none;
     box-shadow: 0px 5px;
 }

 .button:hover {
     background-color: #fff;
     cursor: pointer;
     color: lightsalmon;
     transition: color .1s ease-in, background-color .1s ease-in;
 }

 .button:active {
     margin-top: 5px;
     color: lightsalmon;
     box-shadow: 0px 0px;
     font-size: 18px;
     transition: font-size .1s ease-in-out;
 }
}`}</SyntaxHighlighter>
          <button id="button2">Button</button>
          <p></p>
      </div>
    );
}

function Skeuomorphism() {
    return (
      <div id="skeuomorphism">
          <h2>Skeuomorphism</h2>
          <p>Skeuomorphic design imitates real life. This lowers the user`s learning curve and allows for intuitive design.</p>
          <SyntaxHighlighter language="css" style={atomDark}>{`button {
     padding: 5px;
     border: 1px solid steelblue;
     border-radius: 5px;
     text-decoration: none;
     box-shadow: 0px 5px;
 }

 button:hover {
     cursor: pointer;
     color: lightsalmon;
 }

 button:active {
     margin-top: 5px;
     color: lightsalmon;
     box-shadow: 0px 0px;
 }
}`}</SyntaxHighlighter>
          <p>The CSS above renders the following button.</p>
          <button id="button">Button</button>
      </div>
    );
}

function Properties() {
  return (
    <div id="properties">
  <h2>Properties</h2>
  <table>
      <tr>
          <th>Property</th>
          <th>Code example</th>
          <th>Description</th>
      </tr>
      <tbody>
          <tr>
              <td><span className="codeSnippet">color</span></td>
              <td><SyntaxHighlighter language="css" style={atomDark}>{`a {
color: blue;
}`}</SyntaxHighlighter></td>
              <td>Sets foreground color of anchors to blue.</td>
          </tr>
      </tbody>
  </table>
    </div>
  );
}

function Selectors() {
  return (
    <div id="selectors">
    <h2>Selectors</h2>
    <table>
        <thead>
            <th>Selector</th>
            <th>Code example</th>
            <th>Description</th>
        </thead>
        <tbody>
            <tr>
                <td><span className="codeSnippet">a</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`a {
color: blue;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all anchor elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">div p</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`div p {
border: 1px solid white;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all paragraph elements within div elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">h1, h2, h3</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`h1, h2, h3 {
text-transform: capitalize;
}`}</SyntaxHighlighter></td>
                <td>Defines style for all listed elements.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">.class</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`
.class {
  background-color: lightblue;
}
}`}</SyntaxHighlighter></td>
                <td>Defines style for all elements of a class.</td>
            </tr>
            <tr>
                <td><span className="codeSnippet">#id</span></td>
                <td><SyntaxHighlighter language="css" style={atomDark}>{`#id {
text-align: center;
}`}</SyntaxHighlighter></td>
                <td>Defines style for an element with a unique id.</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}
