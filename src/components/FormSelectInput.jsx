import style from "./InputAnimal.module.css";
const FormSelectInput = ({ id, text, name, setState, array }) => {
  return (
    <div className={style.inputRowTextItem}>
      <label htmlFor={id} className={style.textLabel}>
        {text}
      </label>
      <select
        name={name}
        id={id}
        className={style.inputSelect}
        onChange={setState}
      >
        {array.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelectInput;
