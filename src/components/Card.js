import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
export default function Card(props) {
  return (
    <li className="card">
      <h3>{props.title}</h3>
      <p>ID: {props.id}</p>
      <p>Color: {props.color}</p>
      <p>Assigned to: {props.assignedTo}</p>
      <PrimaryButton />
      <SecondaryButton />
    </li>
  );
}
