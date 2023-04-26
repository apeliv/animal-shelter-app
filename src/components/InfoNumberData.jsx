import style from "./ShelterInfo.module.css";
const InfoNumberData = ({ label, value }) => {
  return (
    <div className={style.numberDataStyle}>
      <span id={style.numberLabel}>{label}:</span>
      <span id={style.graphicValue}>{value}</span>
    </div>
  );
};
export default InfoNumberData;
