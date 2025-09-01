import React, { useEffect, useState } from "react";

const App = () => {
  // Bad code for PR test
  let unusedVar = "I am not used";
  const anotherUnusedVar = "Also not used";
  let unusedLetVar = "Yet another unused variable";

  consol.log("This is a typo!"); // should be console.log

  // Infinite loop - this will crash the app
  useEffect(() => {
    while (true) {
      console.log("Infinite loop!");
    }
  }, []);

  // Unused state
  const [unusedState, setUnusedState] = useState(null);

  // Dead code that never executes
  if (false) {
    console.log("This will never run");
  }

  // Unused function
  const unusedFunction = () => {
    return "I'm never called";
  };

  // Variable declared but never assigned
  let declaredButNotAssigned;

  // Unreachable code
  return <div>App</div>;
  console.log("This code is unreachable");
};

export default App;
