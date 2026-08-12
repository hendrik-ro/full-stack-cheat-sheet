import Link from "next/link"

export default function Page() {
  return (
    <div>
      <h1>Testing Libraries</h1>
      <TestingChai />
    </div>
  )
}

function TestingChai() {
  return (
    <div>
      <ul style={{fontSize:"1rem"}}>
        <li><Link target="_blank" rel="noopener noreference" href="https://www.chaijs.com/">Chai</Link> - assertion library for JavaScript</li>
        <li><Link target="_blank" rel="noopener noreference" href="https://mochajs.org/">Mocha</Link> - testing framework for JavaScript</li>
        <li><Link target="_blank" rel="noopener noreference" href="https://sinonjs.org/">Sinon</Link> - library that includes fakes, spies and mocks that can be used with any testing framework</li>
      </ul>
    </div>
  )
}
