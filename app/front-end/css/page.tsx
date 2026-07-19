import Link from "next/link";

export default function Page() {
  return (<div>
  <div id="css">
      <h1>CSS</h1>
      <p><a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Cascading Style Sheets</a> are used to specify the presentation and styling of a document written in a markup language such as HTML.</p>
      <p>A simple website design system can be found <Link target="_blank" href="/static/website-design-system/index.html">here</Link>.</p>
    </div>
  </div>
    )
}
