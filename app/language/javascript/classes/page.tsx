import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Classes() {
  return (
    <div>
      <h2>Classes</h2>
      <ClassesConstructor />
      <ClassesGettersSetters />
      <ClassesMethods />
      <ClassesInheritance />
      <br />
    </div>
  )
}

export function ClassesConstructor() {
  return (
    <div>
      <h3>Constructor</h3>
      <p>Class use the built-in constructor function to set properties:</p>
      <SyntaxHighlighter language="javascript" style={dracula}>{`class Animal {
  constructor(name) {
    this.name = name;
  }
}`}</SyntaxHighlighter>
    </div>
  )
}

export function ClassesGettersSetters() {
  return (
    <div>
      <h3>Getters and Setters</h3>
      <SyntaxHighlighter language="javascript" style={dracula}>{`class Animal {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }
  get name() {
    return this._name;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    this._color = newColor;
  }
}`}</SyntaxHighlighter>
    <p>The <code>_name</code> marks the property as private. The <code>get</code> method allows read-access to it.</p>
    </div>
  )
}

export function ClassesMethods() {
  return (
    <div>
      <h3>Methods</h3>
      <SyntaxHighlighter language="javascript" style={dracula}>{`class Animal {
  constructor(name, sound) {
    this._name = name;
    this._sound = sound;
  }
  makeSound() {
    console.log(this._name + "makes a " + this._sound + "sound");
  }
}
const duck = new Animal("duck", "quack");
duck.makeSound(); //prints "duck makes a quack sound"`}</SyntaxHighlighter>
    </div>
  )
}

export function ClassesInheritance() {
  return (
    <div>
      <h3>Inheritance</h3>
      <SyntaxHighlighter language="javascript" style={dracula}>{`class Dog extends Animal {
  constructor(name, color, breed) {
    super(name, color);
    this._breed = breed;
  }
  get breed() {
    return this._breed;
  }
}`}</SyntaxHighlighter>
    </div>
  )
}
