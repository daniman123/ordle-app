import React, { RefObject, useEffect, useRef, useState } from "react";

const useWordleInput = (length: number) => {
  const [inputs, setInputs] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<RefObject<HTMLInputElement>[]>(
    Array.from({ length }, () => React.createRef())
  );

  useEffect(() => {
    inputRefs.current[0].current?.focus();
  }, []);

  const updateInputValue = (index: number, value: string): void => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const focusInput = (index: number, direction: "next" | "previous"): void => {
    const nextIndex = direction === "next" ? index + 1 : index - 1;
    if (nextIndex >= 0 && nextIndex < length) {
      inputRefs.current[nextIndex].current?.focus();
    }
  };

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value.slice(-1);
    updateInputValue(index, value);

    if (value && index < length - 1) {
      focusInput(index, "next");
    } else if (!value && index > 0) {
      focusInput(index, "previous");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
      e.preventDefault();
      focusInput(index, "previous");
    } else if (e.key !== "Backspace" && inputs[index]) {
      e.preventDefault();
      const value = e.key;
      updateInputValue(index, value.slice(-1));
      if (index < length - 1) {
        focusInput(index, "next");
      }
    }
  };

  return { inputs, handleChange, inputRefs, handleKeyDown };
};

export default useWordleInput;
