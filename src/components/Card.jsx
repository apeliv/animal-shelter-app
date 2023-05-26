import style from "./Card.module.css";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../assets/userContext";
import { useEffect } from "react";

const Card = ({ animal, setAnimals }) => {
  const isAdmin = useContext(UserContext);
  const [updatedInput, setUpdatedInput] = useState({});
  const [types, setTypes] = useState([]);
  const [isEditClicked, setIsEditClicked] = useState(false);

  async function handleAdopt() {
    await axios.patch(` http://localhost:3001/animals/${animal.id}`, {
      adopted: true,
    });
    const result = await axios.get(" http://localhost:3001/animals");
    setAnimals(result.data);
  }

  const handleEdit = () => {
    setUpdatedInput({
      name: animal.name,
      type: animal.type,
      age: animal.age,
      chip: animal.chip,
      pictureUrl: animal.pictureUrl,
      description: animal.description,
      adopted: animal.adopted,
      examinationDate: animal.examinationDate,
    });
    setIsEditClicked(true);
  };

  async function handleSave() {
    await axios.put(`http://localhost:3001/animals/${animal.id}`, updatedInput);
    const result = await axios.get(" http://localhost:3001/animals");
    setAnimals(result.data);
    setIsEditClicked(false);
  }

  const updatedInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedInput({ ...updatedInput, [name]: value });
  };

  useEffect(() => {
    axios
      .get(" http://localhost:3001/types")
      .then((res) => setTypes(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      className={style.cardSection}
      style={{
        backgroundColor: `${animal.adopted ? "#027b93" : "tomato"}`,
      }}
    >
      <div className={style.pictureAndInfo}>
        {isEditClicked ? (
          <input
            className={style.inputImgUrl}
            type="text"
            name="pictureUrl"
            placeholder="Enter Image URL..."
            value={updatedInput.pictureUrl}
            onChange={updatedInputChange}
          />
        ) : (
          <img src={animal.pictureUrl} alt="Picture of an animal" />
        )}

        <div
          className={isEditClicked ? style.editInfoSection : style.infoSection}
        >
          <span>
            Name:&nbsp;
            {isEditClicked ? (
              <input
                className={style.inputText}
                type="text"
                name="name"
                placeholder="Enter a name..."
                value={updatedInput.name}
                onChange={updatedInputChange}
              />
            ) : (
              <span>{animal.name}</span>
            )}
          </span>

          <span>
            Category:&nbsp;
            {isEditClicked ? (
              <select
                className={style.inputSelect}
                name="type"
                value={updatedInput.type}
                onChange={updatedInputChange}
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            ) : (
              <span>{animal.type}</span>
            )}
          </span>

          <span>
            {isEditClicked ? "Adopted: " : "Status: "}
            {isEditClicked ? (
              <input
                className={style.checkbox}
                type="checkbox"
                checked={updatedInput.adopted}
                onChange={() => {
                  setUpdatedInput({
                    ...updatedInput,
                    adopted: !updatedInput.adopted,
                  });
                }}
              />
            ) : (
              <span>{animal.adopted ? "Adopted" : "NOT Adopted"}</span>
            )}
          </span>
        </div>
      </div>

      <div className={style.descriptionSection}>
        <p className={style.descriptionLabel}>Description:</p>
        {isEditClicked ? (
          <input
            className={style.inputDescription}
            type="text"
            name="description"
            placeholder="Enter a description..."
            value={updatedInput.description}
            onChange={updatedInputChange}
          />
        ) : (
          <p id={style.text}>{animal.description}</p>
        )}
      </div>

      {isAdmin ? (
        <>
          {isEditClicked ? (
            <button className={style.saveButton} onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className={style.editButton} onClick={handleEdit}>
              Edit
            </button>
          )}
        </>
      ) : (
        <button
          className={style.adoptButton}
          disabled={animal.adopted}
          onClick={handleAdopt}
        >
          Adopt
        </button>
      )}
    </div>
  );
};

export default Card;
