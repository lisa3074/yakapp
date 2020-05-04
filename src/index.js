import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

/* function PrimaryButton() {
  return <button className="primary">Click me!</button>;
}
function SecondaryButton() {
  return <button className="secondary">Click me!</button>;
}

function Form(props) {
  return (
    <form>
      <fieldset>
        <legend>Form</legend>
        <input id="name" />
        <button className="primary">Primary</button>
      </fieldset>
    </form>
  );
}

function Card(props) {
  return (
    <li className="card">
      <h3>Card {props.header}</h3> 
      <PrimaryButton />
      <SecondaryButton />
    </li>
  );
}
//LISTS
function List(props) {
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>
        <Card />
        <Card />
      </ul>
      <Form />
    </section>
  );
}

//NAVIGATION
function Navigation() {
  return (
    <nav>
      <ul>
        <li>Nav one</li>
        <li>Nave two</li>
        <li>Nav three</li>
      </ul>
    </nav>
  );
}

//THE CONTAINER OF LISTS
function Main() {
  return (
    <main>
      <List header="To do" />
      <List header="Doing" />
      <List header="Done" />
    </main>
  );
}

//THE CONTAINER OF ALL
function App() {
  return (
    <section className="all">
      <Navigation />
      <Main />
    </section>
  );
} */
ReactDOM.render(<App />, document.getElementById("root"));
