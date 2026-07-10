import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return <div>
    <div id="server">
      <h1>Server</h1>
      <p>A back end server is the part of a web application that handles data processing, storage, and business logic.</p>
      <p>It operates behind the scenes, separate from the user-facing front end.</p>
      <p>The server receives requests from clients (e.g., web browsers or mobile apps), processes them, interacts with databases or other services, and returns responses, often in the form of JSON or HTML.</p>
      <p>It manages authentication, data validation, and core application functionality, ensuring the system operates securely and efficiently.</p>
    </div>
    <div id="boiler-plate">
      <h2>Boiler Plate</h2>
      <p>A boiler plate is a starting point or template for a project, providing a basic structure and code that can be customized for specific needs.</p>
      <p>JavaScript</p>
      <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{width: '650px', margin: 'auto'}}>
        {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`}
      </SyntaxHighlighter>
      <p>Golang</p>
      <SyntaxHighlighter language="go" style={atomDark} customStyle={{width: '650px', margin: 'auto'}}>
        {`package main

import "fmt"

func main() {
  mux := http.NewServeMux()
  mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Hello World!")
  })

  http.ListenAndServe(":3000", mux)
}
        `}
      </SyntaxHighlighter>
    </div>
  </div>;
}
