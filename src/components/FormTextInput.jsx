import style from "./InputAnimal.module.css";
import { useRef, useState, useEffect } from "react";
const FormTextInput = ({
  id,
  text,
  state,
  setState,
  regEx,
  setDisableButton,
}) => {
  const [error, setError] = useState("");
  const isMountRender = useRef(false);

  const validateData = () => {
    if (!regEx.test(state)) {
      setError(`Enter a valid ${text.toLowerCase()}`);
      setDisableButton(error);
    } else {
      setError("");
      setDisableButton(error);
    }
  };

  useEffect(() => {
    if (isMountRender.current) {
      isMountRender.current = false;
      return;
    }
    validateData();
  });
  return (
    <div className={style.inputRowTextItem}>
      <label htmlFor={id} className={style.textLabel}>
        {text}:
      </label>
      <input
        type="text"
        id={id}
        className={style.inputText}
        value={state}
        onChange={setState}
      />
      <div className={style.warning}>{error}</div>
    </div>
  );
};

export default FormTextInput;
