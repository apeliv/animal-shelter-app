import style from "./ShelterInfo.module.css";
const InfoTextData = ({ label, value }) => {
  return (
    <div className={style.textDataStyle}>
      <span id={style.textLabel}>{label}:</span>
      <span>{value}</span>
    </div>
  );
};
export default InfoTextData;
