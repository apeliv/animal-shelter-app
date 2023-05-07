import style from "./InputAnimal.module.css";
const FormSubmitButton = ({ action, disabled }) => {
  return (
    <div className={style.inputRowContainer}>
      <button
        className={style.button}
        onClick={() => action()}
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};

export default FormSubmitButton;
