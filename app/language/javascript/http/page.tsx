import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function HTTP() {
  return (
    <div>
      <h1>HTTP</h1>
      <GET />
    </div>
  )
}

function GET() {
  return (
    <div>
      <h2>GET</h2>
      <p>A basic fetch request using a word query <code>?sl=</code></p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const GetRequest = () => {
  const wordQuery = inputField.value;
  const endpoint = baseUrl + wordQuery; // define base url such as "https://api.datamuse.com/words?sl="

  fetch(endpoint)
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    )
    .then((jsonResponse) => {
      return jsonResponse;
    });
};`}</SyntaxHighlighter>
    </div>
  )
}
