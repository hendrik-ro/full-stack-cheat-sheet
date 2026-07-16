import Link from "next/link";

export default function Home() {
  return (
      <main>
        <HomeContent />
      </main>
  );
}

function HomeContent() {
  return (
    <div className="home">
      <h1>Full Stack Engineer Cheat Sheet</h1>
      <p style={{fontSize: '12px'}}>This cheat sheet is work in progress and is continuously updated.</p>
      <h2 id="front">Front End</h2>
        <Link href="./front-end/html/">HTML</Link>
        <Link href="./front-end/css/">CSS</Link>
        <Link href="./front-end/react/">React</Link>
        <h2 id="back">Back End</h2>
        <Link href="./back-end/api/">APIs</Link>
        <Link href="./back-end/database/">Database</Link>
        <Link href="./back-end/server/">Server</Link>
        <h2 id="language">Programming Languages</h2>
        <Link href="./language/golang/">Golang</Link>
        <Link href="./language/javascript/">JavaScript</Link>
    </div>
  )
}
