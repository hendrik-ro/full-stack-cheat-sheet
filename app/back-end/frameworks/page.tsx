import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Frameworks</h1>
      <ul>
        <li>
          <strong>JavaScript</strong> - Runtime:{" "}
          <Link href="/back-end/frameworks/nodejs">Node.js</Link>{" "}
        </li>
      </ul>
    </div>
  );
}
