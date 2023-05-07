import Card from "./Card";
import style from "./AnimalsList.module.css";
import { useEffect } from "react";
import axios from "axios";

const AnimalsCards = ({
  animals,
  setAnimals,
  adoptionFilter,
  typeFilter,
  selectedFilter,
  searchFilter,
}) => {
  async function handleChangeOfRadioAndSearchAfterFirstInput(filter) {
    const res = await axios.get("http://localhost:3001/animals");
    if (filter === "") {
      setAnimals(res.data);
    } else if (filter === adoptionFilter) {
      setAnimals(
        res.data.filter((animal) => animal.adopted.toString() === filter)
      );
    } else if (filter === typeFilter) {
      setAnimals(res.data.filter((animal) => animal.type === filter));
    } else if (filter === searchFilter) {
      setAnimals(res.data.filter((animal) => animal.name === filter));
    }
  }

  useEffect(() => {
    setAnimals(
      animals.filter((animal) => animal.adopted.toString() === adoptionFilter)
    );
  }, [adoptionFilter]);

  useEffect(() => {
    setAnimals(animals.filter((animal) => animal.type === typeFilter));
  }, [typeFilter]);

  useEffect(() => {
    handleChangeOfRadioAndSearchAfterFirstInput(selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {
    setAnimals(animals.filter((animal) => animal.name === searchFilter));
  }, [searchFilter]);

  useEffect(() => {
    setAnimals(animals);
  });

  return (
    <div className={style.animalsCardsSection}>
      {animals.map((animal) => (
        <Card key={animal.id} animal={animal} setAnimals={setAnimals} />
      ))}
    </div>
  );
};

export default AnimalsCards;
