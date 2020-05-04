import React from "react";
import List from "./List";
export default function Main({ cards }) {
  return (
    <main>
      <List header="To do" cards={cards.filter((c) => c.list === "todo")} />
      <List header="Doing" cards={cards.filter((c) => c.list === "doing")} />
      <List header="Done" cards={cards.filter((c) => c.list === "done")} />
    </main>
  );
}
