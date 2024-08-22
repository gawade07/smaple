import { useRef } from "react";
import { GrAddCircle } from "react-icons/gr";

function InputValue({ addButtonValue }) {
  const inputNameElement = useRef("sda");
  const inputDateElement = useRef("adte");
  function onButtonClick() {
    const inputName = inputNameElement.current.value;
    const inputDate = inputDateElement.current.value;
    inputNameElement.current.value = "";
    // inputDateElement.current.value = "";
    addButtonValue(inputName,inputDate)
  }
  return (
    <div className="inputValue">
      <input type="text" ref={inputNameElement} placeholder="Enter Todo...." />
      <input type="date" ref={inputDateElement} />
      <button
        onClick={() => {
          onButtonClick();
        }}
      >
        <GrAddCircle />
      </button>
    </div>
  );
}
export default InputValue;
