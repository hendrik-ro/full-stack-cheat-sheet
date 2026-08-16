import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Glossary/REST"
        >
          REST
        </Link>
        or Representational State Transfer is an architectural style for
        designing networked applications.
      </p>
    </div>
  );
}
