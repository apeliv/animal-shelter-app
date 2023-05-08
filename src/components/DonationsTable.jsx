import { useEffect, useState } from "react";
import style from "./Donations.module.css";
import Row from "./Row";
import axios from "axios";
const DonationsTable = ({
  title,
  donations,
  setDonations,
  filter,
  isSubmitChangeState,
}) => {
  const [isDonationStatusChangeState, setIsDonationStatusChangeState] =
    useState(false);
  useEffect(() => {
    axios
      .get(" http://localhost:3001/donations")
      .then((res) => setDonations(res.data))
      .catch((err) => console.log(err));
  }, [isSubmitChangeState, isDonationStatusChangeState]);
  return (
    <div className={style.tableSection}>
      <h2>{title}</h2>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {donations
            .filter((donation) => donation.category === filter)
            .map((donation) => (
              <Row
                key={donation.id}
                donation={donation}
                filter={filter}
                setIsDonationStatusChangeState={() =>
                  setIsDonationStatusChangeState(!isDonationStatusChangeState)
                }
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationsTable;
