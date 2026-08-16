import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>WebSockets</h1>
      <p>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"
        >
          WebSockets
        </Link>
        are a protocol for full-duplex communication between a client and a
        server.
      </p>
    </div>
  );
}
