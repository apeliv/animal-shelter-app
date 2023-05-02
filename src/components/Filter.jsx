import style from "./AnimalsList.module.css";
import RadioInput from "./RadioInput";
const Filter = ({
  setAdoptionFilter,
  setTypeFilter,
  searchFilter,
  setSearchFilter,
}) => {
  return (
    <div className={style.filterSection}>
      <p className={style.filterTitle}>Filter:</p>
      <RadioInput
        id="all"
        value=""
        setFilter={setAdoptionFilter}
        defaultChecked={true}
        text="All"
      />
      <RadioInput
        id="adopted"
        value="true"
        setFilter={setAdoptionFilter}
        text="Adopted"
      />
      <RadioInput
        id="adopted"
        value="false"
        setFilter={setAdoptionFilter}
        text="Not Adopted"
      />
      <p className={style.filterTitle}>Type:</p>
      <RadioInput id="all" value="" setFilter={setTypeFilter} text="All" />
      <RadioInput id="dog" value="Dog" setFilter={setTypeFilter} text="Dog" />
      <RadioInput id="cat" value="Cat" setFilter={setTypeFilter} text="Cat" />
      <p className={style.filterTitle}>Search:</p>
      <input
        className={style.inputText}
        type="text"
        name="search"
        value={searchFilter}
        onChange={setSearchFilter}
        placeholder="Name of the animal..."
      />
    </div>
  );
};

export default Filter;
