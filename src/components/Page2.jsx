import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ErrorBoundries from "./ErrorBoundries";

const Page2 = () => {
  const [count, setCount] = useState(false);

  const handleEvent = () => {
    setCount(!count);
  };

  if (count) {
    throw new Error("Error Throw!");
  }

  return (
    <div>
      <Button onClick={handleEvent}>Click me</Button>
      <div>Page2</div>
    </div>
  );
};

export default Page2;
