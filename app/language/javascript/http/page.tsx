import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function HTTP() {
  return (
    <div>
      <h1>HTTP</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "1rem" }}>Jump to:</p>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "5%",
          }}
        >
          <a href="#get">GET</a>
          <a href="#post">POST</a>
        </nav>
      </div>
      <Request />
      <Response />
      <GET />
      <POST />
      <br />
    </div>
  );
}

function Request() {
  return (
    <div>
      <h2>Request Object</h2>
      <p>
        The <code>Request</code> object represents a request to a server.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`type Request = {
  url: string,
  headers: {
    [key: string]: string, // e.g. "Content-Type": "application/json"
  },
  body: string | null,
};`}</SyntaxHighlighter>
      <p>
        See{" "}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/API/Request/Request"
          target="_blank"
          rel="noopener noreferrer"
        >
          Request
        </Link>{" "}
        for more properties and methods.
      </p>
    </div>
  );
}

function Response() {
  return (
    <div>
      <h2>Response Object</h2>
      <p>
        The <code>Response</code> object represents a response from a server.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`type Response = {
  ok: boolean,
  status: number,
  headers: {
    [key: string]: string, // e.g. "Content-Type": "application/json"
  },
  body: string | null,
};`}</SyntaxHighlighter>
      <p>
        The <code>.json()</code> method returns a promise that resolves to the
        parsed JSON body of the response.
      </p>
      <p>
        See{" "}
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/API/Response/Response"
          target="_blank"
          rel="noopener noreferrer"
        >
          Response
        </Link>{" "}
        for more properties and methods.
      </p>
    </div>
  );
}

function GET() {
  return (
    <div>
      <h2 id="get">GET</h2>
      <p>
        A fetch request using <code>fetch()</code> and <code>.then()</code>:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`// Information to reach API
const url = "https://api.datamuse.com/words?sl=";

// Selects page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
const GetRequest = () => {
  const wordQuery = inputField.value;
  const endpoint = url + wordQuery;

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
};

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);`}</SyntaxHighlighter>
      <p>
        Similarly, using <code>async</code> and <code>await</code>:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_jja=";

// Selecting page elements
const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");
const responseField = document.querySelector("#responseField");

// Asynchronous function
// Code goes here
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  try {
    const response = await fetch(endpoint, { cache: "no-cache" });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener("click", displaySuggestions);`}</SyntaxHighlighter>
    </div>
  );
}

function POST() {
  return (
    <div>
      <h2 id="post">POST</h2>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`// information to reach API
const apiKey = "<enter-your-api-key>";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        apikey: apiKey,
      },
      body: data,
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);`}</SyntaxHighlighter>
    </div>
  );
}
