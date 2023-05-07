import style from "./InputAnimal.module.css";
const FormOtherInput = ({ id, type, text, state, setState }) => {
  return (
    <div>
      <label htmlFor={id} className={style.textLabel}>
        {text}
      </label>
      <input
        type={type}
        id={id}
        className={style.inputDate}
        value={state}
        onChange={setState}
      />
    </div>
  );
};

export default FormOtherInput;
