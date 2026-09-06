export default function Page() {
  return (
    <div>
      <div id="server">
        <h1>Server</h1>
        <p>
          A server provides services to clients over a network. An example is a
          web server where a client requests a page from the server to the
          browser.
        </p>
        <h2>Server types</h2>
        <ul>
          <li>
            <strong>File server</strong> - stores files usually on a local
            network
          </li>
          <li>
            <strong>Application server</strong> - provides software without
            clients downloading the application
          </li>
          <li>
            <strong>Mail server</strong> - stores and deliver email
          </li>
          <li>
            <strong>Database server</strong> - stores data
          </li>
          <li>
            <strong>Web server</strong> - delivers we pages
          </li>
          <li>
            <strong>Proxy server</strong> - sends client requests to websites
            and their response back to the client
          </li>
        </ul>
      </div>
    </div>
  );
}
