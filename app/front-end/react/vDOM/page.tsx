export default function Page() {
  return (
    <div>
      <h1>vDOM</h1>
      <p>The virtual DOM (vDOM) is a lightweight representation of the DOM used by React to efficiently update the UI.</p>
      <p>Instead of updating the whole DOM for every change, React uses the vDOM to update only the necessary parts.</p>
      <p>This can lead to massive improvements in performance, especially for large applications where only small elements need to be updated.</p>
    </div>
  )
}
