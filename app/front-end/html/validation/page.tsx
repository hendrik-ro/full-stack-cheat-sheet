import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Form Validation</h1>
      <p>Client side form validation can be down within HTML.</p>
      <p>See <Link
        href={"/static/form-validation/index.html"}
        target="_blank">this form mockup</Link> for reference.</p>
    </div>
  )
}
