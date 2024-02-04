import useWordleInput from "@/lib/hooks/useWordleInput";

export interface IWordleInput {}

const WordleInput = () => {
  const { handleChange, handleKeyDown, inputRefs, inputs } = useWordleInput();
  return (
    <div className="flex gap-2 justify-center">
      {inputs.map((_, index) => (
        <input
          className="w-[50px] h-[50px] rounded-md text-center black"
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          maxLength={1}
          value={inputs[index]}
          onChange={(event) => handleChange(index, event)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default WordleInput;
