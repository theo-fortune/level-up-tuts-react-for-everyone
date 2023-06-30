import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Input value={inputValue} onChange={ (e) => {if (!e.target.value.includes("t")) {
        setInputValue(e.target.value)
      }} } />
    </div>
  );
};

export default Input;
