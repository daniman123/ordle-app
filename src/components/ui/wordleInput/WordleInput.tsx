import useWordleInput from "@/lib/hooks/useWordleInput";

export interface IWordleInput {}

const WordleInput = () => {
  const { handleChange, handleKeyDown, inputRefs, inputs } = useWordleInput();
  return (
    <div className="WordleInput-container">
      {inputs.map((_, index) => (
        <input
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          value={inputs[index]}
          onChange={(event) => handleChange(index, event)}
          maxLength={1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            marginRight: "5px",
            textAlign: "center",
            color: "black",
          }}
        />
      ))}
    </div>
  );
};

export default WordleInput;
