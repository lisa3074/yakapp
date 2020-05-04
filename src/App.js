//import React from "react";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default function App() {
  const [cards, setCards] = useState([
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
  ]);

  return (
    <section className="all">
      <Navigation />
      <Main cards={cards} />
      <button
        onClick={() =>
          setCards(
            cards.concat({
              title: "OMG, did that just happen?",
              list: "todo",
              added: Date.now(),
              id: Math.random(),
              color: "lightblue",
              assignedTo: ["jofh"],
            })
          )
        }
      >
        Add card
      </button>
    </section>
  );
}
