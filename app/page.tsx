export default function Home() {
  return (
    <div>
      <main>
        <HomeHeader />
        <HomeContent />
        <HomeFooter />
      </main>
    </div>
  );
}

function HomeHeader() {
  return (
    <header>
        <nav>
            <a href="#front">Front End</a>
            <a href="#back">Back End</a>
            <a href="#language">Programming Languages</a>
        </nav>
    </header>
  )
}

function HomeContent() {
  return (
    <div className="content">
      <h1>Full-Stack Engineer Cheat Sheet</h1>
      <h2 id="front">Front End</h2>
        <a href="./front-end/html.html">HTML</a>
        <a href="./front-end/css.html">CSS</a>
        <a href="./front-end/react.html">React</a>
        <a href="./front-end/nextjs.html">NextJS</a>
        <h2 id="back">Back End</h2>
        <a href="./back-end/api.html">APIs</a>
        <a href="./back-end/database.html">Database</a>
        <a href="./back-end/server.html">Server</a>
        <h2 id="language">Programming Languages</h2>
        <a href="./language/golang.html">Golang</a>
        <a href="./language/javascript.html">JavaScript</a>
    </div>
  )
}

function HomeFooter() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Full-Stack Engineer Cheat Sheet</p>
    </footer>
  )
}
