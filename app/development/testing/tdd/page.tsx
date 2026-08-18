import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h1>Test-driven Development</h1>
      <p>
        <strong>TDD</strong> is a development method where test code is written
        before the implementation code.
      </p>
      <TDDRedGreen />
    </div>
  );
}

function TDDRedGreen() {
  return (
    <div>
      <h2>Red-Green-Refactor Cycle</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={
            process.env.NODE_ENV === "development"
              ? "/assets/red-green-refactor.png"
              : "../assets/red-green-refactor.png"
          }
          alt="red-green-refactor"
          width={800}
          height={600}
        />
      </div>
      <ul style={{ fontSize: "1rem" }}>
        <li>
          <strong>Red</strong>: Write tests that describe intended behavior.
        </li>
        <li>
          <strong>Green</strong>: Implement code to pass test.
        </li>
        <li>
          <strong>Refactor</strong>: Clean up, optimize and <em>DRY</em> code.
        </li>
      </ul>
    </div>
  );
}
