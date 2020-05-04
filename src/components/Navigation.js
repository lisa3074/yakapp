import React from "react";
import Counter from "./Counter";
export default function Navigation() {
  const nav = [
    <a href="https://lisabianca.dk" key="home">
      Home
    </a>,
    <br key="break" />,
    <a href="https://lisabianca.dk" key="contact">
      Contact
    </a>,
  ];
  return (
    <nav>
      <ul>
        {nav}
        <Counter />
      </ul>
    </nav>
  );
}
