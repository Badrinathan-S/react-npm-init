import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ErrorBoundries from "./ErrorBoundries";
import Portal from "./Portal";

const Page3 = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <div>
      <Button onClick={() => setShow(!show)}>Click Me!</Button>
      {show && (
        <ErrorBoundries>
          <Portal>
            <div>Portal Render</div>
          </Portal>
        </ErrorBoundries>
      )}
    </div>
  );
};

export default Page3;
