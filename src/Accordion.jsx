import React, { useState } from "react";

const Accordion = () => {
  const [isToggled, setIsToggled] = useState(false);
  const showme = isToggled ? <h3>Shown Me</h3> : null;
  return (
    <div>
      {showme}
      {/* {isToggled && <h3>Showed Me</h3>} */}
      {/* {isToggled ? <h3>Shown Me</h3> : null} */}
      <button onClick={() => setIsToggled(!isToggled)}>Show me</button>
      {/* The button logic says setIsToggled is going to be the opposite of isToggled ie if it's true make it false, if it's false make it true */}
    </div>
  );
};

export default Accordion;
