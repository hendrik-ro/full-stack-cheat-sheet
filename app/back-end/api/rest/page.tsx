import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>REST</h1>
      <p>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Glossary/REST"
        >
          REST
        </Link> or Representational State Transfer is an architectural style for designing networked applications.
      </p>
      <p>A REST API is <em>stateless</em>, meaning the server does not store any client state between requests and vise versa. Client and server are unaware of each other.</p>
    </div>
  );
}
