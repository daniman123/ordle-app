import React, { useEffect, useRef, useState } from "react";

const length = 6;

const useWordleInput = () => {
  const [inputs, setInputs] = useState(Array(length).fill(""));
  const inputRefs = useRef(
    [...Array(length)].map(() => React.createRef<HTMLInputElement>())
  );

  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  useEffect(() => {
    const word = inputs.join("");
    console.log("🚀 ~ useEffect ~ word:", word);
  }, [inputs]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value.slice(-1); // Capture last entered character
    setInputs(newInputs);

    // Focus logic as previously described
    if (event.target.value && index < length - 1) {
      inputRefs.current[index + 1].current?.focus();
    }
    if (!event.target.value && index > 0) {
      inputRefs.current[index - 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1].current?.focus();
    }
  };

  return { inputs, handleChange, inputRefs, handleKeyDown };
};

export default useWordleInput;
