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
      <CRUD />
      <Types />
      <ResponseCodes />
    </div>
  );
}

function CRUD() {
  return (
    <div>
      <h2>CRUD</h2>
      <table>
        <thead>
          <tr>
            <th style={{ color:"steelblue" }}>Operation</th>
            <th style={{ color:"steelblue" }}>HTTP Method</th>
            <th style={{ color:"steelblue" }}>SQL Statement</th>
            <th style={{ color:"steelblue" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Create</td>
            <td>POST</td>
            <td>INSERT</td>
            <td>For creating a new resource</td>
          </tr>
          <tr>
            <td>Read</td>
            <td>GET</td>
            <td>SELECT</td>
            <td>For retrieving a resource</td>
          </tr>
          <tr>
            <td>Update</td>
            <td>PUT</td>
            <td>UPDATE</td>
            <td>For updating an existing resource</td>
          </tr>
          <tr>
            <td>Delete</td>
            <td>DELETE</td>
            <td>DELETE</td>
            <td>For deleting a resource</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Types() {
  return (
    <div>
      <h2>Types of APIs</h2>
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
  )
}

function ResponseCodes() {
  return (
    <div>
      <h2>Response Codes</h2>
      <table>
        <thead>
          <tr>
            <th style={{ color:"steelblue" }}>Status Code</th>
            <th style={{ color:"steelblue" }}>Meaning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200 (OK)</td>
            <td>This is the standard response for successful HTTP requests.</td>
          </tr>
          <tr>
            <td>201 (CREATED)</td>
            <td>This is the standard response for an HTTP request that resulted in an item being successfully created.</td>
          </tr>
          <tr>
            <td>204 (NO CONTENT)</td>
            <td>This is the standard response for successful HTTP requests, where nothing is being returned in the response body.</td>
          </tr>
          <tr>
            <td>400 (BAD REQUEST)</td>
            <td>The request cannot be processed because of bad request syntax, excessive size, or another client error.</td>
          </tr>
          <tr>
            <td>403 (FORBIDDEN)</td>
            <td>The client does not have permission to access this resource.</td>
          </tr>
          <tr>
            <td>404 (NOT FOUND)</td>
            <td>The resource could not be found at this time. It is possible it was deleted, or does not exist yet.</td>
          </tr>
          <tr>
            <td>500 (INTERNAL SERVER ERROR)</td>
            <td>The generic answer for an unexpected failure if there is no more specific information available.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
