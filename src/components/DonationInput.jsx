import { useContext, useState } from "react";
import style from "./Donations.module.css";
import UserContext from "../assets/userContext";
import axios from "axios";
const DonationInput = ({
  donationTypes,
  setIsSubmitChangeState,
  setIsDonationButtonClicked,
}) => {
  const isAdmin = useContext(UserContext);
  const updatedCategory = isAdmin ? "search" : "offer";
  const initialValue = {
    category: "",
    type: "",
    value: "",
    description: "",
  };
  const [updatedInput, setUpdatedInput] = useState(initialValue);

  const ProcessUpdatedInput = (data) => ({
    category: updatedCategory,
    type: data.type,
    value: parseInt(data.value),
    description: data.description,
  });

  const handleAddDonation = (event) => {
    event.preventDefault();
    const bodyRequest = ProcessUpdatedInput(updatedInput);
    axios
      .post("http://localhost:3001/donations", bodyRequest)
      .then(() => {
        setIsDonationButtonClicked(false);
        setIsSubmitChangeState();
      })
      .catch((err) => console.log(err));
  };

  const updatedInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedInput({ ...updatedInput, [name]: value });
  };
  return (
    <form onSubmit={handleAddDonation} className={style.donationInput}>
      <div>
        <label htmlFor="type" className={style.inputLabel}>
          Type:
        </label>
        <select
          className={style.selectInput}
          id="type"
          name="type"
          value={updatedInput.type}
          onChange={updatedInputChange}
          required
        >
          <option value="">---Select a type---</option>
          {donationTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="value" className={style.inputLabel}>
          Value:
        </label>
        <input
          className={style.textInput}
          type="text"
          name="value"
          value={updatedInput.value}
          onChange={updatedInputChange}
          required
        />
      </div>

      <div className={style.textAreaContainer}>
        <label htmlFor="description" className={style.textAreaLabel}>
          Description:
        </label>
        <textarea
          id="description"
          className={style.textAreaInput}
          name={"description"}
          minLength={5}
          maxLength={30}
          value={updatedInput.description}
          onChange={updatedInputChange}
        ></textarea>
      </div>
      <input
        type="submit"
        className={style.button}
        value="Add donation"
      ></input>
    </form>
  );
};

export default DonationInput;
