import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div id="react">
        <h1>React</h1>
        <p>
          <a target="_blank" href="https://react.dev/">
            React
          </a>{" "}
          is a JavaScript library for building user interfaces.
        </p>
        <p>
          It is component-based, allowing developers to create reusable UI
          components.
        </p>
        <p>
          React efficiently updates and renders the right components when data
          changes, using a virtual DOM to improve performance.
        </p>
        <p>
          It is widely used for single-page applications and dynamic web
          interfaces.
        </p>
        <p>
          For faster interactive development, use a framework such as{" "}
          <Link href="/front-end/next-js">Next.js</Link>.
        </p>
      </div>
      <div>
        <h2>DOM</h2>
        <p>
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
          >
            DOM
          </a>{" "}
          is the Document Object Model, a programming interface for web
          documents.
        </p>
        <p>
          It represents the structure of a web page as a tree of objects,
          allowing developers to manipulate the page`s content and structure.
        </p>
      </div>
      <div id="react-frameworks">
        <h2>React Frameworks</h2>
        <p>To speed up development, you can use a React framework.</p>
        <p>
          <Link href="/front-end/react/next-js">Next.js</Link>
        </p>
        <p>
          <Link href="/front-end/react/vite">Vite</Link>
        </p>
      </div>
    </div>
  );
}
