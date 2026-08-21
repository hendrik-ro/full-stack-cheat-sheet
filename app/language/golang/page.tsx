import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page() {
  return (
    <div>
      <div id="go">
        <h1>Golang</h1>
        <p>
          <Link
            target="_blank"
            href="https://go.dev/"
            rel="noopener norefferer"
          >
            Golang
          </Link>{" "}
          or <em>Go</em> is a programming language.
        </p>
        <GoInit />
        <GoHelloWorld />
        <GoExternalPackages />
        <br />
      </div>
    </div>
  );
}

function GoInit() {
  return (
    <div>
      <h2>Initialization</h2>
      <p>
        Before you can start writing Go code, you need to initialize a module.
      </p>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
      >{`$ go mod init github.com/<username>/hello
go: creating new go.mod: module github.com/<username>/hello`}</SyntaxHighlighter>
      <p>
        Where <code>username</code> is the username of the GitHub account which
        holds the repository.
      </p>
    </div>
  );
}

function GoHelloWorld() {
  return (
    <div>
      <h2>Hello World</h2>
      <SyntaxHighlighter language="go" style={dracula}>{`package main
import "fmt"

func main() {
  fmt.Println("Hello World")
}`}</SyntaxHighlighter>
      <p>
        <code>package main</code> defines the package name. In Go, all packages
        must be defined in a directory with the same name as the package.
      </p>
      <p>
        <code>import &quot;fmt&quot;</code> imports the <code>fmt</code>{" "}
        package, which provides formatted I/O functions.
      </p>
      <p>
        <code>func main()</code> is the entry point of the program. It is called
        when the program is executed.
      </p>
      <br />
      <p>
        To run the program, use the <code>go run</code> command followed by the
        filename or <code>.</code> to run the current directory.
      </p>
      <SyntaxHighlighter
        language="bash"
        style={dracula}
      >{`$ go run .`}</SyntaxHighlighter>
    </div>
  );
}

function GoExternalPackages() {
  return (
    <div>
      <h2>External Packages</h2>
      <p>
        External packages are packages that are not part of the standard
        library.
      </p>
      <p>
        You can search for external packages on{" "}
        <Link
          href="https://pkg.go.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pkg.go.dev
        </Link>
        .
      </p>
      <SyntaxHighlighter
        language="go"
        style={dracula}
      >{`import "github.com/hendrik-ro/replGo"

func main() {
  r := replGo.NewRepl()
  r.Run()
}`}</SyntaxHighlighter>
      <p>
        Next, run <code>go mod tidy</code> to download and install any missing
        dependencies.
      </p>
    </div>
  );
}
