import style from "./AnimalsList.module.css";

const RadioInput = ({ id, value, setFilter, defaultChecked, text }) => {
  return (
    <div className={style.filterInputAndLabel}>
      <input
        type="radio"
        name="animal"
        id={id}
        value={value}
        onChange={setFilter}
        defaultChecked={defaultChecked}
      />
      <label className={style.filterLabel} htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
