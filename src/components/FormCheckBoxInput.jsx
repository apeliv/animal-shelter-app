import style from "./InputAnimal.module.css";
const FormCheckBoxInput = ({ id, text, state, setState, disabled }) => {
  return (
    <div className={style.inputRowCheckItem}>
      <label htmlFor={id} className={style.checkboxLabel}>
        {text}
      </label>
      <input
        type="checkbox"
        id={id}
        value={state}
        onChange={setState}
        className={style.inputCheckBox}
        disabled={disabled}
        checked={state}
      />
    </div>
  );
};

export default FormCheckBoxInput;
