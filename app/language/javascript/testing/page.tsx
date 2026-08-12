import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Testing</h2>
      <TestingMocha />
    </div>
  );
}

function TestingMocha() {
  return (
    <div>
      <h3>Mocha</h3>
      <p>
        <Link
          href="https://mochajs.org/"
          rel="noopener noreference"
          target="_blank"
        >
          Mocha
        </Link>{" "}
        is a test framework running on Node.js.
      </p>
    </div>
  );
}
