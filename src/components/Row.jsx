import { useContext } from "react";
import UserContext from "../assets/userContext";
import styled from "styled-components";

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

const Row = ({ donation, filter }) => {
  const isAdmin = useContext(UserContext);
  return (
    <tr>
      <td>{donation.type}</td>
      <td>{donation.value}</td>
      <td>{donation.description}</td>
      <td>
        {isAdmin ? (
          filter === "search" ? (
            <ButtonContainer>
              <Button>Donated</Button>
              <Button>Delete</Button>
            </ButtonContainer>
          ) : filter === "offer" ? (
            <Button>Accept</Button>
          ) : (
            <ButtonContainer>
              <Button>Repeat</Button>
              <Button>Delete</Button>
            </ButtonContainer>
          )
        ) : filter === "search" ? (
          <Button>Donate</Button>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
};

export default Row;
