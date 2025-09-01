import React from "react";

const App = () => {
  // Bad code for PR test
  let unusedVar = "I am not used";

  consol.log("This is a typo!"); // should be console.log

  if (true) {
    // Infinite loop
    while (true) {
      console.log("oops");
    }
  }

  const obj = {};
  obj = { key: "reassigning const" }; // invalid reassign

  return <div>App</div>;
};

export default App;
