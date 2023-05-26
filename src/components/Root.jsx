import style from "./Root.module.css";
import logo from "/public/shelter_logo.png";

const Root = () => {
  return (
    <div className={style.rootPageContent}>
      <img className={style.logo} src={logo} alt="Logo picture" />
      <h1 className={style.text}>Provide a hand for a paw.</h1>
    </div>
  );
};

export default Root;
