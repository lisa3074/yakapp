import React from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default function App() {
  const cards = [
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055291061,
      id: 1,
      color: "hotpink",
      assignedTo: ["jofh"],
    },
    {
      title: "Make it dynamic",
      list: "todo",
      added: 1588055091061,
      id: 2,
      color: "lightblue",
      assignedTo: ["jofh", "davi"],
    },
  ];
  return (
    <section className="all">
      <Navigation />
      <Main cards={cards} />
    </section>
  );
}
