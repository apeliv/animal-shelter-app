import { useContext } from "react";
import UserContext from "../assets/userContext";
import styled from "styled-components";
import axios from "axios";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  background-color: rgb(30, 125, 73);
  padding: 1vw 2vw;
  height: fit-content;
  font-size: large;
`;

const Row = ({ donation, filter, setIsDonationStatusChangeState }) => {
  const isAdmin = useContext(UserContext);

  const searchBodyRequest = {
    category: "search",
    type: donation.type,
    value: donation.value,
    description: donation.description,
  };

  const moveToDonatedList = () => {
    axios
      .patch(`http://localhost:3001/donations/${donation.id}`, {
        category: "donated",
      })
      .then(() => setIsDonationStatusChangeState())
      .catch((err) => console.log(err));
  };

  const removeDonation = () => {
    axios
      .delete(`http://localhost:3001/donations/${donation.id}`)
      .then(() => setIsDonationStatusChangeState())
      .catch((err) => console.log(err));
  };

  const moveToSearchList = () => {
    axios
      .post("http://localhost:3001/donations", searchBodyRequest)
      .then(() => setIsDonationStatusChangeState())
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{donation.type}</td>
      <td>{donation.value}</td>
      <td>{donation.description}</td>
      <td>
        {isAdmin ? (
          filter === "search" ? (
            <ButtonContainer>
              <Button onClick={moveToDonatedList}>Donated</Button>
              <Button onClick={removeDonation}>Delete</Button>
            </ButtonContainer>
          ) : filter === "offer" ? (
            <Button onClick={moveToDonatedList}>Accept</Button>
          ) : (
            <ButtonContainer>
              <Button onClick={moveToSearchList}>Repeat</Button>
              <Button onClick={removeDonation}>Delete</Button>
            </ButtonContainer>
          )
        ) : filter === "search" ? (
          <Button onClick={moveToDonatedList}>Donate</Button>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

export default Row;
