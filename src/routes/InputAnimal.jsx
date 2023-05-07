import { useEffect, useState } from "react";
import style from "../components/InputAnimal.module.css";
import axios from "axios";
import FormTextInput from "../components/FormTextInput";
import FormCheckBoxInput from "../components/FormCheckBoxInput";
import FormSelectInput from "../components/FormSelectInput";
import FormOtherInput from "../components/FormOtherInput";
import FormTextAreaInput from "../components/FormTextAreaInput";
import FormSubmitButton from "../components/FormSubmitButton";

const InputAnimal = () => {
  const [types, setTypes] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [examinationDate, setExaminationDate] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [isAdopted, setIsAdopted] = useState(false);
  const [isChip, setIsChip] = useState(false);
  const [disableButtonForWrongName, setDisableButtonForWrongName] =
    useState(false);
  const [disableButtonForWrongAge, setDisableButtonForWrongAge] =
    useState(false);
  const [disableButtonForWrongPictureUrl, setDisableButtonForWrongPictureUrl] =
    useState(false);
  const nameRegEx = /^[A-Z]+[a-zA-Z ]{2,13}$/;
  const ageRegEx = /^([1-9]|[1-9][0-9]|100)$/;
  const pictureUrlRegEx = /\.(jpg|jpeg|png|webp|avif|gif|svg)$/;

  const bodyRequest = {
    name: name,
    type: type,
    age: parseInt(age),
    chip: isChip,
    pictureUrl: pictureUrl,
    description: description,
    adopted: isAdopted,
    examinationDate: examinationDate,
  };

  const sendData = () => {
    axios
      .post(" http://localhost:3001/animals", bodyRequest)
      .then(() => {
        setName("");
        setType("");
        setAge("");
        setIsChip(false);
        setPictureUrl("");
        setDescription("");
        setIsAdopted(false);
        setExaminationDate("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/types")
      .then((res) => setTypes(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={style.formSection}>
      <h2 id={style.formTitle}>Enter a new animal</h2>

      <div className={style.inputRowContainer}>
        <FormTextInput
          id="name"
          text="Name"
          state={name}
          setState={(e) => setName(e.target.value)}
          regEx={nameRegEx}
          setDisableButton={(x) => setDisableButtonForWrongName(x)}
        />
        <FormCheckBoxInput
          id="adopted"
          text="Adopted:"
          state={isAdopted}
          setState={() => setIsAdopted(!isAdopted)}
          disabled={true}
        />
      </div>

      <div className={style.inputRowContainer}>
        <FormSelectInput
          id="type"
          text="Type:"
          name="types"
          setState={(e) => setType(e.target.value)}
          array={types}
        />
        <FormCheckBoxInput
          id="chip"
          text="Chip:"
          state={isChip}
          setState={() => setIsChip(!isChip)}
          disabled={false}
        />
      </div>

      <div className={style.inputRowContainer}>
        <FormTextInput
          id="age"
          text="Age"
          state={age}
          setState={(e) => setAge(e.target.value)}
          regEx={ageRegEx}
          setDisableButton={(x) => setDisableButtonForWrongAge(x)}
        />
        <FormOtherInput
          id="date"
          type="date"
          text="Examination Date:"
          state={examinationDate}
          setState={(e) => setExaminationDate(e.target.value)}
        />
      </div>

      <FormTextInput
        id="pictureUrl"
        text="Profile picture URL"
        state={pictureUrl}
        setState={(e) => setPictureUrl(e.target.value)}
        regEx={pictureUrlRegEx}
        setDisableButton={(x) => setDisableButtonForWrongPictureUrl(x)}
      />

      <FormTextAreaInput
        id="description"
        text="Description:"
        name="description"
        minLength={8}
        maxLength={300}
        state={description}
        setState={(e) => setDescription(e.target.value)}
      />

      <FormSubmitButton
        action={sendData}
        disabled={
          disableButtonForWrongName ||
          disableButtonForWrongAge ||
          disableButtonForWrongPictureUrl
        }
      />
    </div>
  );
};

export default InputAnimal;
