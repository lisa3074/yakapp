import React from "react";
import PrimaryButton from "./PrimaryButton";
export default function Form(props) {
  return (
    <form>
      <fieldset>
        <legend>Form</legend>
        <input id="name" />
        <PrimaryButton />
      </fieldset>
    </form>
  );
}
