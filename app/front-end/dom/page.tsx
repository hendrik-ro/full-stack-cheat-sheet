import Image from "next/image";

export default function Page() {
  return (
    <div>
      <h2>DOM</h2>
      <p>
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
        >
          DOM
        </a>{" "}
        is the Document Object Model, a programming interface for web documents.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={"/assets/dom.png"}
          alt="dom_structure"
          width={800}
          height={600}
        />
      </div>
      <p>
        It represents the tree-like structure of a web page as a tree of
        objects, allowing developers to manipulate the page`s content and
        structure.
      </p>
      <p>
        It allows for a hierachy within a web page and allows JavaScript to
        access, modify and update its structure.
      </p>
    </div>
  );
}
