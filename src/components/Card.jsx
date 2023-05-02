import style from "./Card.module.css";
import axios from "axios";

const Card = ({ animal, setAnimals }) => {
  const bodyRequestUpdatedAdoption = {
    name: animal.name,
    type: animal.type,
    pictureUrl: animal.pictureUrl,
    chip: animal.chip,
    age: animal.age,
    description: animal.description,
    examination: animal.examination,
    adopted: true,
  };

  async function handleAdopt() {
    await axios.put(
      ` http://localhost:3001/animals/${animal.id}`,
      bodyRequestUpdatedAdoption
    );
    const result = await axios.get(" http://localhost:3001/animals");
    setAnimals(result.data);
  }
  return (
    <div
      className={style.cardSection}
      style={{
        backgroundColor: `${animal.adopted ? "cornflowerblue" : "red"}`,
      }}
    >
      <div className={style.pictureAndInfo}>
        <img src={animal.pictureUrl} alt="Picture of an animal" />
        <div className={style.infoSection}>
          <span>Name: {animal.name}</span>
          <span>Type of animal: {animal.type}</span>
          <span>Status: {animal.adopted ? "Adopted" : "NOT Adopted"}</span>
        </div>
      </div>
      <div className={style.descriptionSection}>
        <p id={style.label}>Description:</p>
        <p id={style.text}>{animal.description}</p>
      </div>
      <button
        className={style.button}
        disabled={animal.adopted}
        onClick={handleAdopt}
      >
        Adopt
      </button>
    </div>
  );
};

export default Card;
