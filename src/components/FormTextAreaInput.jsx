import style from "./InputAnimal.module.css";
const FormTextAreaInput = ({
  id,
  text,
  name,
  minLength,
  maxLength,
  state,
  setState,
}) => {
  return (
    <div className={style.inputRowTextItem}>
      <label htmlFor={id} className={style.textLabel}>
        {text}
      </label>
      <textarea
        id={id}
        className={style.inputTextArea}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        value={state}
        onChange={setState}
      ></textarea>
    </div>
  );
};

export default FormTextAreaInput;
