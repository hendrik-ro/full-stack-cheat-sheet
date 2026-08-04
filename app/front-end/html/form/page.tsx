"use client"

import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./styles.module.css"
import { useRef } from "react";

export default function Page() {
  return (
    <div>
      <h1>Form</h1>
      <FormValidation />
      <FormLogin />
    </div>
  );
}


export function FormValidation() {
  const hiddenElement = useRef<HTMLParagraphElement>(null)
  const buttonElement = useRef<HTMLButtonElement>(null)
  const toggleVisibility = () => {
    if (hiddenElement.current) {
      hiddenElement.current.style.display =
        hiddenElement.current.style.display === "none" ? "block" : "none";
    }
    if (buttonElement.current) {
      buttonElement.current.innerHTML =
        buttonElement.current.innerHTML === "Show HTML for mockup form" ? "Hide HTML for mockup form" : "Show HTML for mockup form";
    }
  }

  return (
    <div>
      <h2>Validation</h2>
      <p>Client side form validation can be done within HTML.</p>
      <p>
        See{" "}
        <Link href={"/static/form-validation/index.html"} target="_blank">
          this form mockup
        </Link>{" "}
        for reference.
      </p>
      <button
        ref={buttonElement}
        id={styles.button}
        onClick={toggleVisibility}
      >Show HTML for mockup form</button>
      <section id={styles.staticCode} ref={hiddenElement} style={{display: "none"}}>
        <SyntaxHighlighter language="html" style={dracula}>{`<!DOCTYPE html>
        <html lang="en" dir="ltr">
          <body style="color: white; background-color: rgb(15, 15, 15); width: 600px; border: 1px solid white; padding: 15px; margin: 30px auto;">
            <h1>Form</h1>
            <form action="" method="POST">
                <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">form action="" method="POST"</p>
                  <label for="text">You can enter text here:</label>
            			<input type="text" name="text" required minlength="3" maxlength="20" pattern="[aA].*">
               <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="text" name="text" required minlength="3" maxlength="20" pattern="[aA].*"</p>
               <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input text field restricted to: 3 - 20 characters, starting with 'a' or 'A' (regex)</p>
                <hr>
                  <label for="num">You can enter a number here:</label>
                  <input type="number" name="num" required min="1" max="99">
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="number" name="num" required min="1" max="99"</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input number field restricted to: 1 - 99</p>
                <hr>
                  <label for="slider">You can slide this:</label>
                  <br>
                  <span>Left</span>
                  <input type="range" name="slider" value="3" min="1" max="5">
                  <span>Right</span>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="range" name="slider" value="3" min="1" max="5"</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input range slider from 1 - 5 (default: 1)</p>
                <hr>
               <label for="boxes">You can check these:</label>
                  <input type="checkbox" name="boxes" value="first">
                  <label for="first">First</label>
                  <input type="checkbox" name="boxes"  value="second">
                  <label for="second">Second</label>
                  <input type="checkbox" name="boxes" value="third">
                  <label for="third">Third</label>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="checkbox" name="boxes" value="first"</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">three input checkboxes with values "first", "second" and "third"</p>
                <hr>
              <label for="radio">You can select one of these:</label>
                  <input type="radio" name="radio" value="true">
                  <label for="true">TRUE</label>
                  <input type="radio" name="radio" value="false">
                  <label for="false">FALSE</label>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="radio" name="radio" value="true"</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">two input radios with values "true" and "false"</p>
                <hr>
                  <label for="dropdown">You can select one of these</label>
                  <select name="dropdown">
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                  </select>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">select name="dropdown"</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">option value="first">First</option</p>
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">select dropdwon with three children 'option'</p>
                <hr>
                  <input type="submit" value="Submit to Reset">
                  <p style="font-size: 0.75rem; margin-left: 10px; color: lightcoral">input type="submit" value="Submit to Reset"</p>
              </form>
          </body>
        </html>`}</SyntaxHighlighter>
      </section>
    </div>
  )
}


export function FormLogin() {
  return (
    <div>
      <h2>Login Form</h2>
      <p>A simple login form can be created with the jsx element <code>form</code>:</p>
      <SyntaxHighlighter language="jsx" style={dracula}>{`<form>
  <h3>Login form</h3>
  <label htmlFor="username">Username:</label>
  <input type="text" name="username" id="username" />
  <br />
  <label htmlFor="user-pw">Password:</label>
  <input type="password" name="user-pw" id="user-pw" />
</form>`}</SyntaxHighlighter>
      <div>
        <form style={{border: "1px solid white", padding: "10px", width: "20rem"}}>
          <h3 style={{textAlign: "left"}}>Login form</h3>
          <label htmlFor="username">Username:</label>
      		<input type="text" name="username" id="username" />
          <br />
          <label htmlFor="user-pw">Password:</label>
          <input type="password" name="user-pw" id="user-pw" />
        </form>
      </div>
    </div>
  )
}
