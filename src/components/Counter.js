import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    //set state to be equal to it's current value + 1
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>You've clicked me {count} times</button>
      <Dumb count={count} />
    </>
  );
}
function Dumb(props) {
  return <div>{props.count}</div>;
}
