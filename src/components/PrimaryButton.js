//import React from "react";
import React, { useState } from "react";

export default function PrimaryButton(props) {
  const [clicks, setClicks] = useState(0);
  function buttonClicked(e) {
    setClicks(clicks + 1);
  }
  return (
    <button className="primary" onClick={buttonClicked}>
      {clicks}
    </button>
  );
}
