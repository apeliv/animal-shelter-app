import { useContext, useEffect, useState } from "react";
import UserContext from "../assets/userContext";
import style from "../components/Donations.module.css";
import axios from "axios";
import DonationsTable from "../components/DonationsTable";
import DonationInput from "../components/DonationInput";
const Donations = () => {
  const isAdmin = useContext(UserContext);
  const [donations, setDonations] = useState([]);
  const [donationTypes, setDonationTypes] = useState([]);
  const [isDonationButtonClicked, setIsDonationButtonClicked] = useState(false);
  const [isSubmitChangeState, setIsSubmitChangeState] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get(" http://localhost:3001/donations"),
      axios.get(" http://localhost:3001/donationTypes"),
    ])
      .then(([resDonations, resDonationTypes]) => {
        setDonations(resDonations.data);
        setDonationTypes(resDonationTypes.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={style.donationsSection}>
      <button
        className={style.button}
        onClick={() => setIsDonationButtonClicked(true)}
      >
        New donation
      </button>
      {isDonationButtonClicked && (
        <DonationInput
          donationTypes={donationTypes}
          setIsSubmitChangeState={() =>
            setIsSubmitChangeState(!isSubmitChangeState)
          }
          setIsDonationButtonClicked={setIsDonationButtonClicked}
        />
      )}
      <DonationsTable
        title="Search:"
        donations={donations}
        setDonations={setDonations}
        filter="search"
        isSubmitChangeState={isSubmitChangeState}
      />
      <DonationsTable
        title="Offer:"
        donations={donations}
        setDonations={setDonations}
        filter="offer"
        isSubmitChangeState={isSubmitChangeState}
      />
      <DonationsTable
        title="Donated:"
        donations={donations}
        setDonations={setDonations}
        filter="donated"
        isSubmitChangeState={isSubmitChangeState}
      />
    </div>
  );
};

export default Donations;
