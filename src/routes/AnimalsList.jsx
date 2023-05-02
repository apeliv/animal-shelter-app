import { useEffect, useState } from "react";
import AnimalsCards from "../components/AnimalsCards";
import style from "../components/AnimalsList.module.css";
import axios from "axios";
import Filter from "../components/Filter";
const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [adoptionFilter, setAdoptionFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((res) => {
        setAnimals(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={style.listPageSection}>
      <Filter
        setAdoptionFilter={(e) => {
          setAdoptionFilter(e.target.value);
          setSelectedFilter(e.target.value);
        }}
        setTypeFilter={(e) => {
          setTypeFilter(e.target.value);
          setSelectedFilter(e.target.value);
        }}
        searchFilter={searchFilter}
        setSearchFilter={(e) => {
          setSearchFilter(e.target.value);
          setSelectedFilter(e.target.value);
        }}
      />
      <AnimalsCards
        animals={animals}
        setAnimals={setAnimals}
        adoptionFilter={adoptionFilter}
        typeFilter={typeFilter}
        selectedFilter={selectedFilter}
        searchFilter={searchFilter}
      />
    </div>
  );
};

export default AnimalsList;
