export default function Tables() {
  return (
    <div id="tables">
      <h2>Tables</h2>
      <h3>Table Tags</h3>
      <table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
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
          <tr>
            <th>Attribute</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
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
