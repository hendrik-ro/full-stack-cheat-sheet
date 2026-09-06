import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function Page() {
  return (
    <div id="boiler-plate">
      <h1>Boiler Plate</h1>
      <p>
        A boiler plate is a starting point or template for a project, providing
        a basic structure and code that can be customized for specific needs.
      </p>
      <h2>JavaScript</h2>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});`}
      </SyntaxHighlighter>
      <h2>Golang</h2>
      <SyntaxHighlighter language="go" style={dracula}>
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
  );
}
