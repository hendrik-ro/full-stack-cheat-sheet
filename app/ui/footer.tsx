import Link from "next/link";

export default function HomeFooter() {
  return (
    <div className="footer">
      <p>
        <Link
          href="https://github.com/hendrik-ro/full-stack-cheat-sheet"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          &copy; {new Date().getFullYear()} Full-Stack Cheat Sheet
        </Link>
      </p>
    </div>
  );
}
