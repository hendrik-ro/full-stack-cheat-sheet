import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div id="react">
        <h1>React</h1>
        <p>
          <a
            target="_blank"
            href="https://react.dev/"
            rel="noopener norefferer"
          >
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
          For faster interactive development, use a{" "}
          <Link href="/front-end/react/frameworks">framework</Link>.
        </p>
      </div>
    </div>
  );
}
