import React from "react";
import Card from "./Card";
import Form from "./Form";
export default function List(props) {
  console.log(props);
  return (
    <section>
      <h2>{props.header}</h2>
      <ul>
        <Card {...props.cards[0]} />
        <Card {...props.cards[1]} />
      </ul>
      <Form />
    </section>
  );
}
