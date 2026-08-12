import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>Node.js</h2>
      <p>
        <Link
          target="_blank"
          rel="noopener noreference"
          href="https://nodejs.org/en"
        >
          Node
        </Link>{" "}
        is a free, open-source, cross-platform JavaScript runtime environment.
      </p>
    </div>
  );
}
