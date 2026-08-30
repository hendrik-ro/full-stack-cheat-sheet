import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Testing Libraries</h1>
      <TestingJS />
      <TestingGo />
    </div>
  );
}

function TestingJS() {
  return (
    <div>
      <h2>JavaScript</h2>
      <ul style={{ fontSize: "1rem" }}>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.chaijs.com/"
          >
            Chai
          </Link>{" "}
          - assertion library for JavaScript
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://enzymejs.github.io/enzyme/"
          >
            Enzyme
          </Link>{" "}
          - testing framework for React
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.jestjs.io/"
          >
            Jest
          </Link>{" "}
          - testing framework for JavaScript
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://mochajs.org/"
          >
            Mocha
          </Link>{" "}
          - testing framework for JavaScript
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://sinonjs.org/"
          >
            Sinon
          </Link>{" "}
          - library that includes fakes, spies and mocks that can be used with
          any testing framework
        </li>
      </ul>
    </div>
  );
}

function TestingGo() {
  return (
    <div>
      <h2>Go</h2>
      <ul style={{ fontSize: "1rem" }}>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/stretchr/testify"
          >
            Testify
          </Link>{" "}
          - testing library for Go
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://golangci-lint.run/"
          >
            Golangci-lint
          </Link>{" "}
          - linter for go
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://pkg.go.dev/testing"
          >
            Testing
          </Link>{" "}
          - built-in testing package
        </li>
      </ul>
    </div>
  );
}
