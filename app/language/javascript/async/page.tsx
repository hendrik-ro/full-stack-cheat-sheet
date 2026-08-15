import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AsyncPage() {
  return (
    <div>
      <h1>Asynchronous code</h1>
      <AsyncPromise />
      <AsyncFunction />
      <AsyncThen />
      <AsyncPromiseAll />
      <AsyncTimeout />
      <br />
    </div>
  );
}

function AsyncPromise() {
  return (
    <div>
      <h2>Promise</h2>
      <p>
        A <code>Promise</code> is an object that represents the outcome of an
        asynchronous function.
      </p>
      <p>
        <strong>Promise states:</strong>
      </p>
      <ol>
        <li>
          <code>Pending:</code> - function is still running
        </li>
        <li>
          <code>Fulfilled:</code> - function has completed successfully
        </li>
        <li>
          <code>Rejected:</code> - function has failed
        </li>
      </ol>
    </div>
  );
}

function AsyncFunction() {
  return (
    <div>
      <h2>Function example</h2>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const myExecutor = (resolve, reject) => {
  if (true) {
    resolve("Successfully resolved.");
  } else {
    reject("Rejected.");
  }
};

const result = () => {
  return new Promise(myExecutor);
};`}</SyntaxHighlighter>
    </div>
  );
}

function AsyncTimeout() {
  return (
    <div>
      <h2>Timeout example</h2>
      <p>
        <strong>Node</strong>`s API <code>setTimeout()</code> returns a{" "}
        <code>Promise</code>:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`console.log("This is the first line of code.");

const usingSTO = () => {
  console.log("This is the second line of code.");
};

setTimeout(usingSTO, 500);

console.log("This is the last line of code.");`}</SyntaxHighlighter>
      <p>Which will print:</p>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
      >{`This is the first line of code.\nThis is the last line of code.\nThis is the second line of code.`}</SyntaxHighlighter>
      <p>Due to the timeout set to 500ms.</p>
    </div>
  );
}

function AsyncThen() {
  return (
    <div>
      <h2>Handling Promises</h2>
      <p><code>.then()</code> is a method that takes two callback functions to be executed when the promise is resolved or rejected.</p>
      <p>Conventionally, we use <code>.then()</code> to handle the resolved value and <code>.catch()</code> to handle the rejected value.</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`const handleSuccess = (resolved) => {
  console.log(resolved);
};

const handleError = (rejected) => {
  console.error(rejected);
};

result().then(handleSuccess).catch(handleError);`}</SyntaxHighlighter>
      <p>Promises can be chained together using <code>.then()</code> and <code>.catch()</code>.</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`firstPromiseFunction()
  .then((firstResolveVal) => {
    return secondPromiseFunction(firstResolveVal);
  })
  .then((secondResolveVal) => {
    console.log(secondResolveVal);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });`}</SyntaxHighlighter>
    </div>
  );
}

function AsyncPromiseAll() {
  return (
    <div>
      <h2>Promise.all()</h2>
      <p><code>Promise.all()</code> is a method that takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects when any of the promises in the array have rejected.</p>
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
      >{`Promise.all([promise1, promise2, promise3])
  .then((resolvedValues) => {
    console.log(resolvedValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });`}</SyntaxHighlighter>
    </div>
  );
}
