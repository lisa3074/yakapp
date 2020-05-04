import React from "react";
import Card from "./Card";
import Form from "./Form";
export default function List(props) {
  console.log(props);
  //Nærmest en forEach i en konstant. For hvert card (object), så lav et element der hedder Card med objektet indeni.
  //De tre prikker foran gør at objektet bliver til en string af de forskellige entries.
  const cards = props.cards.map((card) => <Card key={card.id} {...card} />);
  console.log(cards);
  return (
    <section>
      <h2>{props.header}</h2>
      {/*Sæt variablen ind med så mange Card elementer der er i cards konstanten (databasen fx) */}
      <ul>{cards}</ul>
      <Form />
    </section>
  );
}
