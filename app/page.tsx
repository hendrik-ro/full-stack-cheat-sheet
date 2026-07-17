'use client';

import Link from "next/link";
import style from "./style.module.css";


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
      <p style={{textAlign: 'center', fontSize: '12px'}}>This cheat sheet is work in progress and is continuously updated.</p>
      <h2 id="front">Front End</h2>
      <div className={style.topics}>
        <Link href="./front-end/html/"><button className={style.topicsItem}>HTML</button></Link>
        <Link href="./front-end/css/"><button className={style.topicsItem}>CSS</button></Link>
        <Link href="./front-end/react/"><button className={style.topicsItem}>React</button></Link>
      </div>
      <h2 id="back">Back End</h2>
      <div className={style.topics}>
        <Link href="./back-end/api/"><button className={style.topicsItem}>APIs</button></Link>
        <Link href="./back-end/database/"><button className={style.topicsItem}>Database</button></Link>
        <Link href="./back-end/server/"><button className={style.topicsItem}>Server</button></Link>
      </div>
      <h2 id="language">Programming Languages</h2>
      <div className={style.topics}>
        <Link href="./language/golang/"><button className={style.topicsItem}>Golang</button></Link>
        <Link href="./language/javascript/"><button className={style.topicsItem}>JavaScript</button></Link>
      </div>
    </div>
  )
}
