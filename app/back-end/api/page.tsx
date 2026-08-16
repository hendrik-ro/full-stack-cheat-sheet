import Link from "next/link";

export default function Page() {
  return (
    <div>
        <h1>APIs</h1>
        <p>
          <Link
            target="_blank"
            href="https://www.geeksforgeeks.org/software-testing/what-is-an-api/"
            rel="noopener norefferer"
          >
            API
          </Link>
          or Application Programming Interface are connections between two programs.
      </p>
      <table>
        <thead>
          <tr>
            <th style={{ color:"steelblue" }}>API Type</th>
            <th style={{ color:"steelblue" }}>Description</th>
            <th style={{ color:"steelblue" }}>Examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Web APIs</td>
            <td>Accessible via HTTP/HTTPS protocols</td>
            <td>REST APIs, GraphQL APIs</td>
          </tr>
          <tr>
            <td>Local APIs</td>
            <td>Accessible via local network protocols</td>
            <td>Windows API, .NET API</td>
          </tr>
          <tr>
            <td>Program APIs</td>
            <td>Communicate using methods such as RPC (Remote Procedure Call)</td>
            <td>SOAP, XML-RPC</td>
          </tr>
          <tr>
            <td>Internal APIs</td>
            <td>Private APIs within a organization to connect internal services</td>
            <td>Internal microservices</td>
          </tr>
          <tr>
            <td>Partner APIs</td>
            <td>Shared with specific external business partners for controlled data exchange</td>
            <td>Payment Gateway APIs</td>
          </tr>
          <tr>
            <td>Open (Public) APIs</td>
            <td>Accessible to the public, without authentication or authorization</td>
            <td>GitHub API, Twitter API</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
