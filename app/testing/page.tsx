import Link from "next/link";

export default function TestingPage() {
  return (
    <div>
      <h1>Testing</h1>
      <p>Rather than manually running tests, testing <Link href="/testing/lib">libraries</Link> can be used to automate the process.</p>
      <p>Some development methods include <Link href="/testing/tdd">Test-driven development</Link>.</p>
    </div>
  );
}
